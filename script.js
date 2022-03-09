
// var arr = 10;
// for (let i = 0; i < arr; i++) {
//   console.log(arr[i]);
//   console.log(arr)
// }

// var value = "6";
// if(value === 5){
//   console.log(typeof(value))
// }else if(value === "5"){
//   console.log(typeof(value))
// } else {
//   console.log("you didnt even define it")
// }


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
  var useLength;
  let randomPassword =[];
  var userchoice = [];

//a function named generatePassword
function generatePassword (){
  var useLength = parseInt (prompt ("How many characters would you like?"))
  console.log (typeof useLength)
  if (useLength <8 || useLength > 128){
    alert ("Use a passphrase between 8 & 128 Characters.")
    return null
  }
  var usenum = confirm ("Would you like to include numbers?");
  var useUpper = confirm ("Would you like to include uppercase?");
  var useLower = confirm ("Would you like to include lowercase?");
  var usespChar = confirm ("Would you like to include special characters?");

  //identify & collect preference the user has chosen (1 or 4 chosen scopes)
  console.log (userchoice);
  if (usenum ==true){
    userchoice=userchoice.concat (num);
    // userchoice+=num
  }
  console.log (userchoice);
  if (useUpper ==true){
    userchoice=userchoice.concat(upper);
  }
  console.log (userchoice);
  if (useLower ==true){
    userchoice=userchoice.concat(lower);
  }
  console.log (userchoice);
  if (usespChar ==true){
    userchoice=userchoice.concat(specialChars);
  }

// empty string variable for the for loop below
var randomPasswordGenerated = [];

 // loop getting random characters
 for (var i = 0; i < useLength; i++) {
  var randomNumberPicked = Math.floor(Math.random() * (userchoice.length + 1));
  //join chraccters in the password array into a string.
  randomPasswordGenerated= randomPasswordGenerated + userchoice[randomNumberPicked] 
// console.log (randomPasswordGenerated);
// console.log(useLength);
// console.log (randomNumberPicked);
// console.log (i);
 
}
//return the password string
return randomPasswordGenerated;
}