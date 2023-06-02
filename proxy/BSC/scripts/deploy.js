const { ethers, upgrades } = require("hardhat"); 

async function main() { 
  const MyToken = await ethers.getContractFactory("CreativeWorldDesignsToken");
  const myToken = await upgrades.deployProxy(MyToken, [], { initializer: "initialize" });
  await myToken.deployed();
  console.log("MyToken deployed to:", myToken.address);
} 

main().then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});
