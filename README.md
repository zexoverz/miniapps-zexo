# Building Worldcoin Mini Apps
## A Comprehensive Workshop Guide

This document provides a step-by-step guide for building mini apps on the Worldcoin platform. Mini apps are lightweight applications that leverage Worldcoin's identity verification system (World ID) while providing specific functionality within the Worldcoin ecosystem.

## Workshop Overview

This workshop is divided into multiple sessions:
1. **First Session**: Setting up your project environment and configuration
2. **Second Session**: Frontend development and integration with Worldcoin
3. **Third Session**: Adding functionality and deploying your mini app

---

# First Session: Set Up Project

## Prerequisites

Before we begin, ensure you have the following requirements installed and set up:

- **Node.js** (v16 or higher)
- **Visual Studio Code** or your preferred code editor
- **ngrok** for tunneling your localhost to the internet
- **World App** installed on your mobile device
- An account on the **Worldcoin Developer Portal**


## Important step you need install ngrok first

- this is windows guide https://dashboard.ngrok.com/get-started/setup/windows

![image](https://github.com/user-attachments/assets/5959c0aa-c98e-48c1-a3cc-baea579a640b)

- this is macos guide https://dashboard.ngrok.com/get-started/setup/macos

![image](https://github.com/user-attachments/assets/805a551e-60ea-4795-84c6-a8ae3b6d4f09)


## Step 1: Clone the Template Repository

Start by cloning the mini apps template repository which provides a foundation for our project:

```bash
git clone https://github.com/worldcoin/minikit-web3-example
cd minikit-web3-example
```

## Step 2: Set Up Smart Contract (Optional)

This step can be skipped if you don't have ETH on Worldcoin Mainnet. If you want to deploy a smart contract:

1. Delete the existing smart-contracts folder and create a new one:

```bash
rm -rf smart-contract
mkdir smart-contract
cd smart-contract
```

2. Initialize a new npm project and install Hardhat:

```bash
npm init -y
yarn add --dev hardhat
npx hardhat init
```

![image](https://github.com/user-attachments/assets/9c3610c9-9f04-416a-b319-0865214cb862)


3. Select TypeScript when prompted during the Hardhat initialization and select yes for the rest.

4. Configure Hardhat by copying this configuration to your `hardhat.config.ts`:

```typescript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { vars } from "hardhat/config";


const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
    worldchain: {
      url:
        process.env.WORLDCHAIN_RPC_URL ||
        "https://worldchain-mainnet.g.alchemy.com/public",
      accounts: vars.has("PRIVATE_KEY") ? [`0x${vars.get("PRIVATE_KEY")}`] : [],
      chainId: 480,
    },
  },
  etherscan: {
    apiKey: {
      worldchain: "2UVZHURKTJ8CXPB4NEGGG8GM3KGMF6QEEK", // Get this from the Worldchain block explorer
    },
    customChains: [
      {
        network: "worldchain",
        chainId: 480,
        urls: {
          apiURL: "https://api.worldscan.org/api",
          browserURL: "https://worldscan.org/",
        },
      },
    ],
  },
};

export default config;
```

for etherscan thats are my private key, if you want to get yoursel you can go to 

- login in to this page : https://worldscan.org/

- go to API dashboard

![image](https://github.com/user-attachments/assets/e8bd8bde-0544-480f-b356-10a2a94a3325)

- create your API Key

![image](https://github.com/user-attachments/assets/6923e492-193d-4e22-a75f-1702909d81dd)


- put that API key into etherscan object and api key props

5. Add your private key as an environment variable:

```bash
npx hardhat vars set PRIVATE_KEY
```

![image](https://github.com/user-attachments/assets/fbb57610-17a6-4e9c-b5b3-7633ecac964b)



Enter your private key when prompted (this is the key for the wallet you will use to deploy the contract).

6. Create a smart contract for token factory. Create these two files:

**Token.sol**
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC20, Ownable {
    // State variable to store the token icon ID (0-7)
    uint8 private _iconId;

    constructor(
        address initialOwner,
        uint256 initialSupply,
        string memory tokenName,
        string memory tokenSymbol,
        uint8 initialIconId
    ) 
        ERC20(tokenName, tokenSymbol)
        Ownable(initialOwner)
    {
        require(initialIconId <= 6, "Icon ID must be between 0 and 6");
        
        _transferOwnership(initialOwner);
        _mint(initialOwner, initialSupply);
        _iconId = initialIconId;
    }

    function burnToken(uint256 burnAmount) public onlyOwner {
        require(balanceOf(msg.sender) >= burnAmount, "Error : you need more amount");
        _burn(msg.sender, burnAmount);
    }

    /**
     * @dev Returns the current icon ID of the token.
     */
    function iconId() public view returns (uint8) {
        return _iconId;
    }

    /**
     * @dev Changes the icon ID of the token.
     * Can only be called by the owner.
     * @param newIconId The new icon ID (must be between 0 and 7)
     */
    function setIconId(uint8 newIconId) public onlyOwner {
        require(newIconId <= 7, "Icon ID must be between 0 and 7");
        _iconId = newIconId;
    }
}
```

**TokenFactory.sol**
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./Token.sol";

contract TokenFactory {

    address[] public createdTokens;
    event createTokenEvent(address indexed owner, address indexed tokenAddress, uint256 totalSupply, uint8 iconId);

    function createToken(
        address initialOwner, 
        uint256 initialSupply, 
        string memory tokenName, 
        string memory tokenSymbol,
        uint8 iconId
    ) public returns (address) {
        require(iconId <= 6, "Icon ID must be between 0 and 6");
        
        Token newToken = new Token(initialOwner, initialSupply, tokenName, tokenSymbol, iconId);
        createdTokens.push(address(newToken));

        emit createTokenEvent(initialOwner, address(newToken), initialSupply, iconId);
        return address(newToken);
    }

    function getAllTokens() public view returns(address[] memory) {
        return createdTokens;
    }

    function getTokensCount() public view returns(uint256) {
        return createdTokens.length;
    }
}
```

7. Install OpenZeppelin contracts:

```bash
yarn add --dev @openzeppelin/contracts
```

8. Compile the smart contracts:

```bash
npx hardhat compile
```

if everything is fine would be like this :

![image](https://github.com/user-attachments/assets/1a5af1f6-6d28-4a98-9f40-c01c18017978)


9. Create an ignition module file for deployment. First, create the directory:

NOTE: if there's already folder ignition/modules/Lock.ts , just add new file `TokenFactory.ts`

```bash
mkdir -p ignition/modules
```

Then create a file `TokenFactory.ts` in that directory:

```typescript
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TokenFactoryModule = buildModule("TokenModule", (m: any) => {
  // Deploy the TokenFactory contract
  const tokenFactory = m.contract("TokenFactory", []);

  return { tokenFactory };

  // put deployed address here

});

module.exports = TokenFactoryModule;
```

10. Deploy the contract:

```bash
npx hardhat ignition deploy ./ignition/modules/TokenFactory.ts --network worldchain --verify
```

if successful you can see like this :

![image](https://github.com/user-attachments/assets/ec32e250-abee-4441-97b0-111a7b9bff09)


you can also go to worldchain explorer to see the contracts : https://worldscan.org//address/0x4966ef314ED51dc52Ba4e210BC766D953f9cAb1F#code

11. After deploying, create a file in your frontend to store the contract ABI and address. In the `my-app/src` directory, create `token-factory-abi.ts`:

```typescript
export const TOKEN_FACTORY_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

export const TOKEN_ABI = [
// Copy the ABI from artifacts/contracts/Token.sol/Token.json
  // Or from the output of the deployment
]

export const TOKEN_FACTORY_ABI = [
  // Copy the ABI from artifacts/contracts/TokenFactory.sol/TokenFactory.json
  // Or from the output of the deployment
];
```


For people that doesnt have wallet with eth in worldchain mainnet , you can use my address smartcontract in here :

```typescript
export const TOKEN_FACTORY_ADDRESS = "0x4966ef314ED51dc52Ba4e210BC766D953f9cAb1F";

export const TOKEN_ABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "initialOwner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "initialSupply",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "tokenName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "tokenSymbol",
          "type": "string"
        },
        {
          "internalType": "uint8",
          "name": "initialIconId",
          "type": "uint8"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "allowance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientAllowance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidApprover",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSpender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "burnAmount",
          "type": "uint256"
        }
      ],
      "name": "burnToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "iconId",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "newIconId",
          "type": "uint8"
        }
      ],
      "name": "setIconId",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

export const TOKEN_FACTORY_ABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "totalSupply",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "iconId",
          "type": "uint8"
        }
      ],
      "name": "createTokenEvent",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "initialOwner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "initialSupply",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "tokenName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "tokenSymbol",
          "type": "string"
        },
        {
          "internalType": "uint8",
          "name": "iconId",
          "type": "uint8"
        }
      ],
      "name": "createToken",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "createdTokens",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllTokens",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTokensCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
```

## Step 3: Clean Up Frontend Project

1. Navigate to the frontend directory:

```bash
cd ../my-app
```

install frontend dependencise

```bash
yarn install
```

install react hot toast (for toaster)

```bash
yarn add react-hot-toast
```

NOTE: package manager are freedom, you use npm, yarn, pnpm or any

2. Keep only the essential components , Remove the rest:
   - `VerifyButton.tsx`
   - `WalletAuthButton.tsx`

update `verifyButton.tsx` to device level validation :

```tsx
"use client";

import { useState } from "react";
import { Shield } from "lucide-react";
import {
  MiniKit,
  VerifyCommandInput,
  VerificationLevel,
  ISuccessResult,
} from "@worldcoin/minikit-js";

interface VerifyButtonProps {
  onVerificationSuccess: () => void;
}

export function VerifyButton({ onVerificationSuccess }: VerifyButtonProps) {
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationError, setVerificationError] = useState<string | null>(
    null
  );

  const handleVerify = async () => {
    // Don't start verification if it's already in progress
    if (isVerifying) {
      console.log("Verification already in progress");
      return;
    }

    if (!MiniKit.isInstalled()) {
      setVerificationError("World App is not installed");
      return;
    }

    try {
      console.log("Starting verification process");
      setIsVerifying(true);
      setVerificationError(null);

      const verifyPayload: VerifyCommandInput = {
        action: process.env.NEXT_PUBLIC_WLD_ACTION_ID || "web3-template",
        signal: "",
        verification_level: VerificationLevel.Device,
      };

      // Use async approach with commandsAsync
      console.log("Using async verification approach");

      // Ensure the MiniKit is correctly initialized before using it
      if (
        !MiniKit.commandsAsync ||
        typeof MiniKit.commandsAsync.verify !== "function"
      ) {
        throw new Error(
          "MiniKit.commandsAsync.verify is not available. Make sure you're using the latest version of the MiniKit library."
        );
      }

      // Execute the verify command and wait for the result
      const { finalPayload } = await MiniKit.commandsAsync.verify(
        verifyPayload
      );

      if (finalPayload.status === "error") {
        console.log("Error payload", finalPayload);
        setVerificationError(`Verification failed: Please try again`);
        setIsVerifying(false);
        return;
      }

      try {
        const verifyResponse = await fetch("/api/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            payload: finalPayload as ISuccessResult,
            action: process.env.NEXT_PUBLIC_WLD_ACTION_ID || "web3-template",
            signal: "",
          }),
        });

        setIsVerifying(false);
        setVerificationError(null);
        onVerificationSuccess();
      } catch (error) {
        console.error("Server verification error:", error);
        setVerificationError(
          error instanceof Error
            ? `Verification error: ${error.message}`
            : "Unknown verification error occurred"
        );
      }

      // Process successful verification
      //   await verifyOnServer(finalPayload as ISuccessResult);
    } catch (error) {
      console.error("Verification error:", error);
      setVerificationError(
        error instanceof Error
          ? `Verification error: ${error.message}`
          : "Unknown verification error occurred"
      );
      setIsVerifying(false);
    }
  };

  return (
    <>
      {verificationError && (
        <div className="text-red-500 text-sm mb-2">{verificationError}</div>
      )}

      <button
        onClick={handleVerify}
        disabled={isVerifying}
        className="w-full max-w-xs px-8 py-4 bg-blue-500 text-white font-medium text-lg rounded-xl shadow-sm hover:bg-blue-600 active:bg-blue-700 transition-colors touch-manipulation flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <Shield className="w-5 h-5" />
        {isVerifying ? "Verifying..." : "Verify to Claim"}
      </button>
    </>
  );
}
```

3. Clean up the `page.tsx` file and set it up like this:

```tsx
import { useState } from 'react';
import VerifyButton from '../components/VerifyButton';
import WalletAuthButton from '../components/WalletAuthButton';
import TokenFactory from '../components/TokenFactory';

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleWalletConnected = () => {
    setWalletConnected(true);
  };

  const handleVerificationSuccess = () => {
    setVerified(true);
  };

  return (
    <main className="flex min-h-screen min-w-screen flex-col pb-16 bg-[#f5e9e2]">
      {!session?.user.address ? (
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 gap-8">
          <WalletAuthButton onSuccess={handleWalletConnected} />
        </div>
      ) : !verified ? (
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 gap-8">
          <VerifyButton onVerificationSuccess={handleVerificationSuccess} />
        </div>
      ) : (
        <TokenFactory />
      )}
    </main>
  );
}
```

4. Create a simple TokenFactory component for now:

```tsx
// components/TokenFactory.tsx
export default function TokenFactory() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 gap-8">
      <h1 className="text-3xl font-bold">Factory</h1>
    </div>
  );
}
```

and import TokenFactory into our page.tsx

```
import TokenFactory from "@/components/TokenFactory";
....
```

## Step 4: Run Local Development Environment

1. Start your frontend application:

```bash
yarn dev
```

2. Open a new terminal and start ngrok for tunneling:

```bash
ngrok http http://localhost:3000
```

![image](https://github.com/user-attachments/assets/30b91fe5-9aad-457b-9888-1946a18fda49)

get fowarding URL

Note the HTTPS URL provided by ngrok (e.g., `https://a1b2c3d4.ngrok.io`). You'll need this URL in the next step.

## Step 5: Set Up Developer Portal

1. Go to the Worldcoin Developer Portal: https://developer.worldcoin.org/

2. Log in to the dashboard and create a new project.

![image](https://github.com/user-attachments/assets/b645259d-6108-4f82-b9f0-eff46a22707a)


3. Fill in the project details:
   - **Name**: Your mini app name
   - **Description**: Brief description of your mini app
   - **URL**: The ngrok URL from Step 4
   - **Action Name**: A unique identifier for your project

4. After creating the project, you'll receive an `APP_ID` and a QR code. Save the APP_ID.

## Step 6: Configure Actions

1. In the Developer Portal, go to "Actions" tab.

2. Create a new action with the identifier `web3-template` (to match the template project).

![image](https://github.com/user-attachments/assets/4f1c596a-c2bb-45e3-968a-ec7435a6c942)


## Step 7: Whitelist Addresses

1. In the Developer Portal, go to the "Configuration" tab.

2. Under "Whitelisted Payment Addresses", uncheck disable whitelist,  add your World App wallet address (you can copy this from the UNO mini app in your World App).

![IMG_2470](https://github.com/user-attachments/assets/bdfeccd2-8a6a-4c28-a7d3-fa94336be18a)


3. Under "Permit2 Tokens", add your TokenFactory Contract Address that you deployed.

4. Under "Contracts Endpoint", add your TokenFactory Contract Address.

![image](https://github.com/user-attachments/assets/ccf4ad65-425f-4c77-a350-028668c33d55)


## Step 8: Update Environment Variables

1. Add your APP_ID to your frontend environment by creating a `.env.local` file in the `my-app` folder:

```
NEXT_PUBLIC_WLD_APP_ID=your_app_id_here
```

2. Alternatively, you can hardcode it in your code (not recommended for production):

```javascript
useWaitForTransactionReceipt({
  client,
  appConfig: {
    app_id: process.env.NEXT_PUBLIC_WLD_APP_ID || "app_db9697e5c674170c43cfd9fe68a0ce37",
  },
  transactionId,
});
```

## Step 9: Test Your Mini App

1. Open your World App on your mobile device.

2. Scan the QR code provided in the Developer Portal.

3. You should be able to:
   - Connect your wallet
   - Verify that you're human using World ID
   - Access the Factory page

This completes the first session. Take a break and prepare for the Frontend Development session.

![IMG_2471](https://github.com/user-attachments/assets/329eeb96-2c77-4917-801f-0ca73ff73faf)

![IMG_2472](https://github.com/user-attachments/assets/39113616-7e84-4421-9137-57508cdbb928)

![IMG_2473](https://github.com/user-attachments/assets/02f40d99-a307-40d4-b6c1-4f4346026ddd)


First session done, we are going to break. and will continue to second session.

