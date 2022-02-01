const main = async () => {
  const ethers = hre.ethers;
  const AttackOnTitansContractFactory = await ethers.getContractFactory(
    "AttackOnTitans"
  );
  const attackOnTitansContract = await AttackOnTitansContractFactory.deploy(
    ["Eren", "Mikasa", "Levi"],
    [
      "https://www.pngmart.com/files/13/Eren-Jaeger-PNG-Image.png",
      "https://www.pngmart.com/files/19/Anime-Mikasa-PNG-Transparent-Image.png",
      "https://www.pngmart.com/files/19/Captain-Levi-Ackerman-PNG-Transparent-Image.png",
    ],
    [300, 300, 300],
    [200, 180, 250],
    "Colossal Titan",
    "https://www.seekpng.com/png/detail/305-3054208_attack-on-titan-colossal-titan-png.png",
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
