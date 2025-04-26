# Second Session: Frontend Development

In this session, we'll build the user interface for our mini app and integrate it with the Worldcoin ecosystem. We'll focus on creating a user-friendly experience while leveraging World ID for identity verification.

## Step 1: Update Tailwind Configuration

First, let's update our Tailwind configuration to enhance our styling capabilities:

1. Open `tailwind.config.js` in your project root and replace its contents with:

```javascript
import type { Config } from "tailwindcss"

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
```

## Step 2: Update Global CSS

Update the `global.css` file in your app directory to include better mobile support:

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

input, 
textarea, 
select, 
button {
  font-size: 16px; /* Minimum font size to prevent zoom on iOS */
}

/* Ensure consistent text size */
@media screen and (max-width: 768px) {
  input, textarea, select, button {
    font-size: 16px;
    max-height: 100%;
  }
  
  .form-container {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
  }
}
```

## Step 3: Update Root Layout

Enhance your `src/app/layout.tsx` file to include toast notifications and proper mobile viewport settings:

```tsx
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "@/providers/session-provider";
import MiniKitProvider from "@/providers/minikit-provider";
import { ErudaProvider } from "@/providers/eruda-provider";
import "./globals.css";

import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Token Factory App",
  description: "Create your erc20 tokens",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#f5e9e2" />
      <body className={inter.className}>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: "12px",
            background: "#fff",
            color: "#333",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            padding: "16px",
          },
          success: {
            iconTheme: {
              primary: "#000",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
            style: {
              border: "1px solid #fecaca",
              background: "#fef2f2",
            },
          },
        }}
      />
        <ErudaProvider>
          <SessionProvider>
            <MiniKitProvider>{children}</MiniKitProvider>
          </SessionProvider>
        </ErudaProvider>
        
      </body>
    </html>
  );
}
```

## Step 4: Create the TokenCard Component

Create a `TokenCard.tsx` file in your components directory to display individual tokens:

```tsx
"use client"

import type React from "react"
import { Send } from "lucide-react"
import { useRouter } from "next/navigation"
import { Token, tokenOptions } from "./TokenFactory"

interface TokenCardProps {
  token: Token
}

