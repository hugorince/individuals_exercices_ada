const now = () => {
    let date = new Date()
    let result = date.getMilliseconds();
    return result
}

const addArray = (arr, n) => {
    for (let i =0; i<arr.length; i++){
        arr[i] += n
    }
    return arr
}

const add = (a, b) => {
    return a + b;
}

const recursiveFactorial = (n) => {
    if (n > 1) {
        return n * recursiveFactorial(n-1)
    } else {
        return 1}
    
}

let intialTime = now()

recursiveFactorial(987987)

let finalTime = now()
let timePassed = finalTime - intialTime

console.log('execution time = ' + timePassed + 'milliseconds')