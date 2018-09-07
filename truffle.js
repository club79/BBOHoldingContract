var HDWalletProvider = require("truffle-hdwallet-provider");
var infura_apikey = "e7cf61fe75a64b2f91459362e0e5beb8"; // Either use this key or get yours at https://infura.io/signup. It's free.
var mnemonic = "stick vivid chalk unique size vacant insect slim snack journey weasel believe";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      gas: 6500000,
      network_id: "5777"
    },
    ropsten:  {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + infura_apikey),
      network_id: 3,
      gas: 4500000
    },
    kovan:  {
      provider: new HDWalletProvider(mnemonic, "https://kovan.infura.io/" + infura_apikey),
      network_id: 42,
      gas: 4500000
    },
    rinkeby:  {
      provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/" + infura_apikey),
      network_id: 4,
      gas: 4500000
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};