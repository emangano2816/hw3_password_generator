
// Assignment Code
let generateBtn = document.querySelector("#generate");  //Storing the button in a variable to call later
let passwordLength;  //declaring variable to use in functions
let passwordCharacterOptions; //declaring variable to use in funcitons
//Creating variables that house all the possible character types
let loCaseAlphas=['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upCaseAlphas=['A','B','C', 'D','E','F','G','H','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let numbers=['0','1','2','3','4','5','6','7','8','9'];
let symbols=['~','`','@','#','$','%','^','&','*','(',')','_','-','+','=','{','}','[',']','|',':',';','"','<','>',',','.','?','/'];
let characters=[loCaseAlphas, upCaseAlphas, numbers, symbols];
//Creating criteriaCounter to validate that at least 1 criteria has been selected
 let criteriaCounter;


//Function returns passwordLength. To be used when generating the password
function passwordLengthCriteria() {
  let lengthPrompt=prompt("Choose a password length between 8 and 156 characters.")
  passwordLength=Number(lengthPrompt); //converting string input to number to validate

  if (lengthPrompt===null){
    alert("If you change your mind, click 'Generate Password' again!");
  } else if (passwordLength >=8 && passwordLength <= 128){
      // debugger;
      passwordCharacterCriteria();
    // console.log("Run passwordCharacterCriteria");  
  } else if (!(passwordLength >=8 && passwordLength <= 128)){
      alert("Sorry, your selection does not meet password length requirements.  Please try again.");
  } 
  return passwordLength;
}

//Function returns passwordCharacterOptions
//passwordCharacterOptions is an array that includes characters selected by the user to be used when generating the password
function passwordCharacterCriteria() {
  //Creating pop-up confirmation boxes to determine password criteria
  let includeLocaseAlpha=confirm("Would you like to include lower case alphas in your password?");
  let includeUpcaseAlpha=confirm("Would you like to include upper case alphas in your password?");
  let includeNumbers=confirm("Would you like to include numbers in your password?");
  let includeSymbols=confirm("Would you like to include symbols in your password");
  let includes=[includeLocaseAlpha, includeUpcaseAlpha, includeNumbers, includeSymbols];

  criteriaCounter=0;                  //Setting to 0 so that it is reset after each run
  passwordCharacterOptions=[];        //Setting to an empty array so it is reset after each run

  //Loading elements into the passwordCharacterOptions if the user has selected to include that character type
  //If user clicks 'OK' that character type is put into the array and the criteriaCounter is incremented by 1
  //If user clicks 'Cancel' that character type is not added to the array of options and the criteriaCounter stays the same

  for (var i=0; i<includes.length; i++) {
    checkIncludes(includes[i],characters[i]);
  }

  console.log(criteriaCounter);

  //Checking that at least 1 character type has been include
  //If the criteriaCounter is exactly equal to 0 then the user failed to select a charater type and will receive a message to start over
  if (criteriaCounter===0) {
    alert("Sorry, you must include at least 1 character type in your password.  Please try again.");
  } 
  return passwordCharacterOptions.length;
}

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
    //Creating new array to store randomly selected elements
    const passwordArray = [];
    
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
  
  var password = generatePassword();                       //Password stores the result of the generatePassword function
  var passwordText = document.querySelector("#password");  //passwordText stores the element used to display the password

  passwordText.value = password;                           //Setting the value of the password display element to the generated password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
