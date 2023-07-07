// --------------------------------------------------------------------------
// ECMAJscript 2015(v6)
// let, const (block scope)

for (let i = 0, numbers = [3, 6, 9, 12]; i < numbers.length; ++i) {
  // ...
  console.log(i);
}

// let 사용 시 block scope가 적용되어서 해당 for문 외부에 있는 하단의 console.log는 오류가 뜬다.
// error msg : src/01-let-const.ts:10:13 - error TS2304: Cannot find name 'i'.
// console.log(i);
