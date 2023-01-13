const zero = document.getElementById('0');
const un = document.getElementById('1');
const deux = document.getElementById('2');
const trois = document.getElementById('3');
const quatre = document.getElementById('4');
const cinq = document.getElementById('5');
const six = document.getElementById('6');
const sept = document.getElementById('7');
const huit = document.getElementById('8');
const neuf = document.getElementById('9');
const plus = document.getElementById('+');
const minus = document.getElementById('-');
const divide = document.getElementById('/');
const multiply = document.getElementById('*');
const equal = document.getElementById('=');


const all = [zero, un, deux, trois, quatre, cinq, six, sept, huit, neuf, plus, minus, divide, multiply]

let result = document.getElementById('result');

const createOperation = () => {
        for (let i in all){
        all[i].onclick = () => { 
            result.innerHTML += all[i].value
        };
    };
};
createOperation()

equal.onclick = () => {
result.innerHTML = eval(result.innerHTML)
}









