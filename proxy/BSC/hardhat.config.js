require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan"); 
require('@openzeppelin/hardhat-upgrades');

const { bsc } = require('./secrets.json');

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
    bsc: {
      url: bsc.API_URL,
      network_id : bsc.NETWORK_ID,
      accounts: [ bsc.PRIVATE_KEY ]
    },
  },
  etherscan : {
    apiKey : {
      bsc : bsc.API_KEY
    }
  }
};