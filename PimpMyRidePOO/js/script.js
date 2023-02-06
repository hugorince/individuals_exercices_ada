let tripsToParse = [
	"Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7"
]

class Trip {

    constructor(name, start, duration, price) {
        let _name = name
        this.setName = (name) => {_name = name}
        this.getName = () => {return _name}

        let _start = start
        this.setStart = (start) => {_start = start}
        this.getStart = () => {return _start}


        let _duration = duration
        this.setDuration = (duration) => {_duration = duration}
        this.getDuration = () => {return _duration}


        let _price = price
        this.setPrice = (price) => {_price = price}
        this.getPrice = () => {return _price}

        let total = start + duration
        let _end = total
        this.setEnd = (total) => {_end = total}
        this.getEnd = () => {return _end}
    };
    isCompatible(trip){
        if (this.getEnd() < trip.getStart()) {
            return true
        } else {
            return false
        }
    };
    
};

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

trip1.setName('hugogo')
console.log(trip1.getName())


function findCompatibilities(trips){
    let compatibilities = []
    for (let i in trips){
        for (let j in trips){
            if (trips[i].isCompatible(trips[j])){
                compatibilities.push(trips[i], trips[j])
            }
        }
    }
    let result = []
    for (let i in compatibilities){
        result.push(compatibilities[i].getName())
    } 
    return result
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


  