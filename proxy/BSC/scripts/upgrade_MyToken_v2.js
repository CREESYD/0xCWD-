const { ethers, upgrades } = require("hardhat");

const PROXY = "0xaE72F7edF15A11b252FE316e44E9dfc579Daf77e";

async function main() {
 const MyTokenV2 = await ethers.getContractFactory("CreativeWorldDesignsToken");
 console.log("Upgrading CarWashDetailingToken...");
 await upgrades.upgradeProxy(PROXY, MyTokenV2);
 console.log("CarWashDetailingToken upgraded successfully");
}

main();
