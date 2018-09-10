const BBOFaucetContract = artifacts.require("BBOFaucetContract");
const BBOTest = artifacts.require("BBOTest");
var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));


contract('BBOFaucetContract Test', async (accounts) => {
    console.log(accounts);


    it("initialize BBOFaucetContract contract", async () => {
        erc20 = await BBOTest.new({
            from: accounts[0]
        });

        let contract = await BBOFaucetContract.new({
            from: accounts[0]
        });

        console.log('contract address : ', contract.address);
        console.log('token address : ', erc20.address);


        let xxx = await erc20.balanceOf(contract.address, {
            from: accounts[0]
        });
        console.log('Balance before : ', xxx);

        await contract.setBBO(erc20.address, {
            from: accounts[0]
        });

        try {
            await contract.setBBO(erc20.address, {
                from: accounts[1]
            });
            console.log("Test function setBBO only owner FALSE");

        } catch(e) {
            console.log(" ✓  Test function setBBO only owner OK");
        }


        await contract.setMaxFaucet(2000000e18, {
            from: accounts[0]
        });

        await contract.setMaxFaucet(300e18, {
            from: accounts[0]
        });

        try {
            await contract.setMaxFaucet(300e18, {
                from: accounts[1]
            });
            console.log("Test function setMaxFaucet only owner FALSE");

        } catch(e) {
            console.log(" ✓  Test function setMaxFaucet only owner OK");
        }

        await contract.setTransferToken(100e18, {
            from: accounts[0]
        });

        try {
            await contract.setTransferToken(300e18, {
                from: accounts[1]
            });
            console.log("Test function setTransferToken only owner FALSE");

        } catch(e) {
            console.log(" ✓  Test function setTransferToken only owner OK");
        }


        await erc20.transfer(contract.address, 9000000e18, {
            from: accounts[0]
        });

        let yyy = await erc20.balanceOf(contract.address, {
            from: accounts[0]
        });
        console.log('Balance after : ', yyy);


        //User request BB0
        await contract.faucetBB0({
            from: accounts[1]
        });

        await contract.faucetBB0({
            from: accounts[1]
        });

        await contract.faucetBB0({
            from: accounts[1]
        });

        await contract.faucetBB0({
            from: accounts[2]
        });


       
        try {
            await contract.faucetBB0({
                from: accounts[1]
            });

            console.log('Can get more token');
        } catch (e) {

            console.log('Can not get more token');


        }

        let yyyk = await erc20.balanceOf(contract.address, {
            from: accounts[0]
        });
        console.log('Balance after request : ', yyyk);

        let zzzm = await erc20.balanceOf(accounts[1], {
            from: accounts[1]
        });
        console.log('Balance user affer request : ', zzzm);

        let zzzmm = await erc20.balanceOf(accounts[3], {
            from: accounts[3]
        });
        console.log('Balance user before pay : ', zzzmm);

        await web3.eth.sendTransaction({from:accounts[3],to:contract.address, value:web3.utils.toWei('0', "ether")});
        await web3.eth.sendTransaction({from:accounts[3],to:contract.address, value:web3.utils.toWei('0', "ether")});

        let zzzmmk = await erc20.balanceOf(accounts[3], {
            from: accounts[3]
        });
        console.log('Balance user after pay : ', zzzmmk);

    });


});