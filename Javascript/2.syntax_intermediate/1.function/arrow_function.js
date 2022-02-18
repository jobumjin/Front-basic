/*
    Arrow function
    2015년에 발표된 ECMAScript Spectation(ES6)는 arrow function이 추가됨.
    익명함수 표현식을 작성하는 새로운 방법,
    파이썬에서는 lambda function과 비슷.    
*/

// sum 이라는 변수에 덧셈 기능을 제공하는 화살표 함수 작성.
const sum = (a, b) => a + b;
console.log(sum(5, 3));

// console.log(typeof sum);

// 화살표 함수의 특징
// 1. 암묵적인 return.

// 기존의 함수는 { }도 필요하고, return 키워드도 썼지만,
// 화살표 함수는 둘 다 쓰지 않음.
const anotherSum = (a, b) => a + b;

// body(함수의 몸체) 부분이 2줄 이상일 경우 { } 및 return을 추가해야함.
const sub = (a, b) => {
    console.log('뺄셈입니다.');
    return a - b;
};

console.log(sub(5, 3));

const dog = {
    age: 5,
    name: 'toto',
};

console.log({
    age: 5,
    name: 'toto',
});

// 객체를 반환하는 경우에는
// body를 ( )로 감싸주어야 함.
// 왜냐하면 { }를 객체 리터럴 기호가 아닌 함수 body block으로 인식하기 때문.
// ( )를 쓰지 않으면 block으로 인식함.
// 그래서 ( )를 써주면 { }를 객체 리터럴 기호로 인식해서, 객체가 반환됨.
const div = (a, b) => ({result: a / b});

const res = div(5, 3); // 내부적으로 div()의 반환값인 객체 {result: 1.666~7 }로 치환되고, 그 객체(값)가 res 변수에 할당됨.
console.log(res);

// 46, 47번 코드를 한 줄로 작성이 가능하다.
// console.log(div(5, 3)); // console.log({result: 1.6666666666666667})와 같다.

// 파라미터가 1개일 경우 () 생략 가능.
// const sqaure = (x) => x * x;
const square = x => x * x;
console.log(square(10));

// 파라미터가 없는 경우 ()는 필수.
const greet = () => 'hello!';
console.log(greet());