export default function TokenCard({ token }: TokenCardProps) {
  const router = useRouter()

  const handleSend = (e: React.MouseEvent) => {
    e.stopPropagation()
    router.push(`/transfer/${token.address}`)
  }

  // Format as currency
  const formatCurrency = (num: string) => {
    const value = Number.parseInt(num)
    
    if (value >= 1000000000000) {
      return `${(value / 1000000000000).toFixed(2)}T` // Trillion
    } else if (value >= 1000000000) {
      return `${(value / 1000000000).toFixed(2)}B` // Billion
    } else if (value >= 1000000) {
      return `${(value / 1000000).toFixed(2)}M` // Million
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(2)}K` // Thousand
    } else {
      return `${value.toFixed(2)}`
    }
  }

  return (
    <div className="overflow-hidden border-none rounded-3xl shadow-sm bg-white">
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-gray-800">{token.name}</h3>
          <div className="flex gap-2">
            <button onClick={handleSend} className="text-gray-400 hover:text-gray-600">
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center py-4">
          <div className={`w-20 h-20 ${tokenOptions[token.iconId].bgColor} rounded-full flex items-center justify-center`}>
            <div className="w-12 h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
              {tokenOptions[token.iconId].icon}
            </div>
          </div>
        </div>

        <div className="mt-2">
            <p className="text-sm text-gray-500">
              {token.address.slice(0, 6)}...{token.address.slice(-4)}
            </p>
          <p className="text-2xl font-bold text-gray-800">{formatCurrency(token.balance.toString())}</p>
        </div>
      </div>
    </div>
  )
}
```

## Step 5: Create the TokenFactory Component

Now, let's implement the main `TokenFactory.tsx` component that will allow users to create new tokens and view their existing ones:

```tsx
"use client"

import { useState } from "react"
import { Leaf, Sparkles, Zap, Gem, Diamond, Rocket, Star, Search, ArrowLeft, Home, Grid3X3, RefreshCcwIcon, SearchIcon } from "lucide-react"
import toast from "react-hot-toast"
import TokenCard from "./TokenCard"
import { useSession } from "next-auth/react"

export type Token = {
    name: string;
    symbol: string;
    balance: number;
    address: `0x${string}`
    iconId: number
}

// Combined token options - icon and color in one array
export const tokenOptions = [
  { 
    icon: <Leaf className="h-6 w-6" />, 
    name: "Leaf", 
    textColor: "text-[#5eb394]",
    bgColor: "bg-[#d8f3e6]" 
  },
  { 
    icon: <Sparkles className="h-6 w-6" />, 
    name: "Sparkles", 
    textColor: "text-[#5b7db1]",
    bgColor: "bg-[#c4ddff]" 
  },
  { 
    icon: <Zap className="h-6 w-6" />, 
    name: "Zap", 
    textColor: "text-[#d4a746]",
    bgColor: "bg-[#ffe8b3]" 
  },
  { 
    icon: <Gem className="h-6 w-6" />, 
    name: "Gem", 
    textColor: "text-[#c97878]",
    bgColor: "bg-[#ffd6d6]" 
  },
  { 
    icon: <Diamond className="h-6 w-6" />, 
    name: "Diamond", 
    textColor: "text-[#6a9bc2]",
    bgColor: "bg-[#d7e9f6]" 
  },
  { 
    icon: <Rocket className="h-6 w-6" />, 
    name: "Rocket", 
    textColor: "text-[#8a70c9]",
    bgColor: "bg-[#e0d7f6]" 
  },
  { 
    icon: <Star className="h-6 w-6" />, 
    name: "Star", 
    textColor: "text-[#e67e22]",
    bgColor: "bg-[#fde3cd]" 
  }
]

interface TokenFactoryrops {
    handleAddToken: (tokenName: string, tokenSymbol: string, tokenSupply:string, iconIndex: number) => void,
    isLoading: boolean
    tokens: Token[] | []
}

export default function TokenFactory({handleAddToken, isLoading, tokens}: TokenFactoryrops ) {
  const [tokenName, setTokenName] = useState("")
  const [tokenSymbol, setTokenSymbol] = useState("")
  const [initialSupply, setInitialSupply] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0) // Single index for both icon and color
  const [activeTab, setActiveTab] = useState("create")
  const { data: session, status } = useSession();
  
  const handleCreateToken = () => {
    if (!tokenName || !tokenSymbol || !initialSupply) {
      toast.error("Please fill in all fields")
      return
    }

    handleAddToken(tokenName, tokenSymbol, initialSupply, selectedIndex)

    // Reset form
    setTokenName("")
    setTokenSymbol("")
    setInitialSupply("")
  }

  return (
    <div className="container max-w-md mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
            <Diamond className="h-5 w-5 text-black" />
          </div>
          <h1 className="text-xl font-bold text-gray-800">Token Factory</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
            <SearchIcon className="h-5 w-5 text-gray-600" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="grid grid-cols-2 bg-white rounded-full p-1 shadow-sm">
          <button
            onClick={() => setActiveTab("create")}
            className={`py-2 px-4 rounded-full ${
              activeTab === "create" ? "bg-black text-white" : "text-gray-600"
            } transition-colors`}
          >
            Create
          </button>
          <button
            onClick={() => setActiveTab("tokens")}
            className={`py-2 px-4 rounded-full ${
              activeTab === "tokens" ? "bg-black text-white" : "text-gray-600"
            } transition-colors`}
          >
            My Tokens
          </button>
        </div>
      </div>

      {/* Create Tab Content */}
      {activeTab === "create" && (
        <div className="bg-white border-none rounded-3xl shadow-sm">
          <div className="p-6 space-y-5">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-1">Create New Token</h2>
              <p className="text-gray-500 text-sm">Deploy your own ERC20 token</p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Token Name</label>
                <input
                  type="text"
                  placeholder="e.g. My Awesome Token"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm"
                  value={tokenName}
                  onChange={(e) => setTokenName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Token Symbol</label>
                <input
                  type="text"
                  placeholder="e.g. MAT"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm"
                  value={tokenSymbol}
                  onChange={(e) => setTokenSymbol(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Initial Supply</label>
                <input
                  type="number"
                  placeholder="e.g. 1000000"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm"
                  value={initialSupply}
                  onChange={(e) => setInitialSupply(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Token Icon & Color</label>
                <div className="grid grid-cols-7 gap-2">
                  {tokenOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedIndex(index)}
                      className={`p-2 rounded-xl flex items-center justify-center ${
                        selectedIndex === index
                          ? `${option.textColor} ${option.bgColor} ring-2 ring-gray-200`
                          : "bg-gray-50 text-gray-400"
                      }`}
                    >
                      {option.icon}
                    </button>
                  ))}
                </div>
              </div>

              <button
                disabled={isLoading}
                className="w-full mt-4 rounded-xl bg-black hover:bg-gray-800 text-white h-12 transition-colors"
                onClick={handleCreateToken}
              >
                Create Token
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tokens Tab Content */}
      {activeTab === "tokens" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">Your Tokens</h2>
            <p className="text-sm text-gray-500">{tokens.length} tokens</p>
          </div>

          {tokens.length === 0 ? (
            <div className="bg-white border-none rounded-3xl p-6 text-center text-gray-500 shadow-sm">
              <p>You haven't created any tokens yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {tokens.map((token) => (
                <TokenCard key={token.address} token={token} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
```

## Understanding TokenFactory and TokenCard Integration

The TokenFactory component and TokenCard component work together to create a complete token creation and management system for our mini app. Here's how they integrate:

### TokenFactory Component Functionality

The TokenFactory component serves as the main interface for users to:

1. **Create new tokens**: Through a user-friendly form, users can:
   - Enter a token name
   - Enter a token symbol (ticker)
   - Specify an initial supply amount
   - Select an icon and color theme for their token
   
2. **View their tokens**: Through a tab-based interface, users can switch between:
   - The "Create" tab for making new tokens
   - The "My Tokens" tab for viewing their existing tokens

3. **State Management**:
   - Tracks form input values
   - Manages the active tab state
   - Handles form validation and submission

4. **Integration with Smart Contract**:
   - The `handleAddToken` function is passed in as a prop and connects the UI to the blockchain operations
   - The component receives token data from the parent component

### TokenCard Component Functionality

The TokenCard component displays individual tokens in an aesthetically pleasing card format:

1. **Visual Representation**:
   - Shows the token name and symbol
   - Displays a custom icon based on the user's selection during creation
   - Uses color themes that match the selected icon

2. **Token Information**:
   - Shows the token's contract address (abbreviated for readability)
   - Displays the token balance with appropriate formatting for large numbers

3. **Token Actions**:
   - Includes a send button that navigates to a transfer page
   - Could be extended with additional functionality like viewing transaction history

4. **Smart Formatting**:
   - Includes logic to display large numbers in a readable format (K, M, B, T suffixes)

### How They Work Together

1. The parent page component (typically `page.tsx`) fetches token data from the blockchain and passes it to TokenFactory
2. TokenFactory maintains the overall UI structure and manages tab switching
3. When in the "My Tokens" tab, TokenFactory maps through the tokens array and renders a TokenCard for each one
4. Each TokenCard gets its specific token data as a prop
5. When a user creates a new token via TokenFactory, the parent component handles the blockchain interaction
6. After successful token creation, the updated tokens array is passed back to TokenFactory, which will show the new token in the "My Tokens" tab

This modular approach separates concerns effectively:
- TokenFactory handles the overall UI layout and token creation
- TokenCard focuses solely on displaying individual token data
- The parent component manages blockchain interactions

The result is a clean, user-friendly interface that makes token creation and management simple, even for users who aren't blockchain experts.

## Step 6: Update the Main Page Component

Now let's update our main `page.tsx` file to integrate the TokenFactory component with our World ID verification:

```tsx
"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { WalletAuthButton } from "@/components/wallet-auth-button";
import { useWaitForTransactionReceipt } from "@worldcoin/minikit-react";
import { Address, createPublicClient, formatUnits, http, parseUnits } from "viem";
import { worldchain } from "@/lib/chains";
import TokenFactory from "@/components/TokenFactory";
import toast from "react-hot-toast";
import { TOKEN_ABI, TOKEN_FACTORY_ABI, TOKEN_FACTORY_ADDRESS } from "@/token-factory-abi";
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
          address: TOKEN_FACTORY_ADDRESS as Address,
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
                  address: TOKEN_FACTORY_ADDRESS,
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
        { !session?.user.address? (
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
```

Before Testing UI, make sure u update this using your app id :

```
useWaitForTransactionReceipt({
      client,
      appConfig: {
        app_id: process.env.NEXT_PUBLIC_APP_ID || "app_8880be8110d2d3e185b24b84c993e38c",
      },
      transactionId,
    });
```

## Step 7: Testing the UI

At this point, you should have a functional UI for your mini app. Let's test it:

1. Start your development server:

```bash
yarn dev
```

2. Start ngrok for tunneling

3. Open your World App and scan the QR code from the Developer Portal.

4. You should now be able to:
   - Connect your wallet
   - Verify your identity
   - Create new tokens
   - View your tokens

In the next session, we'll implement the full blockchain integration and add transfer functionality.

## Key Learnings from This Session

- Setting up a proper mobile-friendly UI using Tailwind CSS
- Creating modular components for better code organization
- Implementing a tab-based UI for token creation and viewing
- Integrating World ID verification with a token creation interface
- Handling form validation and user feedback with toast notifications

