var BBOHoldingContract = artifacts.require("./BBOHoldingContract.sol");
var BBOTest =  artifacts.require("./BBOTest.sol");

module.exports = function(deployer) {
    var instance;

    deployer.deploy(BBOTest).then(function(rs){
        instance = rs;
        console.log('Deployed BBO at address ', instance.address);

        return  deployer.deploy(BBOHoldingContract,instance.address, '0x83e5353fC26643c29B041A3b692c6335c97A9aed');
    });

};
