import { ethers } from "hardhat";

async function main() {

    const Staker = await ethers.getContractFactory("UniswapV3Staker");
    const staker = await Staker.deploy("0x1F98431c8aD98523631AE4a59f267346ea31F984", "0xC36442b4a4522E871399CD717aBDD847Ab11FE88", 63072000, 2592000);

    await staker.deployed();

    console.log("Deployed at", staker.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
