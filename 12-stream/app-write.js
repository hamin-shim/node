const fs = require("fs");

const writeStsream = fs.createWriteStream("./file3.txt");

writeStsream.on("finish", () => {
  console.log("finished");
});
writeStsream.on("error", console.error);
writeStsream.write("hello!");
writeStsream.end();
