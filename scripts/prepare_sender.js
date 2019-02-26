var SyscoinToken = artifacts.require("./token/SyscoinToken.sol");

// Prepares an eth account that holds syscoin tokens to send or unlock tokens:
// - It makes sure the address has some eth balance to send txs from it
// - It makes sure the private key for the account is loaded an the account unlocked.
module.exports = async function(callback) {
  // Token holder 1
  // Private key in syscoin format: co6nPnPXdJQRxAQbeeUo3SQn5PkGGrEqP6a4K1QCmAkXNsBWFZEk
  var senderAddress = "0xd2394f3fad76167e7583a876c292c86ed10305da";      
  var senderPrivateKey = "0xf968fec769bdd389e33755d6b8a704c04e3ab958f99cc6a8b2bcf467807f9634";

  var dt = await SyscoinToken.deployed();
  // Make sure senderAddress has some eth to pay for txs
  var senderAddressEthBalance = await web3.eth.getBalance(senderAddress);     
  console.log("sender eth balance : " + senderAddressEthBalance.toNumber());
  if (senderAddressEthBalance.toNumber() == 0) {
    console.log("no eth balance, sending some eth...")
    var fromAddress = web3.eth.accounts[0];  
    await web3.eth.sendTransaction({from: fromAddress, to: senderAddress, value: 1000000000000000000});
    senderAddressEthBalance = await web3.eth.getBalance(senderAddress);     
    console.log("sender eth balance : " + senderAddressEthBalance.toNumber());  
  }

  // Add senderPrivateKey to eth node (if already added, this makes no harm)
  await web3.personal.importRawKey(senderPrivateKey, "");
  await web3.personal.unlockAccount(senderAddress, "", 0);    
}

