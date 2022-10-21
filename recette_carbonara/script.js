let ingredients = ["Pâtes", "Oeuf", "Sel", "Poivre", "Lardon", "Oignon", "Parmesan"]



document.getElementById('phrase').innerHTML = "Le nombre d'ingrédients nécessaires pour cette recette est : " + ingredients.length


listeAffiche = "liste des ingrédients : "


for (let i = 0; i < ingredients.length; i++ ) {
    listeAffiche += '<br>' + (i+1) + " - " + ingredients.sort()[i]
}

document.getElementById('liste').innerHTML = listeAffiche