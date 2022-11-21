const isValidDate = (date) => {
    let arrDate = date.split('/')
    //console.log(arrDate)

    if (parseInt(arrDate[0]) > 31 || parseInt(arrDate[1]) > 12){
        return false
    }
    if ((parseInt(arrDate[1]) === 11 && (parseInt(arrDate[0])) > 30) ){
        return false
    }
    if ((parseInt(arrDate[1]) === 09 && (parseInt(arrDate[0])) > 30) ){
        return false
    }
    if ((parseInt(arrDate[1]) === 06 && (parseInt(arrDate[0])) > 30) ){
        return false
    }
    if ((parseInt(arrDate[1]) === 04 && (parseInt(arrDate[0])) > 30) ){
        return false
    }
    if ((parseInt(arrDate[1]) === 02 && (parseInt(arrDate[0])) > 28) ){
        return false
    }
    else {
        return true
    }
}
console.log(isValidDate("31/10/2001"))

// const isPalindrome = (date) => {
//     let arr = date.split('')
//     //console.log(arr)
//     if (arr[0] === arr[9] && arr[1] === arr[8] && arr[3] === arr[7] && arr[4] === arr[6]) {
//         return true
//     }
//     else return false
// }
const isPalindrome = (string) => {
    return string == string.split('').reverse().join('')
}
console.log(isPalindrome("03/04/2001"))

const getNextDays = (n) => {
    let date = new Date()
    date.setDate(n)
    return date.toLocaleDateString('fr-FR')
}
console.log(getNextDays(1))


const isDatePalindrome = (date) => {
    let date2 = date.split('/').join("")
    return date2 == date2.split('').reverse().join('')
}

console.log(isDatePalindrome("22/02/2022"))

const getNextPalindromes = (x) => {
    let result = []
    for (let i = 0 ; result.length < x; i++){
        if ((isDatePalindrome(getNextDays(i))) && (isValidDate(getNextDays(i)))){
            result.push(getNextDays(i))
        }
        else {
            getNextDays(i + 1)
        }
    }
    return result
}
console.log(getNextPalindromes(8))