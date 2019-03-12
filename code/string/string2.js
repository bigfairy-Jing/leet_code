/*
  计数二进制子串
  给定一个字符串s,计算具有相同数量的0和1的非空(连续)子字符串的数量,并且这些子字符串中的所有0和1都是组合在一起
  重复出现的子串要计算他们出现的次数

  输入 '00110011' 输出6   '0011'  '01' '1100'  '10'  '0011'  '01'

  /0011/0011
  0/01/10011
  00/1100/11
  001/10/011
  0011/0011/
  00110/01/1

*/

const match = (str) =>{
  //找出多个 0 连续或者1连续（1个也可以） 的集合
  let j = str.match(/^(0+|1+)/)[0];
  //按位找到 几个反的
  let o = (j[0] ^ 1).toString().repeat(j.length);
  //写出可以匹配的正则
  let reg = new RegExp(`^(${j}${o})`);
  if(reg.test(str)){
    //RegExp.$1是RegExp的一个属性,指的是与正则表达式匹配的第一个 子匹配(以括号为标志)字符串，以此类推，RegExp.$2，RegExp.$3，..RegExp.$99总共可以有99个匹配
    return RegExp.$1
  }else return '';
}

export default (str)=>{
   let r = [];

   for (let i = 0; i < str.length-1; i++) {
     let sub = match(str.slice(i));
     if(sub){
       r.push(sub)
     }
   }
   return r;
}