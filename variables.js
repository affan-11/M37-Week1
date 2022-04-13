// Uppercase and then console log the 8th character in a string:
// console.log("hello world".charAt(9).toUpperCase())

// let i = 10;
// i=i+2 

// console.log(i)

// let i = 10;
// i+=2;      //----This is the same as the example above.

// console.log(i)


// Activity 1:
// Create a program that stores someone’s name, age and favourite colour and log it to the console in a complete sentence using Template Literals.

// let name = "Affan";
// let age = 20;
// let favColour = "Purple"

// console.log(`My name is ${name}, I am ${age} years old and my favourite colour is ${favColour}`)

// Stretch
// Update all of your variables and write out a new sentence underneath your original.

// age = 21;
// favColour = "Red"

// console.log(`My name is ${name}, I am ${age} years old and my favourite colour is ${favColour}`)


//---------------------------------------------------------------------------------------------------------------


// Activity 2
// Create a program that stores what you eat today for breakfast, lunch and dinner. Log these to the console

// let breakfast = "Eggs"
// let lunch = "Chicken"
// let dinner = "Fish"

// console.log(`Today for breakfast I had ${breakfast}, for lunch I had ${lunch}, and for dinner I had ${dinner}`)

//  Stretch
//  Update each of these variables to what you will eat tomorrow. Log these to the console.

// breakfast = "Pancakes"
// lunch = "Salad"
// dinner = "Pasta"

// console.log(`Tomorrow I will have ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner`)


//---------------------------------------------------------------------------------------------------------------

// Activity 3:
// Create a program that calculates the number of days from today to your birth date.

const thisDay = new Date()
const thisYear = thisDay.getFullYear()
const birthDay = new Date(thisYear, 12, 17)
const millsPerDay = 24 * 60 * 60 * 1000;

birthday  



// Activity 4:
// > Create 9 variables: space1, space2… space9.
// > Assign either the value ‘x’,’o’,’ ‘, to each of these variables.
// > Insert the variables into your board using the
// ${varName} syntax and make it look like the displayed board

// s1 = "x"
// s2 = "o"
// s3 = ""
// s4 = "x"
// s5 = "x"
// s6 = ""
// s7 = "o"
// s8 = ""
// s9 = ""

// console.log(`
//        |     |     
//   ${s1}    |  ${s2}  | ${s3}    
//        |     |
// --------------------
//        |     |     
//   ${s4}    |  ${s5}  | ${s6}
//        |     |
// --------------------
//        |     |
//   ${s7}    |  ${s8}   |  ${s9}
//        |     |`)