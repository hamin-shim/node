const fs = require("fs");

// rename(..., callback(error, data))
// try {renameSync(...)} catch (e){}
// promises.rename().then().catch()

// try {
//   fs.renameSync("./new-text.txt", "./back-to-text.txt");
// } catch (error) {
//   console.error(error);
// }

// fs.rename("./back-to-text.txt", "./text.txt", (error) => console.error(error));

fs.promises
  .rename("./text.txt", "./text-new.txt")
  .then(() => console.log("done"))
  .catch(console.errer);
