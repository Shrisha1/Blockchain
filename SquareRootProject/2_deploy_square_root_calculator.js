const SquareRootCalculator = artifacts.require("SquareRootCalculator");

module.exports = async function(deployer) {
  // Deploy the contract
  await deployer.deploy(SquareRootCalculator);
  const instance = await SquareRootCalculator.deployed();

  // Example call to the squareRoot function
  try {
    const result = await instance.squareRoot(25); // Replace 25 with desired input
    console.log("Square root of 25 is:", result.toString());
  } catch (err) {
    console.error("Error while calling squareRoot:", err);
  }
};