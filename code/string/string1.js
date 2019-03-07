// let str = 'Let.s take LeetCode contest'

//回文字符串

// export default (str)=>{
//   if(!str){
//     console.error('请先传入字符串');
//     return;
//   }
//   let result = str.split(' ').map(item=>{
//     return item.split('').reverse().join("");
//   });
//   return result.join(" ");
// }

//优化1

// export default (str) => {
//   if (!str) {
//     console.error('请先传入字符串');
//     return;
//   }
//   return str.split(' ').map(item => {
//     return item.split('').reverse().join("");
//   }).join(" ");
// }

//方法2
export default (str) => {
  if (!str) {
    console.error('请先传入字符串');
    return;
  }
  //match 存放 匹配的单词的数组
  return str.match(/[\w']+/g).map(item => {
    return item.split('').reverse().join("");
  }).join(" ");
}