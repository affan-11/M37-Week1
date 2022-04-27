// if (1 != "1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }


// let place = "manc"
// let weather = "rain"

// if (place == "manc" && weather == "sunny") {
//     console.log("check again")
// }
// else if (place == "manc" && weather == "rain") {
//     console.log("obvs")
// }
// else {
//     console.log("what it isnt raining?")
// }


//-------------------------------------------------------------------------------


// Activity 1:
// Create a variable called age. Write an if statement that logs “Yes I can serve you” if the age is greater than 17 and else logs “You aren’t old enough”.
// Take your if statement and add a variable called country in. Eg. if age > 17 and country == “UK”.


// let age = 19
// let country = "UK"

// if (age > 17 && country == "UK") {
//     console.log("Yes, I can serve you")
    
// } else {
//     console.log("No, I cannot serve you")
    
// }

//--------------------------------------------------------------------------------------------

// Activity 2
// Create a variable for any pizza topping. Create a switch statement, if the topping is one of your favourite ingredients, log to the console “These are important ingredients for my pizza.” If you don’t mind having Pepperoni for example log to the console “I don’tmind having ${topping} on my pizza.Finally, for any topping you don’t like log “${topping}should not be on a pizza.” 

// let topping = "bacon"

// switch (topping) {
//     case "mushroom":
//     case "onion":
//     case "sweetcorn":
//         console.log("These are important ingredients for my Pizza")
//         break;


//     case "chicken":
//     case "chili":
//         console.log(`I dont mind having ${topping} on my pizza`)
//         break;


//     default:
//         console.log(`I do not want ${topping} on my pizza`)
//         break;
// }


//--------------------------------------------------------------------------------------------------


// Activity 3
// Create a variable called password. Check how many letters are in the password, if there are less than 8, log to the console that the password is too short. Otherwise log the password to the console. 

// let password = "password123";
// let length = password.length;

// if (length < 8) {
//     console.log("Password is too short")
    
// } else {
//     console.log(password)
    
// }


//------------------------------------------------------------------------------------------------------------------

// Activity 4
// Create a variable called num. Check if the variable is divisible by 3 or 5. If it is, log “This number is divisible by 3 or 5”. Otherwise log something else. 

// let num = 5

// if (num % 3 == 0 || num % 5 == 0) {
//     console.log("This number is divisible by 3 or 5")
    
// } else {
//     console.log(num)
    
// }


//--------------------------------------------------------------------------------------------------------------------

// Activity 5
// Create a variable called num. If num is divisible by 3 log “fizz” to the console, if it’s divisible by 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log “fizz buzz” to the console. Otherwise log num to the console

// num = 7

// if (num % 3 == 0 && num % 5 == 0) {
//     console.log ("Fizz buzz")
    
// } else if ( num % 3 == 0 ) {
//     console.log("Fizz")

// } else if (num % 5 == 0) {
//     console.log("Buzz")
// } else {
//     console.log(num)
// }


//---------------------------------------------------------------------------------------------------------------

// Activity 6
// Create a variable called num. Check if the number is a palindrome (looks the same forward as it does backwards e.g. 1001 or 20202). 

num = 1001


//--------------------------------------------------------------------------------------------------------------------

// Activity 7
// Create a variable called time, a variable called placeOfWork and a variable called townOfHome. Create an if statement that logs to the console where someone is at times of the day. E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work. 

// let time = 11
// let placeOfWork = "Codenation"
// let townOfHome = "Manchester"

// if (time == 7) {
//     console.log(`I am at home in ${townOfHome}`)
    
// } else if (time == 8) {
//     console.log(`I am commuting to work at ${placeOfWork}`)
    
// } else if (time == 9) {
//     console.log(`I am at work at ${placeOfWork}`)

// } else {
//     console.log("I'm chilling at home")
// }


//------------------------------------------------------------------------------------------------------------------------

//Activity 8
// Take the string “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the index of a last vowel in the string.

let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let vowel = ['a', 'e', 'i', 'o', 'u']

//---------------------------------------------------------------------------------------------------------------------

// Activity 9


//------------------------------------------------------------------------------------------------------------------------

//Activity 10
// Create two variables called num1 and num2. Create an if statement that checks if the result of the sum is even. If it is return the number, otherwise return the numbers multiplied together.

// let num1 = 2
// let num2 = 5
// let total = num1 + num2

// if (total % 2 ==0) {
//     console.log(`The sum of the two numbers is ${num1 + num2} and is even`)
    
// } else {
//     console.log(`${num1 * num2}`)
    
    
// }