const pokedex = require('./pokedex.json');
const myPokedex = pokedex.pokemon;

const num = (arr) => {
    let num = 0;
    arr.map(n=>num++);
    return num
}

const more10 = (arr) => {
    let result = [];
    arr.map(poke=>{
        const weight = poke.weight.split('.')[0];

        if (weight > 10){
            result.push(poke.name);
        }
    })
    return result
}

const classByWeight = (arr) => {
    let result = [];
    arr.map(poke=>{
        const weight = poke.weight.split(' ')[0];
        result.push({weight : weight, name: poke.name})
    })
    return sort(result)
}

const sort = (arr) => {
    let result = [];
    let permuted = false;
    do {
        permuted = false;
        for (let i = 0; i < arr.length - 1; i++){
            if (arr[i].weight > arr[i+1].weight){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                permuted = true;
            }
        }
    } while (permuted)

    for (let i in arr){
        result.push(arr[i].name)
    }
    return result
}

console.log(num(myPokedex))
console.log(more10(myPokedex));
console.log(classByWeight(myPokedex));


const evolution = (pokemon, arr) => {
    let evol = [];
    arr.map(poke=>{
        if (poke.name === pokemon){
            evol = poke.next_evolution;
        }
    })

    return pokemon + ',' + evol.map(poke=>poke.name)
}

console.log(evolution("Bulbasaur", myPokedex))

