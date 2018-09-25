const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2345, "FR435768", "65RFGOG");
bitcoin.createNewBlock(7893, "KLGHBCF", "FSXZBM");
bitcoin.createNewBlock(6578, "YTREFD", "6JKLGHYH");

console.log(bitcoin);
