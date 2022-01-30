const main = async () => {
  const ethers = hre.ethers;
  const dangerousGameContractFactory = await ethers.getContractFactory(
    "DangerousGame"
  );
  const dangerousGameContract = await dangerousGameContractFactory.deploy();
  await dangerousGameContract.deployed();
  console.log(`Contract deployed to: ${dangerousGameContract.address}`);
};

const run = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

run();
