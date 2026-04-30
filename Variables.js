let a = 10;
let b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);

//When we divide the given number, We get two output
//1.Remenider 2.Quotient
// When we use / --- we get the Quotient value
// When we use % --- We get the remeinder value
//Eg: 10/2 --> 5 , 10%2 ---> 0
//  2|10 |5 --> quotient
//    10 --> 0 --> remeinder

console.log(10 / 2);
console.log(10 % 2);

//++ -->Increment operator
// -- ---> Decrement Operator

//++ --> Two types
//1.Pre Increment ++a
//2.Post Increment  a++

let s = 10;
let z = ++s; //1st we want to increment the vlaue of s becoz its pre increment
// s=s+1 --> 10+1 =11 -->s =11
//z=11, s=11

let y = s++; // 1st we want to store whaterver the value s before increment to the variable and then
//we need to increment
// y=11, s=s+1 =11+1 - 12
console.log(s);
console.log(y);
console.log(z);

let s = "JavaScript";
let result = "";
for (let i = s.length - 1; i >= 0; i--) {
  result = result + s[i];
}
console.log("Reverse of String :" + result);
