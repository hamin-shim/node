const path = require("path");

console.log(__dirname);
console.log(__filename);
console.log(path.sep);
console.log(path.delimiter);

//basename
console.log(path.basename(__filename));

const parsed = path.parse(__filename);
console.log(parsed);

const str = path.format(parsed);
console.log(str);

console.log(path.normalize("./folder/////"));

console.log(__dirname + path.sep + "image");

console.log(path.join(__dirname, "image"));
