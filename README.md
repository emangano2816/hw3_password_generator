# Homework Assignment 3: Password Generator

## URLs
1. Deployed application: https://emangano2816.github.io/hw3_password_generator/
2. GitHub Repository: https://github.com/emangano2816/hw3_password_generator

## User Story
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```
## Acceptance Criteria
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
## Achieving Acceptance Criteria
1. After the user clicks 'Generate Password' the user is presented with a series of pop-ups to determine the designated length of the password as well as the character types to be included in the password.  In all there are 5 pop-ups to determine password criteria.
2. Confirmation pop-ups are used to determine if the user would like to include four different character types.  The user is able to click 'OK' to include the character type or 'Cancel' to exclude the character type.
3. A prompt box is used to determine how long the user would like the generated password to be.  The system checks that the provided value is between 8 and 128, inclusive (i.e., [8,128]). If the provided value is an integer between [8,128] then the system moves through the confirmation prompts.  If the user clicks 'Cancel' or if the user provides a value that is not an integer between [8,128] then the user receives a message that the selected length does not meet requirements and to please try again.
4. Once the user has selected a valid length for their password, the system provides 4 confirmation pop-ups to determine if the user would like to include lower-case alphas, upper-case alphas, numbers, and/or special characters.  
5. After the user goes through all four of the confirmation prompts to determine character types for inclusion/exclusion, the system verifies that at least one character type has been selected for inclusion.  If none of the character types have been selected, then the user receives a message that at least one character type must be selected and to please try again.  If at least one character type has been selected, then the system generates the password using the length and character types requested by the user.
6. After a valid length has been selected and at least one character type has been selected for inclusion the system generates a password with the specified criteria.
7. The generated password is displayed to the user on the page.


## Meeting Application Quality
To make the user experience intuitive and easy to navigate alert, prompt, and confirmation pop-ups are used to communicate with the user regarding selections.  If selections result in the system not being able to generate a password an alert is used to communicate the reason behind the failure and the user is asked to try again.

## Screenshot
![screenshot](/assets/images/passwordGen_screenshot.png)
