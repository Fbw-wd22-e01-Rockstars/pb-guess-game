const prompt = require("prompt-sync")({sigint:true});

//generate random number in between 1-10
const randomNumber = Math.ceil(Math.random()*10) // 1-10


//get user input through terminal using prompt
const guessNumber = +prompt("please guess any number in between 1 - 10 :  ");

if(guessNumber>10 || guessNumber<1){
    console.log("please enter valid number in between 1 - 10 only")
}else if(randomNumber === guessNumber){
    console.log("You won !")
}else{
    console.log(`please try again ! , right number was ${randomNumber}` )
} 


