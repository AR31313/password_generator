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
var generatePassword ={
    num = [0,1,2,3,4,5,6,7,8,9];
    upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    lower = ["a","b","c","e","d","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    specialChars =["!","@","#","$","%","^","&","*","_","+","~","<",">","?","/"]
    //numcharacter =
};

//a function named generatePassword
function generatePassword ({
  //get the preference in
  //identify & collect preference the user has chosen (1 or 4 chosen scopes)
  //create a collection with the chosen scopes,locally scored temp array
  //create a password variable, an array
  //randomly draw character
  //put the character on the generatePassword variable
  //repeat using forloops, as many times as specified.
  //loop through garanteed elements, replace elements in pasword array. (Math.Random)
  //join chraccters in the password array into a string.
  //return the password string
})