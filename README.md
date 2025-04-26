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

3. Select TypeScript when prompted during the Hardhat initialization.

4. Configure Hardhat by copying this configuration to your `hardhat.config.ts`:

```typescript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import "@nomicfoundation/hardhat-ignition-ethers";
import "hardhat-vars";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    worldchain: {
      url: "https://rpc.worldcoin.org",
      chainId: 174842,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      worldchain: "worldcoin", // No API key needed for Worldcoin
    },
    customChains: [
      {
        network: "worldchain",
        chainId: 174842,
        urls: {
          apiURL: "https://explorer.worldcoin.org/api",
          browserURL: "https://explorer.worldcoin.org/",
        },
      },
    ],
  },
};

export default config;
```

5. Add your private key as an environment variable:

```bash
npx hardhat vars set PRIVATE_KEY
```

Enter your private key when prompted (this is the key for the wallet you will use to deploy the contract).

6. Create a smart contract for token factory. Create these two files:

**Token.sol**
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC20, ERC20Burnable, Ownable {
    constructor(string memory name, string memory symbol, address initialOwner)
        ERC20(name, symbol)
        Ownable(initialOwner)
    {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
```

**TokenFactory.sol**
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./Token.sol";

contract TokenFactory {
    event TokenCreated(address tokenAddress, string name, string symbol);

    function createToken(string memory name, string memory symbol) public returns (address) {
        Token token = new Token(name, symbol, msg.sender);
        emit TokenCreated(address(token), name, symbol);
        return address(token);
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

9. Create an ignition module file for deployment. First, create the directory:

```bash
mkdir -p ignition/modules
```

Then create a file `TokenFactory.ts` in that directory:

```typescript
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("TokenFactory", (m) => {
  const tokenFactory = m.contract("TokenFactory");
  return { tokenFactory };
});
```

10. Deploy the contract:

```bash
npx hardhat ignition deploy ./ignition/modules/TokenFactory.ts --network worldchain --verify
```

11. After deploying, create a file in your frontend to store the contract ABI and address. In the `my-app/src` directory, create `token-factory-abi.ts`:

```typescript
export const TOKEN_FACTORY_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
export const TOKEN_FACTORY_ABI = [
  // Copy the ABI from artifacts/contracts/TokenFactory.sol/TokenFactory.json
  // Or from the output of the deployment
];
```

## Step 3: Clean Up Frontend Project

1. Navigate to the frontend directory:

```bash
cd ../my-app
```

2. Keep only the essential components:
   - `VerifyButton.tsx`
   - `WalletAuthButton.tsx`

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
      {!walletConnected ? (
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

## Step 4: Run Local Development Environment

1. Start your frontend application:

```bash
cd my-app
npm install
npm run dev
```

2. Open a new terminal and start ngrok for tunneling:

```bash
ngrok http 3000
```

Note the HTTPS URL provided by ngrok (e.g., `https://a1b2c3d4.ngrok.io`). You'll need this URL in the next step.

## Step 5: Set Up Developer Portal

1. Go to the Worldcoin Developer Portal: https://developer.worldcoin.org/

2. Log in to the dashboard and create a new project.

3. Fill in the project details:
   - **Name**: Your mini app name
   - **Description**: Brief description of your mini app
   - **URL**: The ngrok URL from Step 4
   - **Action Name**: A unique identifier for your project

4. After creating the project, you'll receive an `APP_ID` and a QR code. Save the APP_ID.

## Step 6: Configure Actions

1. In the Developer Portal, go to "Actions" tab.

2. Create a new action with the identifier `web3-template` (to match the template project).

## Step 7: Whitelist Addresses

1. In the Developer Portal, go to the "Configuration" tab.

2. Under "Whitelisted Payment Addresses", add your World App wallet address (you can copy this from the UNO mini app in your World App).

3. Under "Permit2 Tokens", add your TokenFactory Contract Address that you deployed.

4. Under "Contracts Endpoint", add your TokenFactory Contract Address.

## Step 8: Update Environment Variables

1. Add your APP_ID to your frontend environment by creating a `.env.local` file in the `my-app` folder:

```
NEXT_PUBLIC_APP_ID=your_app_id_here
```

2. Alternatively, you can hardcode it in your code (not recommended for production):

```javascript
useWaitForTransactionReceipt({
  client,
  appConfig: {
    app_id: process.env.NEXT_PUBLIC_APP_ID || "app_db9697e5c674170c43cfd9fe68a0ce37",
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

---

# Second Session: Frontend Development

In this session, we'll build the user interface for our mini app and integrate it with the Worldcoin ecosystem. We'll focus on creating a user-friendly experience while leveraging World ID for identity verification.

*Content for the second session will be provided separately.*
