let cnt = 0;
function increase() {
  cnt++;
}
function getCnt() {
  return cnt;
}

module.exports.getCnt = getCnt;
module.exports.increase = increase;
