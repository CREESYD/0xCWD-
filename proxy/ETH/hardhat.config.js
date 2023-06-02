require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan"); 
require('@openzeppelin/hardhat-upgrades');

const { mainnet } = require('./secrets.json');

module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    mainnet: {
      url: mainnet.API_URL,
      network_id : mainnet.NETWORK_ID,
      accounts: [ mainnet.PRIVATE_KEY ]
    }
  },
  etherscan : {
    apiKey : {
      mainnet : mainnet.API_KEY
    }
  }
};