// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var totalcharacters = prompt(
    "How many characters would you like (between 8-128)?",
    "8"
  );
  //passwordlength turning string to numbers
  var passwordlength = parseFloat(totalcharacters);

  //validating entry is within parameters. If not then alert!
  var minpasswordlength = passwordlength > 7;
  var maxpasswordlength = passwordlength < 128;
  if (minpasswordlength && maxpasswordlength) {
    console.log("True ✅ True ✅");
    var uppercase = confirm("Do you want uppercase characters?");
    // console.log(uppercase);
    var lowercase = confirm("Do you want lowercase letters?");
    var numbers = confirm("Do you want numbers?");
    var special = confirm("Do you want special characters?");
  } else {
    console.log("False ❌ False ❌");
    alert("Please select a number between 8 - 128");
  }

  // const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // const numbers = "0123456789";
  // const symbols = "!@#$%^&*_-+=";

  // Write Your JavaScript Code Here

  //do stuff
  //get the length the user wants
  //if it's not at least 8 characters no more than 128... start over
  // do you want uppercase
  //do you want lowercase
  // do you want numbers
  //do you want special characters
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// for (var i=0; i < 26; i++) { console.log ("blah blah" + i + ".")}
//                   i < zooanimals.length
