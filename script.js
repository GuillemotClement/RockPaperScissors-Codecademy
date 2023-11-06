let userInput = 'sCissors';
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

console.log(getUserChoice(userInput));


