const bouton_pierre = document.getElementById('Pierre')
const bouton_feuille = document.getElementById('Feuille')
const bouton_ciseaux = document.getElementById('Ciseaux')

const zoneResultat = document.getElementById('resultat')
const zoneChoixJoueur = document.getElementById('VotreChoix')
const zoneChoixBot = document.getElementById('ChoixBot')
const zoneScore = document.getElementById('scoreAffiche')

const choix = ['Pierre','Feuille','Ciseaux']
const score = {win : 0, draw : 0, lose : 0}

bouton_pierre.addEventListener('click', () => jouer('Pierre'));
bouton_feuille.addEventListener('click', () => jouer('Feuille'));
bouton_ciseaux.addEventListener('click', () => jouer('Ciseaux'));

function jouer(choix_joueur) {
    var choix_bot = choix[Math.floor(Math.random() * 3)]
    if (choix_joueur === choix_bot) {
        score.draw++
        zoneResultat.textContent = 'Égalité !'
        zoneChoixJoueur.textContent = 'Votre choix: ' + choix_joueur 
        zoneChoixBot.textContent = 'Choix du bot: ' + choix_bot 
    }
    else if (
        (choix_joueur === 'Pierre' && choix_bot === 'Ciseaux') ||
        (choix_joueur === 'Feuille' && choix_bot === 'Pierre') ||
        (choix_joueur === 'Ciseaux' && choix_bot === 'Feuille')
    ) {
        score.win++
        zoneResultat.textContent = 'Tu as gagné !'
        zoneChoixJoueur.textContent = 'Votre choix: ' + choix_joueur 
        zoneChoixBot.textContent = 'Choix du bot: ' + choix_bot 
    }
    else {
        score.lose++
        zoneResultat.textContent = 'Tu as perdu !'
        zoneChoixJoueur.textContent = 'Votre choix: ' + choix_joueur 
        zoneChoixBot.textContent = 'Choix du bot: ' + choix_bot 
    }
    zoneScore.textContent = 'Win: ' + score.win + ' | Draw: ' + score.draw + ' | Lose: ' + score.lose
    console.log(score)
    console.log('Le joueur a joué ' + choix_joueur)
    console.log('Le bot a joué ' + choix_bot)
}





//extention : lighthouse / wave accessibility 
//minifier