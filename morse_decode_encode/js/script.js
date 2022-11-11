const latinToMorse = {
    'A':'.-',
    'B':'-...',
    'C':'-.-.',
    'D':'-..',
    'E':'.',
    'F':'..-.',
    'G':'--.',
    'H':'....',
    'I':'..',
    'J':'.---',
    'K':'-.-',
    'L':'.-..',
    'M':'--',
    'N':'-.',
    'O':'---',
    'P':'.--.',
    'Q':'--.-',
    'R':'.-.',
    'S':'...',
    'T':'-',
    'U':'..-',
    'V':'...-',
    'W':'.--',
    'X':'-..-',
    'Y':'-.--',
    'Z':'--..',
    '/': ' '
  }

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H",
    ' ': "/"
  }

console.log(morseToLatin)
console.log(latinToMorse)

function getLatinCharacterList(text){
    
    let array =[]
    array = text.split('')
    return array
}
console.log(getLatinCharacterList("Hello world!"))

function getMorseCharacterList(sign){
    
    let array =[]
    
    array.push(sign)
    result = array.join(' ').split(' ')
    return result
}
console.log(getMorseCharacterList(".... ..- --. ---"))

function translateLatinCharacter(latin){
    
    for (let i in latinToMorse){ 
        if (i == latin){
            return latinToMorse[i]
        }
  }
}
console.log(translateLatinCharacter('A'))

function translateMorseCharacter(morse){
    
    for (let i in morseToLatin){
        if (i == morse){
            return morseToLatin[i]
        }
    }
}
console.log(translateMorseCharacter("...."))

function encode(text){
    
    let lat = getLatinCharacterList(text.toUpperCase())
    let morse = []
    
    for (i in lat){
    morse.push(translateLatinCharacter(lat[i]))
    }
    
    morse = morse.join(' ')
    text = document.getElementById('text').innerHTML
    document.getElementById('result').innerHTML = morse
} 
//console.log(encode('Hugo est gentil'))
//console.log(encode('hugo est gentil'))

function decode(text){
    
    let lat = ""
    let morse = getMorseCharacterList(text) 

    for (i in morse){
        lat += translateMorseCharacter(morse[i])
    }
    
    lat = lat.toLowerCase()
    text = document.getElementById('text').innerHTML
    document.getElementById('result').innerHTML = lat
}

//decode(".... ..- --. ---")
//encode("Hugo est gentil")

