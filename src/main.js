const {Blockchain, Transaction} = require('./blockchain');
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

// TEST 2
benCoin.createTransaction(new Transaction('address1', 'address2', 150));
benCoin.createTransaction(new Transaction('address2', 'address1', 50));

console.log('\nStarting the miner.....');
benCoin.minePendingTransactions('sweet-address');

console.log('\nBalance of Sweet is ', benCoin.getBalanceOfAddress('sweet-address'));

console.log('\nStarting the miner again.....');
benCoin.minePendingTransactions('sweet-address');

console.log('\nBalance of Sweet is ', benCoin.getBalanceOfAddress('sweet-address'));