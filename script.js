// Assignment Code
var generateBtn = document.querySelector("#generate");

//declared in the global scope and is available to all functions 
var generatePassword ={
    num = [0,1,2,3,4,5,6,7,8,9];
    upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    lower = ["a","b","c","e","d","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    specialChars =["!","@","#","$","%","^","&","*","_","+","~","<",">","?","/"]
    //numcharacter =
};

// Write password to the #password input
// This is a function writePassword
function writePassword( upper  +lower + num  +specialChars) {
  var password = generatePassword();
  var passwordText = document.querySelector(upper +lower + num  +specialChars); //#password input
  passwordText.value = password;
}
// This is a function writePassword
var writePassword = function () {
    console.log("Your Secure Password Is" + );
    return;
  };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// For loop starts at 0, runs while i is less than length of *student array
// Increments by 1
for (var i = 0; i < lower.length; i++) { // Functions parameters.
    // This statement will run each time the loop is executed
    console.log(
      "Your Secure Password Is " +
        lower[Math.floor(Math.random() * lower.length)] 
    );
  }