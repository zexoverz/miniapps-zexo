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
