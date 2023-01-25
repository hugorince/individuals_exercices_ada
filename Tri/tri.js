const bubble = (arr) => {
    do {
        permuted = false
        for (let i = 0; i<arr.length; i++){
            if (arr[i] > arr[i + 1]){
                let newVal = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = newVal
                permuted = true
            }
        }
    }
    while (permuted)
    return arr
}

console.log(bubble([8, -2, 2, 1, 0, 9, 6, 54, 78, 90, 2, -80, 3, 22]))


const quick = (arr) => {
    if (arr.length <= 1){
        return arr
    }
    else{
        let pivot = arr[arr.length -1]
        let smaller = []
        let bigger = []
        let resultArr = []
        for (let i = 0; i< arr.length; i++){
            if (arr[i] < pivot){
                smaller.push(arr[i])
            }
            else if (arr[i] > pivot){
                bigger.push(arr[i])
            }
        }
        return resultArr.concat(quick(smaller), pivot, quick(bigger))
    }
}

console.log(quick([8, -2, 2, 1, 0, 9, 6, 54, 78, 90, 2, -80, 3, 22]))