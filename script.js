// Assignment code here
var number="1234567890"
var symbols="!@#$%^&*()"
var lowercase="abcdefghijklmnopqrstuvwxyz"
var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var characteroptions=""
var passwordresults=""

function generatePassword(){
  var passwordlengths = prompt("How many characters do you want in your password?")
  if (passwordlengths < 8 || passwordlengths > 128 || isNaN(passwordlengths)){
    alert("Value must be a number greater than 8 and less than 128")
  }
  var charactertypenumber = confirm("Would you like numbers in your password?")
  var charactertypesymbol = confirm("Would you like symbols in your password?")
  var charactertypelowercase = confirm("Would you like lowercase letters in your password?")
  var charactertypeuppercase = confirm("Would you like uppercase letters in your password?")
  console.log(charactertypenumber,charactertypesymbol,charactertypelowercase,charactertypeuppercase,passwordlengths)
  if (charactertypenumber===true){
    characteroptions += number
  }
  if (charactertypesymbol===true){
    characteroptions += symbols
  }
  if (charactertypelowercase===true){
    characteroptions += lowercase
  }
  if (charactertypeuppercase===true){
    characteroptions += uppercase
  }
  if (charactertypenumber===false&&charactertypesymbol===false&&charactertypelowercase===false&&charactertypeuppercase===false){
    alert("Pick at least one option")
  }
  console.log(characteroptions)
  for(var i=0;i<passwordlengths;i++){
     var randomizecharacters=Math.floor(Math.random()*characteroptions.length)
     passwordresults+=characteroptions.charAt(randomizecharacters)
   }
  console.log("Your password will be",passwordresults)
 return passwordresults;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword()//generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
