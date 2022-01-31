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
    [750, 800, 600],
    [750, 1000, 900],
    "Colossal Titan",
    "https://www.seekpng.com/png/detail/305-3054208_attack-on-titan-colossal-titan-png.png",
    50000,
    50
  );
  await attackOnTitansContract.deployed();
  console.log(`Contract deployed to: ${attackOnTitansContract.address}`);

  let txn;
  txn = await attackOnTitansContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Minted NFT #1");

  txn = await attackOnTitansContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #2");

  txn = await attackOnTitansContract.mintCharacterNFT(2);
  await txn.wait();
  console.log("Minted NFT #3");

  txn = await attackOnTitansContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #4");

  console.log("Done deploying and minting!");
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
