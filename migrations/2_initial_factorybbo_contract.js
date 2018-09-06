var BBFactoryContract = artifacts.require("./BBFactoryContract.sol");

module.exports = function(deployer) {
    var instance;
    deployer.deploy(BBFactoryContract).then(function(rs){
        instance = rs;
        console.log('setBBO at contract ', instance.address);
        return instance.setBBO('0x1d893910d30edc1281d97aecfe10aefeabe0c41b');

    });
};
