// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%^&*()_+";
var invalidLen = "Invalid password length entry."
var invalidChar = "Please select at least one criteria."

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Prompts
function generatePassword() {
  
    var passwordLength = prompt("Password length, must be between 8 and 128");
    if (passwordLength < 8 || passwordLength > 128) {   // validate length entry is within parameters
      alert ("Please choose a number between 8 and 128");
    return invalidLen;
    }
    
    console.log("Selected " + passwordLength + " characters.")

    // get passwor


    var userSelect = "";
    var finalPass = "";
    var up = confirm("Use Uppercase characters?");
      if(up) {
        userSelect = userSelect.concat(upper);
      }
    var low = confirm("Use Lowercase characters?");
      if(low) {
        userSelect = userSelect.concat(lower);
      }
    var num = confirm("Use Numberic characters?");
      if(num) {
        userSelect = userSelect.concat(numbers);
      }
    var spec = confirm("Use Special Characters?");
      if(spec) {
        userSelect = userSelect.concat(special)
      }
    // validate character entry
    if(!up && !low && !num && !spec) {
     return invalidChar;
    }

    console.log("User character selection  " + userSelect ) 

    for (var i = 0; i < passwordLength; i++) {
      var randoPass = [Math.floor(Math.random() * userSelect.length)];
      var rando = userSelect[randoPass]
      finalPass = finalPass.concat(rando)
    }

    console.log(finalPass);

  return finalPass
  
}





