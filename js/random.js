/**** functions ****/

function writeTextToPage(textToWrite) {
  document.getElementById("outputElement").innerHTML = textToWrite;
}

function fill_firstNumber_secondNumber_globalScope_variables() {
  //repeating forver, if not broken otherwise
  
  while (true) {
    //prompting user, splitting an answer by " " and storing the result to an array of strings
    
    var tempListStringNumbers = prompt("Type two integers divided by \"_\" representing an interval [firstNumber,secondNumber]:").split("_");
    
    //checking for only typing one value, not necessarly an integer, as it was asked in prompt
    
    if (tempListStringNumbers.length === 1) {
      alert("Wrong input, you have only typed one value.");
      continue; //starts a new cycle
    }
    
    //getting the integer out of correctly formed array of strings
    
    firstNumber = parseInt(tempListStringNumbers[0]); //accesing the global scope
    secondNumber = parseInt(tempListStringNumbers[1]); //accesing the global scope
    
    //checking if two integers are written
    
    if ( !isNaN(firstNumber) && !isNaN(secondNumber) ) { //accesing the global scope
      break; //exists the loop forever
    } else {
      alert("Wrong input, you need to type two integers.");
      continue; //starts a new cycle
    }   
  }
}

function generateRandomNumber(firstNumber,secondNumber) {
  //intuitive formula for generating a random number from interval [firstNumber,secondNumber]
  
  return firstNumber + Math.round( Math.random() * (secondNumber-firstNumber) );
}

function giveUserThreeAttemptsAtGuessingTheRandomNumber(randomNumber) {
  //monitoring tries varibales
  
  var tryNumber = 0
  var maxTries = 3;
  
  //user guess variable
  
  var usersGuess;
  
  //incrementing the "tryNumber" and then comparing it to "maxTries"
  
  while (++tryNumber <= maxTries) {
    //storing an user guess as int or NaN, wrong input is still wrong answer
    
    usersGuess = parseInt( prompt("[Try #" + tryNumber + "] Try to guess the integer in the interval [" + firstNumber + "," + secondNumber + "]:") );
    
    //telling user has he guessed the number, if not, is the number lower or higher than his guess
    
    if (randomNumber === usersGuess) {
      writeTextToPage("You have guessed the number right! The number was " + randomNumber + ".");
      return; //exits the function, returning nothing
    } else if (randomNumber > usersGuess) {
      alert("Wrong answer, the number is larger than " + usersGuess + ".");
    } else {
      alert("Wrong answer, the number is lower than " + usersGuess + ".");
    }
  }
  
  //if "return;" was never executed, this will
  
  writeTextToPage("No more tries left! The number was " + randomNumber + ".");
}

/**** main program ****/

//creating "firstNumber" and "secondNumber" variable at "global scope"

var firstNumber, secondNumber;

//using a function to fill the variables from a "global scope"

fill_firstNumber_secondNumber_globalScope_variables();

//passing a generated random number to a function that gives user three attempts to guess it

giveUserThreeAttemptsAtGuessingTheRandomNumber( generateRandomNumber(firstNumber,secondNumber) );