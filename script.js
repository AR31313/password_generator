// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//declared in the global scope and is available to all functions 
  var num = [0,1,2,3,4,5,6,7,8,9];
  var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lower = ["a","b","c","e","d","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var specialChars =["!","@","#","$","%","^","&","*","_","+","~","<",">","?","/"];
  var uselength;
  var userChoice;


//a function named generatePassword
function generatePassword (){
  var uselength = parseInt (prompt ("How many characters would you like?"))
  if (uselength <8 || uselength > 128){
    alert ("Use a passphrase between 8 & 128 Characters.")
    return null
  }
  //get the preference 
  //identify & collect preference the user has chosen (1 or 4 chosen scopes)
  //create a collection with the chosen scopes,locally scored temp array
  //create a password variable, an array
  //randomly draw character
  //put the character on the generatePasszVCword variable
  //repeat using forloops, as many times as specified.
  //loop through garanteed elements, replace elements in pasword array. (Math.Random)
  //join chraccters in the password array into a string.
  //return the password string
  
}