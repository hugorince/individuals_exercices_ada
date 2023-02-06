let tripsToParse = [
	"Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7"
]

class Trip {

    constructor(name, start, duration, price) {
        this.name = name
        this.start = start
        this.duration = duration
        this.price = price
        this.end = start + duration
    }
    isCompatible(trip){
        if (this.end < trip.start) {
            return true
        } else {
            return false
        }
    }
    
}

function parseTrips(trips) {
    let result = []
    for (let i in trips){
        let newArr = trips[i].split(' ')
        result.push(
            new Trip(newArr[0], parseInt(newArr[1]), parseInt(newArr[2]), parseInt(newArr[3]))
            )
    }    
    return result
}

tripsObj = parseTrips(tripsToParse)

console.log(tripsObj)

let trip1 = new Trip('hugo', 0, 0, 0)
let trip2 = new Trip('coiucou', 1, 1, 1)

console.log(trip1.isCompatible(trip2))


function findCompatibilities(trips){
    let compatibilities = []
    for (let i = 0; i < trips.length - 1; i++){
        for (let j in trips){
            if (trips[i].isCompatible(trips[j])){
                compatibilities.push(trips[i], trips[j])
            }
        }
    }
    return compatibilities
}
console.log(findCompatibilities(tripsObj))

// const findBestPrice = (trips) => {
//     let list = findCompatibilities(parseTrips(trips))
//     let result = []
//     let prices = []
//     for (let i in list){
//          prices.push(getTripsPrice(list[i]))
//     }
//     for (let i in list){
//         if (getTripsPrice(list[i]) === Math.max(...prices)) {
//             for (let j in list[i]){
//                 result.push(list[i][j].client)
//                 }
//             }
//     }
//     console.log(prices)
//     console.log(result)
//     return 'The best combinaison is : ' + result[0] + ' and ' + result[1]
// }
// console.log(findBestPrice(tripsToParse))


  