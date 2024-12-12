const AddNumbers = artifacts.require("AddNumbers");

module.exports = async function (deployer, network, accounts) {
    // Deploy the AddNumbers contract
    await deployer.deploy(AddNumbers);
    const addNumbersInstance = await AddNumbers.deployed();

    // Call the 'add' function with two numbers (e.g., 5 and 7)
    const sum = await addNumbersInstance.add(5, 7);
    console.log('The sum of 5 and 7 is:', sum.toString()); // Should print: 12
};