
let passwordLength;
let passwordCharacterOptions=[];


function passwordLengthCriteria() {
  let lengthPrompt=prompt("Choose a password length between 8 and 156 characters.")
  passwordLength=Number(lengthPrompt); //converting string input to number to validate

  if (lengthPrompt===null){
    alert("If you change your mind, click 'Generate Password' again!")
  } else if (passwordLength >=8 && passwordLength <= 156){
      passwordCharacterCriteria();  
  } else if (!(passwordLength >=8 && passwordLength <= 156)){
      alert("Sorry, your selection does not meet password length requirements.  Please try again.");
  } 
}

function passwordCharacterCriteria() {
  let includeLocaseAlpha=confirm("Would you like to include lower case alphas in your password?");
  let includeUpcaseAlpha=confirm("Would you like to include upper case alphas in your password?");
  let includeNumbers=confirm("Would you like to include numbers in your password?");
  let includeSymbols=confirm("Would you like to include symbols in your password");
  let criteriaCounter=0;
  let loCaseAlphas=['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let upCaseAlphas=['A','B','C', 'D','E','F','G','H','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let numbers=['0','1','2','3','4','5','6','7','8','9'];
  let symbols=['~','`','@','#','$','%','^','&','*','(',')','_','-','+','=','{','}','[',']','|',':',';','"','<','>',',','.','?','/']


  if (includeLocaseAlpha===true) {
    criteriaCounter = ++criteriaCounter;
    passwordCharacterOptions=passwordCharacterOptions.concat(loCaseAlphas);
    console.log(criteriaCounter, passwordCharacterOptions);
  } else {
    criteriaCounter;
    passwordCharacterOptions;
    console.log(criteriaCounter, passwordCharacterOptions);
  }
  if (includeUpcaseAlpha===true) {
    criteriaCounter = ++criteriaCounter;
    passwordCharacterOptions=passwordCharacterOptions.concat(upCaseAlphas);
    console.log(criteriaCounter, passwordCharacterOptions);
  } else {
    criteriaCounter;
    passwordCharacterOptions;
    console.log(criteriaCounter, passwordCharacterOptions);
  }
  if (includeNumbers===true) {
    criteriaCounter = ++criteriaCounter;
    passwordCharacterOptions=passwordCharacterOptions.concat(numbers);
    console.log(criteriaCounter, passwordCharacterOptions);
  } else {
    criteriaCounter;
    passwordCharacterOptions;
    console.log(criteriaCounter, passwordCharacterOptions);
  }
  if (includeSymbols===true) {
    criteriaCounter = ++criteriaCounter;
    passwordCharacterOptions=passwordCharacterOptions.concat(symbols);
    console.log(criteriaCounter, passwordCharacterOptions);
  } else {
    criteriaCounter;
    passwordCharacterOptions;
    console.log(criteriaCounter, passwordCharacterOptions);
  }

  console.log(criteriaCounter);

  if (criteriaCounter===0) {
    alert("Sorry, you must include at least 1 character type in your password.  Please try again.")
  }
}



/*
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
*/ 