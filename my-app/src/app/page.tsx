"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { WalletAuthButton } from "@/components/wallet-auth-button";
import { useWaitForTransactionReceipt } from "@worldcoin/minikit-react";
import { Address, createPublicClient, formatUnits, http, parseUnits } from "viem";
import { worldchain } from "@/lib/chains";
import TokenFactory from "@/components/TokenFactory";
import toast from "react-hot-toast";
import { TOKEN_ABI, TOKEN_FACTORY_ABI, TOKEN_FACTORY_CONTRACT_ADDRESS } from "@/token-factory-abi";
import { MiniKit } from "@worldcoin/minikit-js";
import { VerifyButton } from "@/components/VerifyButton";

export type Token = {
  name: string;
  symbol: string;
  balance: number;
  address: Address;
  iconId: number;
}

export default function Page() {
  const { data: session, status } = useSession();
  const [walletConnected, setWalletConnected] = useState(false);
  const [verified, setVerified] = useState(false);
  const [transactionId, setTransactionId] = useState<string>("");
  const [isMinting, setIsMinting] = useState(false);
  const [tokenAddresses, setTokenAddresses] = useState<Address[]>([]);
  const [tokens, setTokens] = useState<Token[]>([]);
  const [isLoading, setIsLoading] = useState(false);



  // Initialize Viem client
  const client = createPublicClient({
    chain: worldchain,
    transport: http("https://worldchain-mainnet.g.alchemy.com/public"),
  });

   // Check if user is authenticated when session changes
   useEffect(() => {
    if (status === "authenticated" && session?.user?.address) {
      setWalletConnected(true);
      console.log("User authenticated:", session.user);
    }
  }, [session, status]);


  // Handle wallet connection success
  const handleWalletConnected = () => {
    setWalletConnected(true);
    console.log("Wallet connected");
  };


  // Handle verification success
  const handleVerificationSuccess = () => {
    console.log("Verification success callback triggered in TuteApp");
    setVerified(true);
  };

  // Track transaction status
  const { isLoading: isConfirming, isSuccess: isConfirmed, isError: isFailed } =
    useWaitForTransactionReceipt({
      client,
      appConfig: {
        app_id: process.env.NEXT_PUBLIC_APP_ID || "app_db9697e5c674170c43cfd9fe68a0ce37",
      },
      transactionId,
    });

  // Update UI when transaction is confirmed
  useEffect(() => {
    setIsLoading(false);
    if (isConfirmed && isMinting) {
      setIsMinting(false);
      toast.dismiss();
        toast.success("Token Successfully Created!", {
          style: {
            background: "#2B2F36",
            color: "#fff",
          },
        });
        // Refetch token list
        fetchTokenAddresses();
    }

    if( isFailed && isMinting) {
      setIsMinting(false);
      toast.dismiss();
        toast.error("Token Creation Failed!", {
          style: {
            background: "#2B2F36",
            color: "#fff",
          },
        });
    }

    
  }, [isConfirmed, isMinting]);


  // Handle success
  const handleSuccess = (txId: string) => {
    console.log("Claim initiated with transaction ID:", txId);
    setTransactionId(txId);
    setIsMinting(true);
  };


  // Fetch token addresses
  const fetchTokenAddresses = async () => {
    if (!walletConnected || !session?.user?.address) return;
    
    if(session.user.address) {
      try {
        const addresses = await client.readContract({
          address: TOKEN_FACTORY_CONTRACT_ADDRESS as Address,
          abi: TOKEN_FACTORY_ABI,
          functionName: "getAllTokens",
        }) as Address[];
        
        setTokenAddresses(addresses);
      } catch (error) {
        console.error("Error fetching token addresses:", error);
      }
    }
  };

  // Fetch token details
  const fetchTokenDetails = async () => {
    if (!tokenAddresses.length) return;
    
    const address = session?.user?.address as Address;
    try {
      const tokenDetailsPromises = tokenAddresses.map(async (tokenAddress) => {
        const [name, symbol, balance, iconId] = await Promise.all([
          client.readContract({
            address: tokenAddress,
            abi: TOKEN_ABI,
            functionName: 'name',
          }),
          client.readContract({
            address: tokenAddress,
            abi: TOKEN_ABI,
            functionName: 'symbol',
          }),
          client.readContract({
            address: tokenAddress,
            abi: TOKEN_ABI,
            functionName: 'balanceOf',
            args: [address], // Pass the user's address to balanceOf
          }),
          client.readContract({
            address: tokenAddress,
            abi: TOKEN_ABI,
            functionName: 'iconId',
          }),
        ]);

        return {
          address: tokenAddress,
          name: String(name),
          symbol: String(symbol),
          balance: Number(formatUnits(balance as bigint, 18)), // Changed from supply to balance
          iconId: Number(iconId),
        };
      });

      const tokenDetails = await Promise.all(tokenDetailsPromises);

      console.log(tokenDetails)
      setTokens(tokenDetails);
    } catch (error) {
      console.error("Error fetching token details:", error);
    }
  };

  // Load tokens when connected and address changes
  useEffect(() => {
    if (walletConnected && session?.user?.address) {
      fetchTokenAddresses();
    }
  }, [walletConnected, session?.user?.address]);

  // Load token details when addresses change
  useEffect(() => {
    if (tokenAddresses.length) {
      fetchTokenDetails();
    }
  }, [tokenAddresses]);

  const fetchTokens = async () => {
    if (session?.user?.address) {
      const data = await client.readContract({
        address: TOKEN_FACTORY_CONTRACT_ADDRESS,
        abi: TOKEN_FACTORY_ABI,
        functionName: 'getAllTokens',
      })

      console.log(data)
    }
  }
  
  async function handleAddToken(tokenName: string, tokenSymbol: string, tokenSupply: string, iconIndex: number) {
    if (!MiniKit.isInstalled()) {
      console.error("MiniKit is not installed");
      return;
    }

    if (!session?.user?.address) {
      console.error("User not authenticated");
      return;
    }
    
    if (tokenName.length === 0 || tokenSymbol.length === 0 || tokenSupply.length === 0) {
      toast.dismiss();
      toast.error("Please fill the form", {
        style: {
          background: "#2B2F36",
          color: "#fff",
        },
      });
      return;
    }

    setIsLoading(true);
    toast.loading("Submitting Form...", {
      style: {
        background: "#2B2F36",
        color: "#fff",
      },
    });

    try {
      // Prepare transaction data
      const { finalPayload } = await MiniKit.commandsAsync.sendTransaction({
              transaction: [
                {
                  address: TOKEN_FACTORY_CONTRACT_ADDRESS,
                  abi: TOKEN_FACTORY_ABI,
                  functionName: "createToken",
                  args: [session.user.address, parseUnits(tokenSupply, 18), tokenName, tokenSymbol, iconIndex],
                },
              ],
            });
            
            console.log(finalPayload, "FINAL PAYLOAD")
      
            if (finalPayload.status === "error") {
              setIsLoading(false)
              console.error("Error minting tokens:", finalPayload);
              return;
            }

      toast.dismiss();
      toast.loading("Creating your token...", {
        style: {
          background: "#2B2F36",
          color: "#fff",
        },
      });

      handleSuccess(finalPayload.transaction_id)

    } catch (error) {
      console.error("Error creating token:", error);
      setIsLoading(false)
      toast.dismiss();
      toast.error("Failed to create token", {
        style: {
          background: "#2B2F36",
          color: "#fff",
        },
      });
    }
  }

  return (
    <main className="flex min-h-screen min-w-screen flex-col pb-16 bg-[#f5e9e2]">
      
      
{ !walletConnected ? (
              <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 gap-8">
                <WalletAuthButton onSuccess={handleWalletConnected} />
              </div>
            ) : !verified ? (
              <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 gap-8">
              <VerifyButton onVerificationSuccess={handleVerificationSuccess} />
              </div>
            )  : (
              <TokenFactory handleAddToken={handleAddToken} tokens={tokens} isLoading={isLoading} />
            )}
    </main>
  );
}
