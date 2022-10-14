function askName(){

    var name = prompt("What is your name?")

    if (name === "") {
        document.getElementById("answer").innerHTML =
            "I didn't catch it, please try again";
    }

    else if (name) {
        document.getElementById("answer").innerHTML =
            "👋 Hey " + name;
    }

    else {
        document.getElementById("answer").innerHTML =
        ""
    }
}

function askAge(){
    
    var birth = prompt("What year were you born?")
    console.log(birth)

    var year = new Date().getFullYear()
    console.log(year)

    var age = year - birth
    console.log(age)

    var month = prompt("Thanks, which month was it?")
    console.log(month)

    var day = prompt("Can you tell me the day?")
    console.log(day)

    if (month == "january") {
        var month = 1
    }
    else if (month == "february") {
        var month = 2
    }
    else if (month == "march") {
        var month = 3
    }
    else if (month == "april") {
        var month = 4
    }
    else if (month == "may") {
        var month = 5
    }
    else if (month == "june") {
        var month = 6
    }
    else if (month == "july") {
        var month = 7
    }
    else if (month == "august") {
        var month = 8
    }
    else if (month == "september") {
        var month = 9
    }
    else if (month == "october") {
        var month = 10
    }
    else if (month == "november") {
        var month = 11
    }
    else if (month == "december") {
        var month = 12
    }
    else {
        document.getElementById("answer2").innerHTML = "There is a typo in the month you have written, please try again"
    }
    
    console.log(month)
    
    var currentmonth = new Date().getMonth()
    console.log(currentmonth)

    currentmonth += + 1
    console.log(currentmonth)

    var currentday = new Date().getDate()
    console.log(currentday)

    var lowage = age - 1

            if (month < currentmonth) {
                document.getElementById("answer2").innerHTML =
                    "You are " + age + " years old 😇";
                    }
                
                    if (month > currentmonth) {
                    document.getElementById("answer2").innerHTML =
                    "Your are " + lowage + " years old 😇";
                    }

                    if (month == currentmonth) {
                        if (day < currentday) {
                            document.getElementById("answer2").innerHTML =
                    "You just turned " + age + " 😇";
                        }
                        if (day == currentday) {
                            document.getElementById("answer2").innerHTML =
                    "🎉 HAPPY BIRTHDAY You are " + age + " years old 😇";
                        }

                        if (day > currentday) {
                            document.getElementById("answer2").innerHTML =
                    "It's your birthday soon ! Your are " + lowage + " years old 😇";
                        }

                    }

 }