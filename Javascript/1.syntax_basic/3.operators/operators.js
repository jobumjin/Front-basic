// 산술 연산자
console.log(5 + 5);
console.log(5 - 10);
console.log(5 / 2);
console.log(5 * 4);
console.log(10 % 3);
console.log(2 ** 2);

// 증강 연산자
let age = 5;

// 후위 연산 : 실행 종료 후 연산
console.log(age++); // 5 //age = age + 1
console.log(age--); // 6
console.log(age); // 5

// 전위 연산 : 연산을 먼저 진행한 후 출력문 실행
console.log(++age); // 6
console.log(--age); // 5

// 관계 연산자(결과값이 true or false가 나오도록 하는 문(statement)을 조건식(condition)이라고 함.)
const result = age > 4; // true나 false도 하나의 값(value)이다.
console.log(age > 4); // true
console.log(age <= 3); // false

// 동등 연산자
console.log(1 == '1'); // true, 타입이 서로 다를 경우, (암시적(묵시적), implicit)으로 변환하여 비교함
console.log(1 === '1'); // false, 엄격한 비교(strict mode)

// 논리 연산자
console.log(true && true); // and 연산(~이고), true
console.log(5 > 3 && 2 === 2); // true
console.log(5 > 3 || 2 !== 2); // or 연산 (~이거나), true

// 삼항 연산자
const yourAge = 25;
const beverage = (yourAge >= 20) ? 'soju' : 'sprite';
console.log(beverage);

// 할당 연산자(우선 순위가 거의 아래에 있음.) 변수에 값을 할당(assignment)할 때 사용하는 연산자.
let myAge = 40;
console.log(myAge);