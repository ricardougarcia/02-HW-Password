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
  //First line validates length with boolean
  var minpasswordlength = passwordlength > 7;
  var maxpasswordlength = passwordlength < 128;
  if (minpasswordlength && maxpasswordlength) {
    console.log(passwordlength);

    // User selects uppercase - boolean
    var uppercase = confirm("Do you want uppercase characters?");
    // console.log(uppercase);
    var lowercase = confirm("Do you want lowercase letters?");
    // User selects numbers- boolean
    var numbers = confirm("Do you want numbers?");
    // User selects characters- boolean
    var special = confirm("Do you want special characters?");

    // This is my array of password characters.
    var alphaLower = "abcdefghijklmnopqrstuvwxyz";
    var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var symbols = "!@#$%^&*_-+=";

    // This is my candidate pool of selected characters
    // var candidatePool = alphaLower + alphaUpper + numbers + symbols;
    // console.log(candidatePool);

    // This is my function for looping selected characters
    // var passwordCandidate = "";
    // for(int i = 0; i < passwordLength; i++) {
    //   //var randChar = // get your randomly access character from the candidate pool
    //   passwordCandidate = passwordCandidate + randChar;

    var randomAlphaLower = "";
    console.log(randomAlphaLower);
    // This is my loop equivalent to the selected password length
    for (var i = 0; i < passwordlength; i++) {
      var generatedLower =
        alphaLower[Math.floor(Math.random() * alphaLower.length)];
      console.log(randomAlphaLower);
      randomAlphaLower = randomAlphaLower + generatedLower;
      console.log(randomAlphaLower);
    }
    console.log("result: " + randomAlphaLower);
    return randomAlphaLower;
  } else {
    console.log("False ❌ False ❌");
    alert("Please select a number between 8 - 128");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// for (var i=0; i < 26; i++) { console.log ("blah blah" + i + ".")}
//                   i < zooanimals.length
