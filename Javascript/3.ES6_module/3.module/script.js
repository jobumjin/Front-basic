import {sum, sub, mul, div} from './fuction.js';
import {num as number, obj, array} from './fuction.js';

console.log(number);
console.log(obj, array);

// console.log(sum(1, 2));

const x = 10;
const y = 5;

document.getElementById('x').textContent = x;
document.getElementById('y').textContent = y;

document.getElementById('add').textContent = sum(x,y);
document.getElementById('sub').textContent = sub(x,y);
document.getElementById('mul').textContent = mul(x,y);
document.getElementById('div').textContent = div(x,y);