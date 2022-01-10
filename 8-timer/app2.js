console.log("code1");
setTimeout(() => {
  console.log("time 0");
}, 0);
console.log("code2");
setImmediate(() => {
  console.log("set immediate");
});
console.log("code3");
process.nextTick(() => {
  console.log("nexttick");
});
