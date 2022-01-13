const fs = require("fs");

const data = [];
const readStream = fs
  .createReadStream("./file.txt", {
    highWaterMark: 8,
    encoding: "utf-8",
  })
  .on("data", (chunk) => {
    console.log(chunk);
    data.push(chunk);
  })
  .on("error", console.error)
  .on("end", () => {
    console.log(data.join(""));
  });
