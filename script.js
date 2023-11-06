//Saisis utilisateur
let choixUtilisateur = 'Rock';
//fonction qui récupère le choix de l'utilisateur et le passe en minuscule
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase(); //prévoir de passer par un appel de fonction pour lower la saisis user

    //Verification de la saisis de l'utilisateur
    if(userInput === 'rock'){
        return userInput;
    }else if(userInput === 'paper'){
        return userInput;
    }else if(userInput === 'scissors'){
        return userInput;
    }else if(userInput === 'bomb'){
        return userInput
    }else{
        return 'User input error';
    };
};
// console.log(getUserChoice('rOck'));

//fonction choix de l'ordinateur
const getComputerChoice = () => {
    //Génération d'un nombre aléatoire entre 0 et 2
    let numberChoice = Math.floor(Math.random() * 3);
    //Gestion du choix de l'ordinateur selon le nombre généré
    if(numberChoice === 0){
        return 'rock';
    }else if(numberChoice === 1){
        return 'paper';
    }else if(numberChoice === 2){
        return 'scissors'
    }else {
        return 'Error Random Number';
    };
};

// console.log(`Choix de l'ordinateur : ${getComputerChoice()}`);
//fonction qui détermine le gagnant
const determineWinner = (userChoice, computerChoice) => {
    //gestion d'égalité
    if(userChoice === 'bomb'){
        return 'Utilisateur gagne'
    };
    if(userChoice === computerChoice){
        return 'Égalité';
    };
    if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'Ordinateur gagne';
        }else {
            return 'Utilisateur gagne';
        };
    }else if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            return 'Ordinateur gagne';
        }else {
            return 'Utilisateur gagne';
        };
    }else if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return 'Ordinateur gagne';
        }else{
            return 'Utilisateur gagne';
        }
    }else {
        return "Error";
    };
}

//Fonctionne mieux avec un appelle de la bonne fonction et un argument
// console.log(determineWinner(getUserChoice(choixUtilisateur), getComputerChoice()));

//Fonction pour déterminer le vainqueur du la game
const playGame = () => {
    let userChoice = getUserChoice('Bomb');
    let computerChoice = getComputerChoice();
    console.log(`Le choix de l'utilisateur est : ${userChoice}. Le choix de l'ordinateur est : ${computerChoice}`);

   return (determineWinner(userChoice, computerChoice));
}


console.log(playGame());