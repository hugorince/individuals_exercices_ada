function caloriesCount(list){
    
    let arr = list.split('\n')
    
    console.log('fonction', arr)
    let sums =[]
    let sumTemp = 0
    for (let i =0 ; i<arr.length; i++){   
        if (arr[i] != ''){
            sumTemp += parseInt(arr[i]) 
         }
        else {
            sums.push(sumTemp)
            sumTemp = 0
        }    
         }
         console.log(Math.max(...sums))
}
    




const fs = require('fs')
const list = []

fs.readFile('Input.txt', (err, data) => {
    if (err) throw err;
    
    
    console.log('appel', caloriesCount(data.toString()));

})

