import subStr from '../../code/string/string2'

test('计数二进制子串 ', () => {
  expect(subStr('00110011')).toEqual(['0011','01','1100','10','0011','01'])
})
test('计数二进制子串 ', () => {
  expect(subStr('10101')).toEqual(['10','01','10','01'])
})
