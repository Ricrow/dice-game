#construction index.html:
  #	-utilisation du même graphique que sur le pdf de l'énoncé.
  #	-ajout des ID en conséquence.
  #	-utilisation de https://use.fontawesome.com pour les différents icons
  #	-utilisation du même site pour la construction du dé.
  #	-(modification) ajout des dés via img en source png.

#construction style.css:
  #	-ajout des différentes classes à activer via JS pour dynamiser le visuel si besoin.
  #	-Styliser le site.

#construction scrip.js: 
  #	-Fonction de dé aléatoire. 
  #	-Fonction d'initialisation.
  #	-Ajout d'un bool permettant d'activer le jeu.
  #	-Utilisation des boutons pour animer les scores et le changements des icones dés.
  #	-Fonction de changement de joueur tout en gardant les stats donc jouer sur un ou plusieurs tableaux de score.
  #	-(modification) changement de dés via image. Code plus légé.

#Au début, je n'ai pas utilisé d'image mais des icones de dés et j'ai utilisé la fonction ci dessous pour changer le visuel du dés:

  function diceImageDisplay(number) {
    switch (number) {
      case 1:
        return 'fa-dice-one';
      case 2:
        return 'fa-dice-two';
      case 3:
        return 'fa-dice-three';
      case 4:
        return 'fa-dice-four';
      case 5:
        return 'fa-dice-five';
      case 6:
        return 'fa-dice-six';
    };
  };

  roll.addEventListener('click', () => {
    if (gameActive) {
      let dice = randomDiceNumber();
      diceImage.classList.replace(diceImage.classList[1], diceImageDisplay(dice));
      if (dice !== 1) {
        currentScore += dice;
        document.getElementById(`current-score${activePlayer}`).innerText = currentScore;
      } else {
        document.getElementById(`player${activePlayer}`).classList.remove('active');
        switchPlayer();
      }
    }
  });

#La ligne html qui contenait le dé icone:

  <div class="dice-box"><i id="dice" class="fas fa-dice-one"></i></div>