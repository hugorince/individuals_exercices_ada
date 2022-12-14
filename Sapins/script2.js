function etage(etoiles){
    return '/' + '*'.repeat(etoiles) + '\\'
}

function space(etages){
    
    let espace = ''
    
    for (let i =0; i< etages; i++){
        if (i % 3 != 0){
        espace = ' '.repeat(etages - i - 1)
    }
}
return espace
}

function etoiles(etages){
    let stars = 1
    for (let i = 0; i < etages; i++){
        if (i % 3 != 0){
            stars += 2
        }  
    }
    return stars
}

function sap1(n){
    let result = '+' + '\n'
    for (let i = 1; i< n; i++){
    result += space(i) + etage(etoiles(i)) + '\n'
    console.log(space(i))
    }
    return result
}

console.log(sap1(10))