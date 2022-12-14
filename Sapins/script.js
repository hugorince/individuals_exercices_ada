const ligne = (arr) => {
    let sapin =''
    let espace = ' '
    let sections = arr.length / 3
    let space =''
    let count = 0;
    for (let i = 0 ; i < arr.length; i++){
            for (let j = 0; j < sections; j++){
                if (i % 4 === 0){
                    console.log(arr.length -i)
                    space = espace.repeat(arr.length - i - 1)
                    sapin += '      ' + arr[i] + '\n'
                    console.log('spain wip :',sapin)
                    count++
                    j = sections
                    console.log('if',i)
                }
            //    else if (i < 3){
            //     space = espace.repeat(arr.length - i -1)
            //     sapin += space + arr[i] + '\n'
            //     j = sections
            //    } 
            else {
                    console.log('else',i)
                    space = espace.repeat(arr.length - i - 1 - count <= 0 ? 1 : arr.length - i -1 - count)
                    sapin += space + arr[i] + '\n'
                    j = sections
                }     
            }
    } 
return sapin
}

function line(et){
    let sapin =  '/' + etoile.repeat(et) + '\\'
    return sapin
}

const xMas = (n) =>{
    let base1 = '+'
    let base2 = '/*\\'
    let etages = [base1, base2]
    let stars = 1
    let etoile = '*'

    for (let i = 1 ; i < n ; i++){
        if (i % 3 === 0 && i > 0) {
            let sapin = '/' + etoile.repeat(stars) + '\\'
            etages.push(sapin)
            }
        else{
        stars += 2
        let sapin =  '/' + etoile.repeat(stars) + '\\'
        etages.push(sapin)
        }
    }
    return ligne(etages)
    
}
console.log(xMas(9))


