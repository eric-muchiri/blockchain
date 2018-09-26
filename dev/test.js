const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2345, "FR435768", "65RFGOG");
// bitcoin.createNewBlock(7893, "KLGHBCF", "FSXZBM");
// bitcoin.createNewBlock(6578, "YTREFD", "6JKLGHYH");
bitcoin.createNewTransaction(100, "ALEXTHJNMIES", "ERICMJKLID");

bitcoin.createNewBlock(6578, "YTREFD", "6JKLGHYH");

bitcoin.createNewTransaction(100, "ALEXTHJNMIES", "ERICMJKLID");
bitcoin.createNewTransaction(200, "ALEXTHJNMIES", "ERICMJKLID");
bitcoin.createNewTransaction(50, "ALEXTHJNMIES", "ERICMJKLID");

bitcoin.createNewBlock(674389, "GSHNKHHS", "JKSZMVSL");

console.log(bitcoin.chain[2]);
