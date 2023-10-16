/*const AC = document.querySelector('#AC')
const PM = document.querySelector('#pm');
const proc = document.querySelector('#proc');
const divide = document.querySelector('#dziel');
const seven = document.querySelector('#siedem');
const eight = document.querySelector('#osiem');
const nine = document.querySelector('#dziewiec');
const times = document.querySelector('#mnozenie');
const four = document.querySelector('#cztery');
const five = document.querySelector('#piec');
const six = document.querySelector('#szec');
const minus = document.querySelector('#minus');
const one = document.querySelector('#jeden');
const two = document.querySelector('#dwa');
const three = document.querySelector('#trzy');
const plus = document.querySelector('#dodac');
const zero = document.querySelector('#zero');
const dot = document.querySelector('#kropka');
const equals = document.querySelector('#rowna');
const input = document.querySelector('#input');*/

const display = document.querySelector('#display');
const btns = document.querySelectorAll('button');

const nums = ['0','1','2','3','4','5','6','7','8','9','.'];
const btns = ['+', '-','*','/'];

let num1 = '';
let num2 = '';
let 

for( let i =0; i <btns.length; i++){
    btns[i].addEventListener('click', function(){
        if (nums.includes(btns[i].value)) {
            num1+=btns[i].value
           

        }

        
    })
}


