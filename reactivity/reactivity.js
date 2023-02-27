// Test reactivity of 20 websites :

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let before_loadtime = new Date().getTime();

const uploadTime = (url) => {
    const reqListener = () => {
        let aftr_loadtime = new Date().getTime();  
        let pgloadtime = (aftr_loadtime - before_loadtime) / 1000
        console.log('connection to : ' + url + ' done in : ' + pgloadtime + 'seconds');
      }
    
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET", url);
    req.send();
}

uploadTime("https://www.youtube.com")
uploadTime("https://www.facebook.com")
uploadTime("https://www.lequipe.fr")
uploadTime("https://twitter.com/?lang=fr")
uploadTime("https://stackoverflow.com/")
uploadTime("https://www.lovelace.adatechschool.fr/portal/")
uploadTime("https://www.lemonde.fr/")
uploadTime("https://www.napta.io/")
uploadTime("https://www.blablacar.fr/")
uploadTime("https://www.deezer.com/fr/")
uploadTime("https://www.spotify.com/fr/")
uploadTime("https://sherpas.com/")
uploadTime("https://www.doctolib.fr/")