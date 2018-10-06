const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

/*
TESTING BLOCKS AND TRANSACTIONS

bitcoin.createNewBlock(2345, "FR435768", "65RFGOG");
// bitcoin.createNewBlock(7893, "KLGHBCF", "FSXZBM");
// bitcoin.createNewBlock(6578, "YTREFD", "6JKLGHYH");
bitcoin.createNewTransaction(100, "ALEXTHJNMIES", "ERICMJKLID");
bitcoin.createNewBlock(6578, "YTREFD", "6JKLGHYH");
bitcoin.createNewTransaction(100, "ALEXTHJNMIES", "ERICMJKLID");
bitcoin.createNewTransaction(200, "ALEXTHJNMIES", "ERICMJKLID");
bitcoin.createNewTransaction(50, "ALEXTHJNMIES", "ERICMJKLID");
bitcoin.createNewBlock(674389, "GSHNKHHS", "JKSZMVSL");
*/

// console.log(bitcoin.chain[2]);

//TESTING HASH BLOCK METHOD
const previousBlockHash = "DFNKLURBNXLSJHDHD";
const currentBlockData = [
  {
    amount: 10,
    sender: "FDVCNMLIOFDBBJHBCGTR",
    recepient: "ASCVFGUKFNHFBKLOY"
  },
  {
    amount: 150,
    sender: "DVJKOLUNTVFURGBCBJD",
    recepient: "GFJSRTBXVBDGLASFUYHFL"
  },
  {
    amount: 100,
    sender: "FGFKJGDUFEDGBXNFHD",
    recepient: "HGDHGVFSMXVYERNXCK"
  }
];
const nonce = 100;

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));
