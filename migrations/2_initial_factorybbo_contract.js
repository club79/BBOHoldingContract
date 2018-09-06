var BBFactoryContract = artifacts.require("./BBFactoryContract.sol");

module.exports = function(deployer) {

    deployer.deploy(BBFactoryContract);
};
