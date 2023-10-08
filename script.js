"use strict" ;


// Crée un objet représentant le tueur Jason
// On fait un const car on aura pas besoin de le modifier (sauf contenu)
const jason = {
  nom: "Jason",
  PV: 100,
};


//On l'annonce directement dans la console
console.log(`${jason.nom} a ${jason.PV} points de vie.`); 
//On peut également faire un document write pour l'afficher sur la page :
//document.write(`${jason.nom} a ${jason.PV} points de vie.`);
//Mais tout le texte tappé en document write va être à la suite, sans espace/passage à la ligne
//Je marquerai donc plutôt le message de fin sur l'écran 


// Fonction aléatoire
function getRandomInt(min, max) {
  min = Math.ceil(min);  // On rajoute un module minimum
  max = Math.floor(max); // On rajoute un module maximum
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// TEST pour générer un nombre entre 1 et 10 (inclus)
const testrandom = getRandomInt(1, 10); // on test l'aléatoire une fois (sans réassigner plus tard)
console.log(`TEST : ${testrandom}`); // On montre la valeur dans la console



// Fonction pour obtenir un prénom aléatoire
function getRandomPrenom() {
  const randomIndex = getRandomInt(0, nom.length - 1);
  return nom[randomIndex];
}

// --------------------------------------------------------
// Tableau
let nom=["Michel","Michelle","Michouille","Michel-Ange","Michwinggum","Mickael","Michelicoptère","MichelAvecUnE","Michenough","Michbis"];
console.log(nom); //Donne la liste des valeurs
console.log(nom.length); //Dit le nombre de valeurs dans le tableau

const randomValeur = getRandomInt(0, nom.length - 1); // Génère une valeur aléatoire valide du tableau.
const randomName = nom[randomValeur]; // On accède au nom généré.

console.log(`TEST Nom aléatoire du tableau : ${randomName}`);


// On crée une fonction qui génère un tableau de noms aléatoires sans doublons.
function getRandomUniqueNamesFromArray(array, count) {
  // Vérifie si le nombre demandé est supérieur à la taille du tableau.
  if (count > array.length) {
    throw new Error("Le nombre demandé est supérieur à la taille du tableau."); // Exception dans le code, au cas où.
  }

  const randomNames = []; // On crée un tableau pour stocker les noms aléatoires qu'on va générer.
  const copyArray = array.slice(); // Crée une copie du tableau d'origine pour éviter de modifier l'original.

  while (randomNames.length < count) { // Boucle qui génère tant qu'on en a pas assez
    const randomValeur = getRandomInt(0, copyArray.length - 1); // Génère une valeur aléatoire dans la copie.
    const randomName = copyArray.splice(randomValeur, 1)[0]; // Retire l'élément sélectionné de la copie et le stocke dans randomName.
    randomNames.push(randomName); // Ajoute le nom aléatoire au tableau.
  }

  return randomNames; // Renvoie le tableau contenant les noms aléatoires sans doublons.
}


const randomNames = getRandomUniqueNamesFromArray(nom, 5); // Appelle la fonction avec votre tableau `nom` et demande 5 noms aléatoires.
console.log("Voici les 5 survivants qui affronteront notre tueur : ", randomNames); // Affiche les noms aléatoires.


// On crée la classe "personnage", afin de créer plusieurs .
class Personnage {
  // On attribue au personnage des caractéristiques
  constructor(nom, probadeath, probadegats, probavengeance) {
    this.nom = nom; // Comment il va s'appeler
    this.probadeath = probadeath; // Probabilité de mourir
    this.probadegats = probadegats; // Probabilité de mettre des dégats
    this.probavengeance = probavengeance; // Probabilité de mettre des dégats si il meurt
  }
}


// --------------------------------------------------------
let Blonde = new Personnage(randomNames[0], 0.3, 0.4, 0.3, "Blonde");
// On crée le personnage Blonde, on lui attribue ses caractéristiques.
let Barde = new Personnage(randomNames[1], 0.2, 0.2, 0.6, "Barde");
// On crée le personnage Barde, on lui attribue ses caractéristiques.
let Ange = new Personnage(randomNames[2], 0.1, 0.5, 0.4, "Ange");
// On crée le personnage Ange, on lui attribue ses caractéristiques.
let Sorceleur = new Personnage(randomNames[3], 0.4, 0.3, 0.3, "Sorceleur");
// On crée le personnage Sorceleur, on lui attribue ses caractéristiques.
let ProGamer = new Personnage(randomNames[4], 0.2, 0.3, 0.5, "Pro Gamer");
// On crée le personnage ProGamer, on lui attribue ses caractéristiques.


// Afficher les noms et les classes des personnages dans la console
console.log(`Nom: ${Blonde.nom}, Classe: Blonde`);
console.log(`Nom: ${Barde.nom}, Classe: Barde`);
console.log(`Nom: ${Ange.nom}, Classe: Ange`);
console.log(`Nom: ${Sorceleur.nom}, Classe: Sorceleur`);
console.log(`Nom: ${ProGamer.nom}, Classe: ProGamer`);


// On stock les survivants dans un tableau
const survivants = [Blonde, Barde, Ange, Sorceleur, ProGamer];
// On supprimera les valeurs une par une du tableau pour continuer la partie, jusqu'à ce qu'il n'y en ai plus


// --------------------------------------------------------
// On crée un déroulement de tours dans une boucle while :
while (jason.PV > 0 && survivants.length > 0) {
  // Sélectionne un survivant aléatoire
  const survivantnumrandom = getRandomInt(0, survivants.length - 1); // -1 car un tableau commence en 0
  const persorandom = survivants[survivantnumrandom];
  // la variable persorandom ne stocke qu'un seul survivant, tandis que survivants est un tableau

  // Probabilité que le survivant meurt
  if (Math.random() < persorandom.probadeath) {
    console.log(`${jason.nom} attaque ${persorandom.nom}, il s'effondre sous la violence de la pichenette !`);
    survivants.splice(survivantnumrandom, 1); // Supprime le survivant décédé du tableau
    // numero pour la place dans le tableau, 1 pour le nombre d'élément à supprimer (lui-même)
  } else {
    // Le survivant a survécu à l'attaque
    if (Math.random() < persorandom.probavengeance) {
      // Le survivant inflige des dégâts à Jason en mourant
      console.log(`${persorandom.nom} attaque ${jason.nom} et inflige 15 points de dégâts mais meurt en tentant de s'enfuir !`);
      jason.PV -= 15;
    } else {
      // Le survivant inflige 10 points de dégâts à Jason
      console.log(`${persorandom.nom} attaque ${jason.nom} et inflige 10 points de dégâts.`);
      jason.PV -= 10;
    }
  }
  // Afficher les PV restants
  console.log(`${jason.nom} a maintenant ${jason.PV} points de vie restants.`);
}


// --------------------------------------------------------
// Condition de Victoire ou Défaite :
if (jason.PV <= 0) {
  console.log(`Le redoutable ${jason.nom} est enfin mort, il ne sèmera plus la terreur dans le village de Thiercelieux !`);
  console.log(`Partie Terminée`);
  document.write(`Le redoutable ${jason.nom} est enfin mort, il ne sèmera plus la terreur dans le village de Thiercelieux !`);
} else {
  console.log(`Les survivants de la famille Michel ont été tous éliminés par ${jason.nom}, le pauvre va se retrouver seul !`);
  console.log(`Partie Terminée`);
  document.write(`Les survivants de la famille Michel ont été tous éliminés par ${jason.nom}, le pauvre va se retrouver seul !`);
}
