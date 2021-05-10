
// Assignment Code
let generateBtn = document.querySelector("#generate");  //Storing the button in a variable to call later
let passwordLength;                                     //declaring variable
let passwordCharacterOptions;                           //declaring variable

//Creating variables that house all the possible character types
let loCaseAlphas=['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upCaseAlphas=['A','B','C', 'D','E','F','G','H','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let numbers=['0','1','2','3','4','5','6','7','8','9'];
let symbols=['~','`','@','#','$','%','^','&','*','(',')','_','-','+','=','{','}','[',']','|',':',';','"','<','>',',','.','?','/'];
let characters=[loCaseAlphas, upCaseAlphas, numbers, symbols];

//Creating criteriaCounter to validate that at least 1 character type criteria has been selected
 let criteriaCounter;


//Function returns passwordLength. Used to generate password.
function passwordLengthCriteria() {
  let tryAgain;
  let lengthPrompt=prompt("Choose a password length between 8 and 128 characters.")
  passwordLength=Number(lengthPrompt); //converting string input to number for validation

  if (lengthPrompt===null){
    alert("If you change your mind, click 'Generate Password' again!");
  } else if (passwordLength >=8 && passwordLength <= 128){
      passwordCharacterCriteria();
  } else if (!(passwordLength >=8 && passwordLength <= 128)){
      tryAgain = confirm("Sorry, your selection does not meet password length requirements.  Please try again.");
      if (tryAgain) {
        passwordLengthCriteria();
      };
  } 
  return passwordLength;
}

//Function returns passwordCharacterOptions.
//passwordCharacterOptions is an array that includes characters selected by the user to be used when generating the password.
function passwordCharacterCriteria() {
  //Storing confirmation boxes in variables to determine characters selected for inclusion.
  let includeLocaseAlpha=confirm("Would you like to include lower case alphas in your password?");
  let includeUpcaseAlpha=confirm("Would you like to include upper case alphas in your password?");
  let includeNumbers=confirm("Would you like to include numbers in your password?");
  let includeSymbols=confirm("Would you like to include special characters in your password");
  let includes=[includeLocaseAlpha, includeUpcaseAlpha, includeNumbers, includeSymbols];
  let tryAgain_CharPrompts;

  criteriaCounter=0;                  //Setting to 0 so that it is reset each time passwordCharacterCriteria is called.
  passwordCharacterOptions=[];        //Setting to an empty array so that it is reset each time passwordCharacterCriteria is called.


//Calls checkIncludes function and runs through it four times.
  for (var i=0; i<includes.length; i++) {
    checkIncludes(includes[i],characters[i]);
  }

  console.log(criteriaCounter);

  //Checking that at least 1 character type has been included.
  //If the criteriaCounter is exactly equal to 0 then the user failed to select a charater type and will need to try again.
  if (criteriaCounter===0) {
    tryAgain_CharPrompts = confirm("Sorry, you must include at least 1 character type in your password.  Please try again.");
  } if (tryAgain_CharPrompts) {
    passwordCharacterCriteria();
  }
  return passwordCharacterOptions.length;
}

//Loading elements into the passwordCharacterOptions if the user has selected to include that character type
//If user clicks 'OK' that character type is put into the array and the criteriaCounter is incremented by 1
//If user clicks 'Cancel' that character type is not added to the array of options and the criteriaCounter stays the same
function checkIncludes(includeType, includeCharacters) {
    if (includeType===true) {
      criteriaCounter++;
      passwordCharacterOptions=passwordCharacterOptions.concat(includeCharacters);
      console.log(criteriaCounter, passwordCharacterOptions);
    } 
}

//generatePassword returns a password using the passwordLength and passwordCharacterOptions determined by the user
//A password is returned when password criteria have been met; otherwise, the message "Your Secure Password" is returned
function generatePassword() { 
  passwordLengthCriteria();  //calls passwordLengthCriteria function in order to determine password criteria

  if (passwordLength>=8 && passwordLength<=128 && passwordCharacterOptions !== 0){
    
    const passwordArray = [];   //Creating new array to store randomly selected elements
    
    //Randomly selecting passwordLength characters from passwordCharachterOptions//
    //For each i up to passwordLength, characters is set to a randomly selected array element from passwordCharacterOptions
    //The array element is then pushed into passwordArray
    //Once the for loop is complete, the function returns the elements of the passwordArray joined together as a string
    for (let i=0; i<passwordLength; i++){
      const characters = passwordCharacterOptions[Math.floor(Math.random() * passwordCharacterOptions.length)]
      passwordArray.push(characters);
    }
    return passwordArray.join('');
  } else {
    return "Your Secure Password";
  }
}

// writePassword  sets #password input to the value returned by generatePassword
function writePassword() {
  
  var password = generatePassword();                       //Password stores the result of the generatePassword function.
  var passwordText = document.querySelector("#password");  //passwordText stores the element used to display the password on the page.

  passwordText.value = password;                           //Setting the value of the password display element to the generated password.

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
