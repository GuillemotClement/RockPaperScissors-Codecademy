//Saisis utilisateur
let userInput = 'rock';
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
    }else{
        return 'User input error';
    };
};


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


