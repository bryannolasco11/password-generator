// Assignment code here
// Assignment code here
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters= ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
var choiceArray = [];
var answer = "";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//This generates the password
function generatePassword () {
  console.log("Hey!  You clicked the button!");
  passwordType();  // runs my passwordType funtion
  passwordLength(); // runs my passwordLength function
  answer ="";
  for (var i=0; i<characterLength; i++) {
    var randomNumber = Math.floor(Math.random() * choiceArray.length);
    var randomCharacter = choiceArray[randomNumber];
    answer += randomCharacter;

  }
  return answer;
  
  //return "Generated Password will go here";
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; //this is what is displayed on the screen

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// This function makes the types of characters the user chooses
function passwordType(){
  //types of characters
  choiceArray = [];
  var lowerCaseQuery = window.confirm("Press OK if you would like to use lowercase letters in your password?");
   if (lowerCaseQuery) {
     choiceArray = choiceArray.concat(lowerCase);
   }
   
 
   var upperCaseQuery = window.confirm("Press OK if you would you like to use uppercase letter in your password?");
   if (upperCaseQuery) {
     choiceArray = choiceArray.concat(upperCase);
   }
 
   var numbersQuery = window.confirm("Press OK if you would you like to use numbers in your password?");
   if (numbersQuery) {
     choiceArray= choiceArray.concat(numbers);
   }
 
   var specialCharactersQuery = window.confirm("Press OK if you would you like to use special characters in your password?");
   if (specialCharactersQuery) {
     choiceArray= choiceArray.concat(specialCharacters);
   }
   console.log(choiceArray);
   console.log(choiceArray.length);

   if (choiceArray.length == 0) {
     console.log(choiceArray.length);
     
     window.alert("Choosing at least one type of characters would help.");
     passwordType();
   }
   return choiceArray; // returns the array
}
// function for password length
function passwordLength(){
  characterLength = parseInt(prompt("Between 8 and 128, how many characters would you like in your password?"));
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    window.alert("You must pick a number between 8 and 128.");
    passwordLength();
  }

  else if (characterLength >=8 && characterLength <=128)
    window.alert(characterLength + " is a good number.")
  console.log(characterLength);
  return characterLength;  //returns a value
}
