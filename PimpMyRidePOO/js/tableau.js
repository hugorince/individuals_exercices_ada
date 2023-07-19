const tri = (arr) => {
    let permuted = false
    do {
        permuted = false
        for (let i = 0; i<arr.length; i++){
            if (arr[i] > arr[i +1]){
                let num = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = num
                permuted = true
            }
        }
    } while (permuted)

    return arr
}

const tri2 = (arr) => {
    let result = [arr[0]]
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > result[i - 1]){
            result.push(arr[i])
         }
        if (arr[i] < result[i - 1]){
            let num = result[i - 1]
            result[i - 1] = arr[i]
            result.push(num)
            console.log('num :', result[i-1], 'arrElem:', result[i])
         }
    }
    return result
}


console.log('coucou')
console.log(tri([4, 2, 11, 1, 7]))
console.log(tri2([4, 2, 11, 1, 7]))