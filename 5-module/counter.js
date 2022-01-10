let cnt = 0;
export function increase() {
  cnt++;
}
export function getCnt() {
  return cnt;
}

// module.exports.getCnt = getCnt;
// module.exports.increase = increase;
// console.log(module);
