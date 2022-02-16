/*  
 * 변수 키워드의 종류
 * var, let, const
 * 
 * 변수와 상수(Variables & Constants)
 * 
 * 변수와 상수(Variables & Constants)
 * Java와 마찬가지로 변수의 선언(Declaration)과 초기화(Initialization) or 정의(Definition)
 * 
 */

// 변수 (Variable)
console.log(tiger);
var tiger;

// let : var의 대체로 사용하는 키워드
// console.log(rabbit); // Cannot access 'rabbit' before
// let rabbit;

// 변수 네이밍 컨벤션(Naming convention) : Camelcase
let userName = 'Yoo';
console.log(); // shortcut : log
// document.write(userName); //Chrome dev tools에서 확인.

// 상수(Constant)
const allUsers = 20;
console.log(allUsers);

allUsers = 5; // 상수 키워드로 쓴 const 변수에는 재할당 불가능.
console.log(allUsers);