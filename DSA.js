// Algorithms and Data Structures

//* Pascal's triangle
for (let i = 1; i <= 6 ; i++) {   // Boucle principale 
    let line = ""; // initialisation de line qui représentera chaque ligne du triangle à afficher. 
    for (let l = 6; l >= i ; l--) { // Ajout d'espaces utilisée pour ajouter des espaces avant chaque ligne de chiffres afin d'aligner le triangle au centre. Le nombre d'espaces diminue à chaque ligne, ce qui crée la forme triangulaire.
        line += " ";
    }
    let k = 1; // le coefficient binomial qui va être calculé pour chaque élément de la ligne. défini à 1 parce que le premier élément de chaque ligne du triangle de Pascal est toujours 1.
    for (let j = 1; j <= i; j++) {
        line += " " + k;
        k = (k * (i-j)) / j;
    }
    console.log(line);
}

// Calcul des coefficients binomiaux : for (let j = 1; j <= i; j++)

// Cette boucle calcule chaque coefficient binomial pour la ligne i.
// Ajout du coefficient à line : line += " " + k;
//   On ajoute chaque coefficient k à la chaîne line, précédé d'un espace pour la lisibilité.
//   Calcul du coefficient suivant : k = (k * (i - j)) / j;
//   Cette formule calcule le coefficient suivant dans le triangle de Pascal en utilisant la relation de récurrence pour les coefficients binomiaux :
//      Coefficientj+1=Coefficientj×(i−j) / j
//      Par exemple, pour passer de 1 à 3 dans la ligne 1 3 3 1 :
//      Le coefficient suivant est calculé en multipliant le coefficient courant par (i - j) et en divisant par j.


//* Fibonacci Series 
const number = parseInt(prompt("Enter the number of terms: "));
let n1 = 0 , n2 = 1 , nextTerm;

console.log("Fibonacci Series : ");

for (let i = 1; i <= number ; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

//* Remove Duplicate Array 
//  Ce code supprime les doublons d'un tableau en conservant uniquement la première occurrence de chaque élément.
let arr = [1, 1, 2, 3, 3, 2];
let result = arr.filter((value, index) => {
    return arr.indexOf(value) == index;
});
console.log(result);

// arr.filter((value, index) => {...}) : filter crée un nouveau tableau avec tous les éléments qui passent le test de la fonction fournie.
// arr.indexOf(value) : Cette méthode renvoie l'indice de la première occurrence de value dans le tableau arr.
// arr.indexOf(value) == index : Cette condition est vraie seulement pour la première occurrence de chaque valeur. Pour chaque occurrence suivante d'une même valeur, arr.indexOf(value) retournera toujours le même indice (celui de la première occurrence), tandis que index sera différent, ce qui exclura cette valeur du tableau filtré.

//* Reverse String 
//  Ce code renverse l'ordre des caractères dans une chaîne de caractères. 
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello world"));

// str.split("") : Divise la chaîne str en un tableau de caractères.
// reverse() : Inverse l'ordre des éléments dans le tableau.
// join("") : Combine les caractères du tableau en une nouvelle chaîne.

//* Odd_Even
//  Ce code vérifie chaque nombre dans un tableau pour déterminer s'il est pair ou impair. 
const arr1 = [1,2,3,4,5,7,8,9,12,89,38,78,96,785,14];
for (let i = 0; i < arr1.length; i++) {
    if (i % 2 == 0) {
        console.log(arr1[i] + " is odd");
    } else {
        console.log(arr1[i] + " is even");
    }
}
