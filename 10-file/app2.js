const fs = require("fs").promises;

fs.readFile("./text-new.txt", "utf8")
  .then((data) => console.log(data))
  .catch(console.error);

//write

fs.writeFile("./text-new.txt", "Nice to meet you!").catch(console.error);
fs.appendFile("./text-new.txt", "1")
  .then(() => fs.copyFile("./text-new.txt", "./file.txt").catch(console.error))
  .catch(console.error);

fs.mkdir("sub-folder").then().catch(console.error);

fs.readdir("./").then(console.log).catch(console.error);
