var button = document.querySelector('#generate');

function generatePassword() {


  //Array information//
  var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', "l", 'M', "N", 'O', 'P', "Q", "R", "S", 'T', 'U', 'V', "W", "X", 'Y', 'Z'];
  var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', "n", 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
  var characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '='];


  var resultArray = [];
  var userArray = [];

  // uppercaseLetters[0]

  var numChareacter = prompt('How many numbers & characters would you like in your password?');
  var numbers = confirm("Would you like numbers in your password?");
  var uppercase = confirm('Would you like uppercase letters in your password?');
  var lowercase = confirm('Would you like lower case letters in your password?');
  var characters = confirm("Would you like special characters in your password?");


  if (numbers) {
    resultArray = resultArray.concat(numbers);
  
  }
  
  if (uppercase) {
    resultArray = resultArray.concat(uppercaseLetters);
  }
  
  if (lowercase) {
    resultArray = resultArray.concat(lowercaseLetters);
  }
  
  if (characters) {
    resultArray = resultArray.concat(characters);
  }
  console.log(resultArray);
  
  for (var i = 0; i < numChareacter; i++) {
    userArray.push(resultArray[Math.floor(Math.random() * resultArray.length)]);
  }
  
}


//if Statments

// return userArray.join("");



//create a pasword
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function copyToClipboard() {
}

button.addEventListener('click', writePassword);