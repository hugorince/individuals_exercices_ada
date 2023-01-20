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

const buttons = [zero, un, deux, trois, quatre, cinq, six, sept, huit, neuf];
//const operators = [plus, minus, divide, multiply, equal]
const all = [zero, un, deux, trois, quatre, cinq, six, sept, huit, neuf, plus, minus, divide, multiply]

let result = document.getElementById('result');
let calcul = null


const createOperation = () => {
        for (let i in all){
        all[i].onclick = () => { 
            result.innerHTML += all[i].value
        };
    };
};
createOperation()

const solve = () => {
    let calcul = result.innerHTML.split(/[.\*+-/_]/)
    let operators = result.innerHTML.split('')
    let finalOp = []
    for (let i in operators){
        if (operators[i] == '+' || operators[i] == '-' || operators[i] == '/' || operators[i] == '*'){
            finalOp.push(operators[i])
        }
    }
    console.log(finalOp)
    console.log(calcul)

    let num1 = parseInt(calcul[0])
    let num2 = parseInt(calcul[1])
    let num3 = parseInt(calcul[2])
    let num4 = parseInt(calcul[3])
    let num5 = parseInt(calcul[4])
    
    result.innerHTML = num1 + num2

}

equal.onclick = () => {
result.innerHTML = eval(result.innerHTML)
}

document.getElementById('clear').onclick = () => {
    result.innerHTML = 0
}





