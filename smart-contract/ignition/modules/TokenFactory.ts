const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TokenFactoryModule = buildModule("TokenModule", (m: any) => {
  // Deploy the TokenFactory contract
  const tokenFactory = m.contract("TokenFactory", []);

  return { tokenFactory };

  //0xF5361Ff6f59103db06BA5758DFE105a70da253b3
});

module.exports = TokenFactoryModule;