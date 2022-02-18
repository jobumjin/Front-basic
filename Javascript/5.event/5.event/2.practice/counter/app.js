const DECREASE = document.querySelector('#DECREASE');
const INCREASE = document.querySelector('#INCREASE');
const RESET = document.querySelector('#RESET');
const number = document.querySelector('.number');



DECREASE.addEventListener('click', () => {
    console.log('button clcked!');
    number.textContent --
    count();
});

INCREASE.addEventListener('click', () => {
    console.log('button clcked!');
    number.textContent ++ 
    count();
});

RESET.addEventListener('click', () => {
    console.log('button clcked!');
    number.style.color = 'gray';
    number.textContent = 0
});

function count() {
    if(number.textContent < 0){
        number.style.color = 'red';
    }else if(number.textContent == 0){
        number.style.color = 'grey';
    }else if(number.textContent > 0){
        number.style.color = 'green';
    }
}