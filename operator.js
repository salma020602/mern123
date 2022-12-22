const a=10
const b=20
let x=10
console.log('Equality' +(a==b))
console.log('Not Equals' +(a!=b))
console.log('GT' +(a>b))
console.log('GTE' +(a>=b))
console.log('LT' +(a<b))
console.log('LTE' +(a<=b))

console.log('Subtract' + (a-b))
console.log('Add' + (a+b))
console.log('Post Inc' + (x++))//x=x+1
console.log('Pre Inc' + (++x))
console.log('Exponent' +(a**x))

console.log('Bitwise And' + (a&1))
console.log('Shift Operators' + (a>>1))
console.log('Shift Operators' +(a<<1))
console.log('Logical And 1 :'+ (10&&1))
console.log('Logical And 0:'+ (10&&0))
const st=a>10 ? 'success': 'Fail'
console.log('Ternary Operator : '+st)
console.log('Relational Array In:' +(0 in num))
const obj={1:'abc', 2:'acc',10:'xyz'}
console.log('Relational Object In:' +(a in obj))