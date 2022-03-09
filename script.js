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

//declared in the global scope and is available to all functions 
  var num = [0,1,2,3,4,5,6,7,8,9];
  var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lower = ["a","b","c","e","d","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var specialChars =["!","@","#","$","%","^","&","*","_","+","~","<",">","?","/"];
  var useLength;
  let randomPassword;
  var useUpper;
  var useLower;
  var usenum;
  var usespChar;


//a function named generatePassword
function generatePassword (){
  var useLength = parseInt (prompt ("How many characters would you like?"))
  if (useLength <8 || useLength > 128){
    alert ("Use a passphrase between 8 & 128 Characters.")
    return null
  }
 
  var useUpper = confirm ("Would you like to include uppercase?");
  var useLower = confirm ("Would you like to include lowercase?");
  var usespChar = confirm ("Would you like to include special characters?");
  var usenum = confirm ("Would you like to include numbers?");

let randomPassword = " ";
  for (let i = 0; i < useLength; i++) {
  randomPassword += masterArray[Math.floor(Math.random() * (masterArray.length))];
  console.log(Math.floor(Math.random() * (masterArray.length)));
  console.log(randomPassword);
  }
  return randomPassword;
}