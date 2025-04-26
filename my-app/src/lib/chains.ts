// Worldchain details as a fallback in case viem/chains doesn't have it
export const worldchain = {
  id: 59144,
  name: "Worldchain",
  network: "worldchain",
  nativeCurrency: {
    decimals: 18,
    name: "Worldchain Ether",
    symbol: "WLD",
  },
  rpcUrls: {
    default: {
      http: ["https://worldchain-mainnet.g.alchemy.com/public"],
    },
    public: {
      http: ["https://worldchain-mainnet.g.alchemy.com/public"],
    },
  },
  blockExplorers: {
    default: {
      name: "WorldcoinExplorer",
      url: "https://explorer.worldcoin.org",
    },
  },
};
