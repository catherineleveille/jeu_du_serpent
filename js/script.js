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
            this.finPartie();

            //faire les nouvelles parties avec un pointage de 1
            this.afficherPointage(1);

            //on passe à la pomme la référence au jeu
            this.pomme = new Pomme(this);
            this.serpent = new Serpent(this);

        }

        finPartie() {
            //ici on met une condition lorsque la partie commence
            if (this.pomme !== undefined) {
                this.pomme.supprimePomme();
                this.pomme = undefined;
            }
        }

        //Ici, on lui passe un chiffre pour afficher le pointage et on le met dans le span du html
        afficherPointage(_lePointage) {
            this.sortiePointage.innerHTML = _lePointage;

        }
    }


    //Le serpent
    class Serpent {
        constructor(_leJeu) {
            console.log("Création du serpent");

            //on garde le jeu en mémoire
            this.leJeu = _leJeu;

            //ici, on appelle les touches du clavier
            document.addEventListener("keydown", this.verifTouche);

            //
            this.nextMoveX = 1;
            this.nextMoveY = 0;
        }

        //lorsque la touche est enfoncée, qu'est ce qui se passe
        verifTouche(_evt) {

            var evt = _evt;

            console.log(evt.keyCode);

            this.deplacement(evt.keyCode);
        }

        //comment le serpent se déplace
        deplacement(dirCode) {
            switch (dirCode) {
                case 37:
                    this.nextMoveX = -1;
                    this.nextMoveY = 0;
                    break;
                case 38:
                    this.nextMoveX = 0;
                    this.nextMoveY = -1;
                    break
                case 39:
                    this.nextMoveX = 1;
                    this.nextMoveY = 0;
                    break
                case 40:
                    this.nextMoveX = 0;
                    this.nextMoveY = 1;
                    break;
            }

        }

        //si le serpent touche à qqchose
        controleSerpent() {

        }

        //dessiner le serpent(en carré)
        dessineCarre(x, y) {

        }

        //lorsqu'on perd, supprimer le serpent en entier
        supprimeSerpent() {

        }
    }

    //La pomme
    class Pomme {
        constructor(_leJeu) {
            console.log("Création de la pomme")

            //garde en mémoire cette propriété
            this.leJeu = _leJeu;

            //référence a la pomme dans le tableau
            this.pomme = [];
            this.ajoutePomme();
        }

        ajoutePomme() {
            //Ici, on ajoute la pomme dans la supérficie donnée du jeu
            //Math.floor= arrondissement vers le bas des chiffres pour ne pas avoir de décimales
            var posX = Math.floor(Math.random() * this.leJeu.grandeurGrille);
            var posY = Math.floor(Math.random() * this.leJeu.grandeurGrille);


            //ici, on passe en paramètres les grandeurs du carrés, on met un nouveau tableau
            this.pomme = [this.leJeu.s.rect(posX * this.leJeu.grandeurCarre, posY * this.leJeu.grandeurCarre, this.leJeu.grandeurCarre, this.leJeu.grandeurCarre).attr({fill: "red"}), posX, posY];


        }

        supprimePomme() {
            //ici la pomme est supprimé (on l'enlève du tableau)
            this.pomme[0].remove();

        }
    }

    //création d'une nouvelle partie
    //ici, on appelle le constructor
    var unePartie = new Jeu("#jeu", "#pointage");

    //récupération du bouton dans le html
    var btnJouer = document.querySelector("#btnJouer");

    //on ajoute au bouton un évènement permettant de cliquer dessus
    btnJouer.addEventListener('click', nouvellePartie);

    //référence au jeu
    function nouvellePartie() {
        unePartie.nouvellePartie();

    }
});