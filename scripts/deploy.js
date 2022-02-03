const main = async () => {
  const ethers = hre.ethers;
  const AttackOnTitansContractFactory = await ethers.getContractFactory(
    "AttackOnTitans"
  );
  const attackOnTitansContract = await AttackOnTitansContractFactory.deploy(
    ["Eren", "Mikasa", "Levi"],
    [
      "QmX5xNXMFuVTciGtg8zTD7NfyuQsTYc45N7x3vhrahLhp7",
      "QmSsHYiJYHELrn5rwU223k3NtsV7P9ZNFME1BF8ZgXmGQr",
      "QmNgobCqqxYRjvCnmciTAbKZPFcHXnY9xiAG5YK6ajXBxR",
    ],
    [300, 300, 300],
    [200, 180, 250],
    "Colossal Titan",
    "QmbbUfQ9aoKQVx5wXRrLPBXuG8fYhXCMxbT2wCYjqSohmU",
    40000,
    50
  );
  await attackOnTitansContract.deployed();
  console.log(`Contract deployed to: ${attackOnTitansContract.address}`);
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
