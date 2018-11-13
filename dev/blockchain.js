const sha256 = require("sha256");

function Blockchain() {
  this.chain = [];
  this.pendingTransactions = [];
  this.createNewBlock(100, '0', '0');
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.pendingTransactions,
    nonce: nonce,
    hash: hash
  };
  //clear out the transactions
  this.pendingTransactions = [];
  //take the newly created block into the chain
  this.chain.push(newBlock);

  return newBlock;
};
Blockchain.prototype.getLastBlock = function() {
  return this.chain[this.chain.length - 1];
};

Blockchain.prototype.createNewTransaction = function(amount,sender,recepient) {
  const newTransaction = {
    amount: amount,
    sender: sender,
    recepient: recepient
  };

  this.pendingTransactions.push(newTransaction);
  return this, this.getLastBlock()["index"] + 1;
};
Blockchain.prototype.hashBlock = function(previousBlockHash,currentBlockData,nonce) {
  const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
  const hash = sha256(dataAsString);
  return hash;
};
Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData) {
  let nonce = 0;
  let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
  while (hash.substring(0, 4) !== "0000") {
    nonce++;
    hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    // console.log(hash);
  }
  return nonce;
}

module.exports = Blockchain;
