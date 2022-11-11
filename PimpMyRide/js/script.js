let tripToParse = "Perdita 8 10 8"

function parseTrip(trip){
    let arr2 = trip.toString().split(' ')
    let arr = { 'client':arr2[0], 'start':parseInt(arr2[1], 10),'duration':parseInt(arr2[2], 10), 'price':parseInt(arr2[3], 10) }
    return arr
}
console.log(parseTrip(tripToParse))

let tripsToParse = [
	"Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7"
]

function parseTrips(trips) {
	let list = []
    for (let i in trips){
        list.push(parseTrip(trips[i]))
    }
    return list
}
console.log(parseTrips(tripsToParse))

function getTripsPrice(trips){
    let prices = 0
    for (let i in trips){
        prices += +(trips[i].price)
    }
    return prices
}
console.log(getTripsPrice(parseTrips(tripsToParse)))

function checkCompatibility(tripA, tripB){
    if (tripA['start'] + tripA['duration'] < tripB['start']){
        return true
    }
    else return false
}
console.log(checkCompatibility({'client': 'Roger', 'start': 0, 'duration': 5, 'price': 10}, {'client': 'Pongo', 'start': 6, 'duration': 7, 'price': 14}) )

function findCompatibilities(trips){
    let compatibilities = []
    for (let i = 0; i<trips.length; i++){
        for (let j = 1; j<trips.length; j++){
            if (checkCompatibility(trips[i], trips[j]) === true){
                compatibilities.push([trips[i], trips[j]])
            }
        }
}
    return compatibilities
}
console.log(findCompatibilities(parseTrips(tripsToParse)))

const findBestPrice = (trips) => {
    let list = findCompatibilities(parseTrips(trips))
    let result = []
    let prices = []
    for (let i in list){
         prices.push(getTripsPrice(list[i]))
    }
    for (let i in list){
        if (getTripsPrice(list[i]) === Math.max(...prices)) {
            for (let j in list[i]){
                result.push(list[i][j].client)
                }
            }
    }
    console.log(prices)
    console.log(result)
    return 'The best combinaison is : ' + result[0] + ' and ' + result[1]
}
console.log(findBestPrice(tripsToParse))


  