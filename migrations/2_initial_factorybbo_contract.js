var BBOFaucetContract = artifacts.require("./BBOFaucetContract.sol");

module.exports = function(deployer) {
    var instance;
    deployer.deploy(BBOFaucetContract).then(function(rs){
        instance = rs;
        console.log('setBBO at contract ', instance.address);
        return instance.setBBO('0x1d893910d30edc1281d97aecfe10aefeabe0c41b');

    });
};
