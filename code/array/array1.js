//question require('array1.png');

const map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

const comb = arr => {
  // 临时变量用来保存前两个组合的结果
  const size = [];
  // 遍历前面两个元素，将这两个元素放入到一个数组中
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr[1].length; j++) {
      size.push(`${arr[0][i]}${arr[1][j]}`);
    }
  }
  //splice 改变原数组
  arr.splice(0, 2, size);
  if (arr.length > 1) {
    comb(arr);
  } else {
    return size;
  }
  return arr[0];
};

export default str => {
  if (str.length === 0) throw '传入有误';
  if (str.length === 1) {
    return map[str].toString().split('');
  }

  const num = str.split('');
  //如果传入的是'23' 得到的数组集合是 ['abc','def'];  如果传入的是'234' 得到的数组集合是 ['abc','def','ghi'];
  const temp = [];
  num.forEach(i => {
    if (map[i]) {
      temp.push(map[i]);
    }
  });
  return comb(temp);
};
