const sum = (arr) => {
    let result = 0
    for (i in arr){
        result += arr[i]
    }
return result
}
console.log(sum([1,2,3]))

function sum2(arr){
    if(arr.length > 1){
      return arr.pop() + sum2(arr);
    }else{
      return arr[0];
    }
}
console.log(sum2([1,2,3]))


const factorial = (int) => {
    //let result = 1
    //for (let i = 1; i <= int; i++){
        //result *= i
        if (int !== 1){
        return factorial((int-1)) * int 
        }
        else return 1
    //}
//return result
}
console.log(factorial(4))

const fibonacci = (x) => {
    //addition entre dernier et avant dernier nombre d'un array
    let fibo = [0, 1]
    for (let i= 0; i < x; i++){
        fibo.push(fibo[fibo.length -1] + fibo[fibo.length -2])
    }
return fibo
}

const fibonacci2 = (x) => {
if (x < 2){
    return 1;
}else{
    return fibonacci2(x-2) + fibonacci2(x-1);
}
}
console.log(fibonacci(10))
console.log(fibonacci2(10))
