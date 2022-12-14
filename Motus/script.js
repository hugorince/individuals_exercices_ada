function tryWord(word, base) {

    if (word === base) {
		return true
    } 
    
    else {

        let wellPlaced = [];
        let notInWord = [];
        let missPlaced = [];
        let arrayBase = base.split('');
        let arrayWord = word.split('');
        
        for (let i = 0; i < arrayBase.length-1; i++) {
            if (arrayBase[i] === arrayWord[i]) {
                wellPlaced.push(arrayWord[i]);
                }
            if (arrayBase.includes(arrayWord[i]) && arrayBase[i] != arrayWord[i]){
                missPlaced.push(arrayWord[i])
            }	
        }
        
        for (const char of arrayWord) {
            if (arrayBase.includes(char) === false) {
                notInWord.push(char)
            }
           
        }
        return { wellPlaced: wellPlaced, missPlaced: missPlaced, notInWord: notInWord }
  }
}

function guess() {
	let base = 'coucou'
	let word = document.getElementById("word").value
	let result = tryWord(word, base)
    
    if (result === true) {
        document.getElementById("win").innerText = 'Vous avez gagné'
      }
    else {
        // document.getElementById("word").value = ''
        document.getElementById("try").innerText = word
        document.getElementById("well").innerText = 'Bien placé: '+ result.wellPlaced.join(', ')
        document.getElementById("miss").innerText = 'Mal placé: '+ result.missPlaced.join(', ')
        document.getElementById("not").innerText = 'Pas dans le mot: '+ result.notInWord.join(', ')
    }
}

console.log(tryWord('hugo', 'julia'))

const sentence = 'hello world'

module.exports = {
    tryWord
}

