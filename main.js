const SHA256 = require('crypto-js/sha256')


class Transaction{
    constructor(fromAddress, toAddress, amount){
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }
}
class Block{
    constructor(index, timestamp, transaction, previousHash = ''){
        this.timestamp = timestamp;
        this.transaction = transaction;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString()
    }

    mineBlock(difficulty){
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("Block mined: " + this.hash);
    }
}


class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 4;
    }

    createGenesisBlock(){
        return new Block("27/09/2021", "Genesis block", "0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }

    isChainValid(){
        for (let i=1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }
            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }

        return true;
    }
}

let benCoin = new Blockchain();

// console.log("Mining Block 1...");
// benCoin.addBlock(new Block(1, "27/09/2021", {amount: 3}));
// console.log("Mining Block 2...");
// benCoin.addBlock(new Block(1, "29/09/2021", {amount: 11}));

// console.log("Is blockchain valid? " + benCoin.isChainValid());

// benCoin.chain[1].data = {amount: 5};
// benCoin.chain[1].hash = benCoin.chain[1].calculateHash();

// console.log("Is blockchain valid? " + benCoin.isChainValid());

// console.log(JSON.stringify(benCoin, null, 4));