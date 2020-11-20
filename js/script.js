document.addEventListener("DOMContentLoaded", function (event) {
//Le jeu

    class Jeu {
        //Définit toutes les caractéristiques du jeu
        //Lorsqu'on crée une nouvelle classe, la fonction contructor permet d'initialiser des variables
        //ici on dit au constructor qu'il va recevoir 2 paramètres
        constructor(_idSvg, _idPointage) {
            //ces paramètres existent seulement le temps de la fonction dans laquelle ils sont passées
            console.log("Création du jeu");
            //fonctionnalité de snap svg
            this.s = Snap(_idSvg);
            this.sortiePointage = document.querySelector(_idPointage);
            this.grandeurCarre = 20;
            this.grandeurGrille = 15;


        }

        //3 fonctions importantes pour la création du jeu
        nouvellePartie() {
            //faire les nouvelles parties
            this.afficherPointage(1);
            this.pomme=new Pomme();
            this.serpent= new Serpent();

        }

        finPartie() {

        }
        //Ici, on lui passe un chiffre pour afficher le pointage et on le met dans le span du html
        afficherPointage(_lePointage) {
            this.sortiePointage.innerHTML=_lePointage;

        }
    }


    //Le serpent
    class Serpent {
        constructor() {
            console.log("Création du serpent")


        }
    }

    //La pomme
    class Pomme {
        constructor() {
            console.log("Création de la pomme")
        }
    }

    //création d'une nouvelle partie
    var unePartie = new Jeu("#jeu", "#pointage");
    //ici, on appelle le constructor
});