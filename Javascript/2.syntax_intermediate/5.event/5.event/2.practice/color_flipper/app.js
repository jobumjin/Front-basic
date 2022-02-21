const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

// addEventListener 사용해서 button을 click했을 때 button clicked!가 출력되도록.
// arrow fn 활용, callback함수 파라미터 부분에 직접 작성

btn.addEventListener('click', () => {
    // console.log('button clcked!');
    const a = 5;
    const [r, g, b] = getRendomNumber(0, 255); // rgb 범위 0 ~ 255;
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    
    document.body.style.background = rgbColor;
    color.style.color = rgbColor;
    color.textContent = rgbColor;
    
});

// rgb 랜덤값 추출 함수
function getRendomNumber(min, max) {
    let randomRGBArray = [];
    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        // console.log(randomNumber);
        randomRGBArray.push(randomNumber)
    }
    // console.log(randomRGBArray);
    
    return randomRGBArray;
}
