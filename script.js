// Assignment code here
// Here are my password variables
// These are the available special characters " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

const numbers = [1,2,3,4,5,6,7,8,9,0];
const symbols = ["!","#","$","%","&","'","(",".",",",";"];
const characterCodes = Array.from(Array(26)).map( (_, i) => i + 97);
const lowercaseLetters = characterCodes.map(code =>String.fromCharCode(code));
const uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase())


function generatePassword(length, hasNumbers, hasSymbols, hasLowercase, hasUppercase){
  //  
  const availableCharacters = [
    ...(hasLowercase ? lowercaseLetters : []),
    ...(hasUppercase ? uppercaseLetters : []),
    ...(hasNumbers ? numbers : []),
    ...(hasSymbols ? symbols : [])
    ];
    let password = "";
    if(availableCharacters.length === 0) return "";
    for(let i = 0; i < length; i++){
      const randomIndex = Math.floor(Math.random() * availableCharacters.length);
      password += availableCharacters[randomIndex];
    }
    return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // this is the prompt for user input on password preference

  var length = Number(window.prompt("Select Password length"))
  if (length >= 8 && length <= 128 ){
  }else{
      return window.alert ("Try again choose a number between 8-128!");
  }
  
  var numbers = window.confirm(`Will Password contain numbers? Select "Ok" for yes/Cancel for "No`)

  var symbols = window.confirm(`Will Password contain symbols? Select "Ok" for yes/Cancel for "No`)

  var lowercase = window.confirm(`Will Password contain lowercase letters? Select "Ok" for yes/Cancel for "No`)

  var uppercase = window.confirm(`Will Password contain uppercase letters? Select "Ok" for yes/Cancel for "No`)

  
  var password = generatePassword(length,numbers,symbols,lowercase,uppercase);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// user will receive a series of prompts for password criteria

// user will choose criteria for password through prompts

// user will be promted for length of password

// user password must be within 8 to 128 characters

// user will be promted for character types to be included in password

// user will confirm whether or not to 
// include lowercase, uppercase, numeric, and/or special characters



