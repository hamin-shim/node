// const process = require("process");

console.log(process.execPath);
console.log(process.cpuUsage());
setTimeout(() => {
  console.log("settimeout");
}, 2000);
process.nextTick(() => {
  console.log("nexttick");
});
for (let i = 0; i < 30; i++) {
  console.log("hi");
}
