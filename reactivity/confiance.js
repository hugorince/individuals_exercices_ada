const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const quotes = require('./quotes.json');
// console.log(quotes.quotes)

const dailyQuote = () => {
   return new Promise((resolve, reject) => { 
    resolve(
        fetch('https://www.affirmations.dev/')
            .then(res => res.json())
            .then(quote => {
                if (quote){
                    console.log(JSON.stringify(quote.affirmation))
                }
                }))
    reject('error fetching')
})
}



const addQuote = (name, quote) => {
    let fs = require('fs');
    quotes.quotes.push({[name]: quote});
    let json = JSON.stringify(quotes);
    fs.writeFile('quotes.json', json, 'utf8', (err) => {
        if (err)
        console.log(err);
        else {
        console.log("File written successfully\n");
        }
    });
}

const showDown = async () => {
    dailyQuote().then(() => {addQuote('hugoli', 'coucooli')}, () => {console.log('not good')})
}

showDown()



