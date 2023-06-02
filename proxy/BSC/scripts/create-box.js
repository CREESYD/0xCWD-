// scripts/create-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const MyContract = await ethers.getContractFactory("MyContract");
  const box = await upgrades.deployProxy(MyContract, [42]);
  await box.deployed();
  console.log("MyContract deployed to:", box.address);
}

main();