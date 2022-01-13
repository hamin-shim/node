const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("./file.txt");
const zlibStream = zlib.createGzip();
const writeStsream = fs.createWriteStream("./file4.zip");

const piping = readStream.pipe(zlibStream).pipe(writeStsream);
piping.on("finish", () => console.log("done"));
