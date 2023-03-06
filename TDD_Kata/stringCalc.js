const stringAdd = (str) =>  {
    if (str === ''){
        return 0
    }
    let arr = str.split(/,|\n/);
    let result = 0;
    arr.map(num => result += parseInt(num))
    return result
}

module.exports = stringAdd;