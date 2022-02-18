// 2. EventHandler property 방식 - HTML과 js를 분리,
const evPropButton = document.querySelector('#btn-ev-prop');
// console.log(evPropButton);


// JS에서 함수는 일급객체이기 때문에, 객체는 값이고, 값은 프로퍼티에 할당할 수 있음.
evPropButton.onclick = function() {// 익명함수를 만들고, onClick property에 할당.
    console.log('by event property');
};

// console.dir(evPropButton);
console.log(evPropButton.onclick);

// 하나의 이벤트 밖에 등록 불가.
evPropButton.onclick = () => console.log('새롭게 등록된 이벤트 핸들러');
console.log(evPropButton.onclick);

// 3. addEventListener - EventHandler property(여기서의 property는 onclick)에 
// 영향을 미치지 않기 때문에 등록한 모든 이벤트가 호출됨.

// on 접두사 생략.
const addEvLsnrButton = document.querySelector('#btn-add-ev-lsnr');
console.log(addEvLsnrButton);

// 함수 선언문 방식으로 작성
function buttonHandler() {
    console.log('double clicked!');
    console.log('by addEventListener with 함수 선언문');
}

// addEventListener('event name', callback function)
addEvLsnrButton.addEventListener('dblclick', buttonHandler); // 콜백함수로 등록

// 화살표 함수로 작성
const buttonHandler2 =  () => {
    console.log('mouseover');   
    console.log('by addEventListener with arrow function');
};
console.log(buttonHandler2);

// 마우스를 버튼 위로 이동했을 때 발생하는 이벤트는?
addEvLsnrButton.addEventListener('mouseover', buttonHandler2);

// 화살표 함수를 콜백함수 파라미터에 직접 작성. - ** 
addEvLsnrButton.addEventListener('click', () => {
    console.log('by addEventListener with arrow function');
});

// 이벤트 핸들러의 제거. 
// 1. EventHandler attribute 방식 : onclick attribute 코드 제거

// 2. EventHandler property 방식 : 해당 property에 null값 할당.
console.log(evPropButton.onclick);
evPropButton.onclick = null;
console.log(evPropButton.onclick);

// 3. addEventListener method 방식
addEvLsnrButton.removeEventListener('dblclick', buttonHandler);
addEvLsnrButton.removeEventListener('mouseover', buttonHandler2);
// click이벤트로 등록한 익명함수(화살표 함수)는 제거 불가.