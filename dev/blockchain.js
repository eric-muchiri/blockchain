function Blockchain() {
  this.chain = [];
  this.pendingTransactions = [];
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

Blockchain.prototype.createNewTransaction = function(
  amount,
  sender,
  recepient
) {
  const newTransaction = {
    amount: amount,
    sender: sender,
    recepient: recepient
  };

  this.pendingTransactions.push(newTransaction);
  return this, this.getLastBlock()["index"] + 1;
};

module.exports = Blockchain;
