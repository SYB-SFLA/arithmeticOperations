/* Sélection des différents 'id' nécessaires pour la fonction */
const firstBox = document.getElementById("firstBox"); // 1er input
const secondBox = document.getElementById("secondBox"); // 2nd input
const random = document.getElementById("random"); // bouton choix aléatoire
const calculate = document.getElementById("calculate"); // bouton calculer
const clear = document.getElementById("clear"); // bouton nettoyer
const result = document.getElementById("result"); // résultat 

/* Branchement d'un écouteur d'event de type 'clic' sur le bouton de soumission */
calculate.addEventListener('click', () => {
    /* La méthode parseFloat analyse une valeur sous forme de chaîne et renvoie le premier nombre. La meethode Number() est similaire, cad qu'il convertit une valeur en nombre et si la valeur n'est pas convertie, elle renvoie un NaN */
    const first = parseFloat(firstBox.value);
    const second = parseFloat(secondBox.value);


    /* CONDITION - SI une des cases n'est pas renseignée */
    if (!first || !second){
        alert('Recommence ! Il te manque une case à renseigner.');
    /* CONDITION - SINON affichage du résultat */
    } else {
        const addition = first + second;
        result.innerHTML = `Le résultat est égale à ${addition}🍪`;
    }
})

/* Branchement d'un écouteur d'event de type 'mousedown' sur le bouton du choix aléatoire */
random.addEventListener('mousedown', function(){
    /* Affectation à la valeur de chaque boxe une valeur aléatoire entre 0 et 1000, arrondi à l'unite supérieure*/
    firstBox.value = Math.floor(Math.random()*1000)
    secondBox.value = Math.floor(Math.random()*1000);
})


/* Branchement d'un écouteur d'event de type 'clic' sur le bouton de nettoyage */ 
clear.addEventListener('click', function (){
    /* Nettoyage des inputs */
    firstBox.value = '';
    secondBox.value = '';
    /* Nettoyage du résultat */
    result.innerHTML = '';
})
