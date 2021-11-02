const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('bc57f31d4f9c50e6edb76f458a7c2ff2f9e393a255bc699fc7b1e826eecb7a32');
const myWalletAddress = myKey.getPublic('hex');
let benCoin = new Blockchain();

//TEST 1
// console.log("Mining Block 1...");
// benCoin.addBlock(new Block(1, "27/09/2021", {amount: 3}));
// console.log("Mining Block 2...");
// benCoin.addBlock(new Block(1, "29/09/2021", {amount: 11}));

// console.log("Is blockchain valid? " + benCoin.isChainValid());

// benCoin.chain[1].data = {amount: 5};
// benCoin.chain[1].hash = benCoin.chain[1].calculateHash();

// console.log("Is blockchain valid? " + benCoin.isChainValid());

// console.log(JSON.stringify(benCoin, null, 4));

// TEST 3
const tx1 = new Transaction(myWalletAddress, 'another Public Key', 10);
tx1.signTransaction(myKey);
benCoin.addTransaction(tx1);

// TEST 2
// benCoin.addTransaction(new Transaction('address1', 'address2', 150));
// benCoin.addTransaction(new Transaction('address2', 'address1', 50));

console.log('\nStarting the miner.....');
benCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of Sweet is ', benCoin.getBalanceOfAddress(myWalletAddress));

// console.log('\nStarting the miner again.....');
// benCoin.minePendingTransactions('sweet-address');

// console.log('\nBalance of Sweet is ', benCoin.getBalanceOfAddress('sweet-address'));

benCoin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid: ', benCoin.isChainValid());