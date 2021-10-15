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
  //passwordLength turning string to numbers
  var passwordLength = parseFloat(totalcharacters);

  //validating entry is within parameters. If not then alert!
  //First line validates length with boolean
  var minpasswordLength = passwordLength > 7;
  var maxpasswordLength = passwordLength < 128;
  if (minpasswordLength && maxpasswordLength) {
    // User selects uppercase - boolean
    var uppercase = confirm("Do you want uppercase characters?");
    // User selects lowercase - boolean
    var lowercase = confirm("Do you want lowercase letters?");
    // User selects numbers- boolean
    var numbers = confirm("Do you want numbers?");
    // User selects characters- boolean
    var userChoseSpecial = confirm("Do you want special characters?");

    // This is my string of password characters.
    var alphaLower = "abcdefghijklmnopqrstuvwxyz";
    var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var symbols = "!@#$%^&*_-+=";

    /////// notes at night: I now want the forloop to pull from a pool of user selected characters.
    var selectedCharactersPool = "";
    ///// if user special true then add var string to pool
    if (userChoseSpecial) {
      selectedCharactersPool = selectedCharactersPool + symbols;
    }
    ///// if user uppercase true then add var string to pool
    if (uppercase) {
      selectedCharactersPool = selectedCharactersPool + alphaUpper;
    }
    ///// if user lowercase true then add var string to pool
    if (lowercase) {
      selectedCharactersPool = selectedCharactersPool + alphaLower;
    }

    if (numbers) {
      selectedCharactersPool = selectedCharactersPool + numbers;
    }
    var generatedPasscode = "";
    // This is my loop equivalent to the selected password length
    for (var i = 0; i < passwordLength; i++) {
      var randomSelectedCharacter =
        selectedCharactersPool[
          Math.floor(Math.random() * selectedCharactersPool.length)
        ];
      generatedPasscode = generatedPasscode + randomSelectedCharacter;
    }
    return generatedPasscode;
  } else {
    alert("Please select a number between 8 - 128");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
