/* 
Variables 
Variables is container for storing data. 
for variable declaration use var, let or const
*/

var number1 = 100;
let number2 = 2039; //let and const use form ES6
const number3 = 93933; //this is constant number which does't change

let y = 5, z = "Mayur";

//Printing output
console.log(number1);
console.log(number2);
console.log(number3);

//Operators in JavaScript
/*
1. Arithmetic Operators: +, -, *, /, % (Modulas = Reminder)
2. Logical Operators: && (and), || (or), ! (not)
3. Comparision Operators: ==, !=, <, >, <=, >=, === (strict equal), !== (strict not equal) [strict check data type is equal or not]
4. Assignment Operators: =, +=, -+, *=, /=, %=
5. Bitwise Operators: & (and), | (or), ^ (xor), ~ (not), << (left shift), >> (right shift)
6. Increment: ++
7. Decrement: --
8. Ternary Operator: ?, :

*/


//Assignment Operators
console.log("\"Assignement Operators\"");
console.log("10 + 20 = ", 10 + 20);
console.log("10 - 20 = ", 10 - 20);
console.log("10 * 20 = ", 10 * 20);
console.log("10 / 20 = ", 10 / 20);
console.log("10 % 3 = ", 10 % 3);

//Logical Operators
console.log("\"Logical Operator Operators\"");
console.log("True && False = ", true && false);
console.log("True || False = ", true || false);
console.log("!True = ", !true );

//Comparision Operators
console.log("\"Comparision Operators\"");
console.log("10 == 20 = ", 10 == 20);
console.log("10 == \'10\' = ", 10 == '10');
console.log("10 === \'10\' = ", 10 === '10');
console.log("10 != 20 = ", 10 != 20);
console.log("10 !== \'10\' = ", 10 !== '10');
console.log("10 < 20 = ", 10 < 20);
console.log("10 > 3 = ", 10 > 3);
console.log("10 <= 10 = ", 10 <= 10);
console.log("10 >= 3 = ", 10 >= 3);

//Bitwise Operators
console.log("\"Bitwise Operators\"");
console.log("15 (1111) & 9 (1001) = ", 15 & 9);
console.log("15 (1111) | 9 (1001) = ", 15 | 9);
console.log("15 (1111) ^ 9 (1001) = ", 15 ^ 9);

//Assignment Operator
let X, Y, Z;
X = 10;
X += 20; //similarly use -=, *=, /=, %=
console.log("X += 20 is ",X);

//Increment and Decrement
Y = 2;
Z = 5;

Y++; 
Z--; 

console.log("After Y++ is ", Y);
console.log("After Z-- is ", Z);


//Ternary Operator
let isLoggedin = 1; //if 0 loggedout if 1 login

let option = isLoggedin == 1 ? "Logout" : "Login";

document.write(option);

//Joining two strings
console.log("Hello" + " " + "World" + " " + 10);
