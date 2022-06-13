// Assignment code here
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCase = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters= ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
var choiceArray = [];


// stuck
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  

    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
  
}
 



function generatePassword() {
  console.log("button clicked")
  var password= "";
  for(var i = o; i<passwordLength; i++) {
    var randomLetter = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomLetter];
  }
  return password;
  

  // 2. validate the input
  
  // 3. generate password
  
  // 4. display password
  return "generated password"
}

// 1. prompt user for the user criteria

  //    a. prompt user for password length at least 8 no more than 128 characters

 

  //    b. prompt user for upper or lower case, numeric, special characters
var getCriteria = function() {
  choiceArray = [];
  var passwordLength = window.prompt("Between 8 and 128, how many characters do you want your password to be?");
  var passwordLength = parseInt(passwordLength)
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength >128) {
    window.alert("Please use a number between 8 and 128.");
    return getCriteria();
  }
  
  var lowerCaseQuery = window.confirm("Would you like to use lowercase letter in your password?");
    if (lowerCaseQuery) {
      choiceArray.push(lowerCase);
    }
    
  
  var upperCaseQuery = window.confirm("Would you like to use uppercase letter in your password?");
    if (upperCaseQuery) {
      choiceArray = choiceArray.concat(upperCase);
    }
  
  var numbersQuery = window.confirm("Would you like to use numbers in your password?");
    if (numbersQuery) {
      choiceArray= choiceArray.concat(numbers);
    }

  var specialCharactersQuery = window.confirm("Would you like to use special characters in your password?");
    if (specialCharactersQuery) {
      choiceArray= choiceArray.concat(specialCharacters);
    }
}
getCriteria();

