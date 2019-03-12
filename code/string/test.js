function match(str) {
  let first = str.match(/(0+|1+)/)[0];
  let second = (first[0] ^ 1).toString().repeat(first.length)
  let reg = new RegExp(`^${first}${second}`);
  if (reg.test(str)) {
    console.log(first+second,111,str.match(reg)[0])
    // return str.match(reg)[0]
    return RegExp.$1
  } else {
    return ""
  }
}

function test(s) {
  let arr = [];
  for (let i = 0; i < s.length - 1; i++) {
    let result = match(s.slice(i));
    if (result) {
      arr.push(result)
    }

  }


  return arr;

}
console.log(test('00110011'))