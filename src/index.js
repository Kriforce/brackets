module.exports = function check(str, bracketsConfig) {
  let start = [];
  let end = [];
  let chars = str.split('');
  let res = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    start.push(bracketsConfig[i][0]);
    end.push(bracketsConfig[i][1]);
  }

  for (let i = 0; i < chars.length; i++) {
    let charStr = chars[i];

    if (start.indexOf(charStr) > -1) {
      if (res[res.length - 1] == charStr && end.indexOf(charStr) > -1) {
        res.pop();
      } else {
        res.push(charStr);
      }
    } else {
      let endStr = res.pop();
      let indexEnd = end.indexOf(charStr);

      if (indexEnd < 0) {
        return false;
      }

      if (start[indexEnd] != endStr) {
        return false
      }
    }
  }

  return res.length == 0;
}
