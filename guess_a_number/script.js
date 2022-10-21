let givenNumber = []
let numberToGuess = []
document.getElementById("indication").innerHTML = " To start the game, please type a number below";
document.getElementById("minimal").innerHTML = "0 < ="
document.getElementById("maximal").innerHTML = "< = 50"


function gamePlay() {
    
    function askNumber(){
    let num = document.getElementById('type').value
    console.log(num)
    givenNumber.push(num)    
    }
    askNumber()

    console.log(givenNumber)

    let toNum = parseInt(givenNumber.slice(-1))
    let toNum1 = parseInt(numberToGuess.slice(-1))

    console.log(toNum)
    console.log(typeof toNum1)
    
    function didIWin() {
    if (toNum === toNum1) {
        return true;
    }   
    else {
        return false;
    }
    }
    didIWin()

    if (didIWin() == true){
    document.body.innerHTML = "Congrats you WON !!!"
    }
    else {
        let counter = setInterval(+1)
        document.getElementById("indication").innerHTML = " Nope! Please Try again. Attempt number : " + (counter - 2);
            
        if (toNum < toNum1) {
            document.getElementById("minimal").innerHTML = toNum + " < ="
        }
        if (toNum > toNum1) {
            document.getElementById("maximal").innerHTML = "< = " + toNum
        }
    }
}


function player1() {   
        let num1 = Number(prompt("Enter a number between 0 and 50"))
        if (num1 > 50){
            player1()
        }
        else {
            numberToGuess.push(num1) 
            console.log(typeof num1)
    } 
        }
player1()








    











