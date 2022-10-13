function ask(){

    var name = prompt("Quel est votre nom?")

    document.getElementById("answer").innerHTML =
            "👋 Bonjour " + name;
   
}

function age(){
    
    var birth = prompt("Quelle est ton année de naissance?")
    console.log(birth)

    var year = new Date().getFullYear()
    console.log(year)

    var age = year - birth
    console.log(age)

    var month = prompt("Merci, quel est le numéro de ton mois de naissance svp?")
    console.log(month)

    var currentmonth = new Date().getMonth()
    console.log(currentmonth)

    var lowage = age - 1

    if (month <= currentmonth) {
        document.getElementById("answer2").innerHTML =
            "Tu as " + age + " ans 😇";
            }
        else {
            document.getElementById("answer2").innerHTML =
            "Tu as " + lowage + " ans 😇";
        }

}

