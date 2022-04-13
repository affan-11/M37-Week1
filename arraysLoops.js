// let coffeeOrder = [
//     "Alex - Cortardo",
//     "Ben - Cortardo",
//     "Charlie - Whatever's new"
// ];


// Will print the third item in the array: console.log(coffeeOrder[2]);

//Will replace the second item with "Ann - Vanilla latte":  
// coffeeOrder[1] = "Ann - Vanilla latte";
// console.log(coffeeOrder)

// .length property shows how many items are in the list
// console.log(coffeeOrder.length);

// Adds new item to end of the list
// coffeeOrder.push("Donna - Espresso")
// console.log(coffeeOrder)

// .pop() method will remove item of the end of the list
// coffeeOrder.pop();
// console.log(coffeeOrder)

//------------------------------------------------------------------------------------------

// Activity 1 
// Make an array of 3 favourite songs. Log them to the console. 
// Add another 2 songs to the list using a method then remove the last one you have added.

// let favSongs = [
//     "jazz",
//     "rap",
//     "classical"
// ]

// console.log(favSongs)

// favSongs.push("hip hop", "r&b")


// console.log(favSongs)

// favSongs.pop()
// console.log(favSongs)

//Activity 2
//Using MDN, choose one of the following methods: map(), unshift(), splice(), unsplice().
//Create a programme to show the use of this chosen method
//(Note: Not ALL methods will permanently make changes/updates to the arrays themselves.)

// let premTable = [
//     "Man City",
//     "Chelsea",
//     "Tottenham"
// ]

// premTable.splice()
//Replaces 1 element at index 4 (So it replaces Tottenham with Arsenal)
// console.log(premTable)


// premTable.splice(1,0, "Liverpool");
// replaces 0 elements at index 1
// console.log(premTable)


//----------------------------------------------------------------------------------------------------


//For Loops


// let favDrinks = [
//     "fanta",
//     "coke",
//     "vimto",
//     "Red bull"
// ]

// console.log(favDrinks[0])
// console.log(favDrinks[1])
// console.log(favDrinks[2])

// for (let i=0; i<favDrinks.length; i++){
//     console.log(favDrinks[i]);
// }



//Using if statements inside for loops

// let multiplesTwo = [];

// for(let i=0; i < 20; i++){
//     if (i % 2 == 0){
//         multiplesTwo.push(i);
//     }
// }
// console.log(`Numbers divisble by 2 between 0 and 20 are: ${multiplesTwo}.`);



//While Loops


// let age = 15

// while(age < 18) {
//     console.log("You are a child");
//     age++
// }
// console.log("You're an adult")




// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club";

// while (currentCard != "Spade") {

//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)]

// }

// console.log(currentCard);

//--------------------------------------------------------------------------------------------------------------------------------


// Activity 1:
// Create an array that lists your favourite films, up to 5 elements. Add 2 more using a method. Use a loop to cycle through the array

// let favFilms = [ "Batman", "Superman", "Iron man", "Hulk", "Inception"]

// favFilms.push("James Bond", "Star Wars")

// for(i=0; i<favFilms.length; i++) {
//     console.log(favFilms[i])
// }

//--------------------------------------------------------------------------------------------------------------------------------

// Activity 2:
// Generate 6 random numbers between 1-50 and log them to the console.

// for(i=0; i < 6; i++) {
//     console.log(Math.floor(Math.random()*50))
// }


//------------------------------------------------------------------------------------------------------------------------------

//Activity 3:
//If we can create a loop to put 0-9 on the screen, how can we count from 9-0? Create a program that does this.

// for (i = 9; i <= 9 && i >= 0; i--) {
//     console.log(i)
// }


//--------------------------------------------------------------------------------------------------------------------------------

// Activity 4:
// Displays 4 films stored in an array. Use a for loop to show each film in the array. Use an if statement to check if the 3rd film in the array is  Ghostbusters. If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo! we want Ghostbusters

// let films = ["Inception", "Star wars", "Ghostbusters", "Spiderman"]

//  for (i=0; i<films.length; i++) {
//     console.log(films[i])
// }
    
// if(films[2]=="Ghostbusters") {
//     console.log("Yay! Its Ghostbusters!")
// }
// else {
//     console.log("Booo! We want Ghostbusters")
// }


//----------------------------------------------------------------------------------------------------------------------------

// Activity 5:
// Generate a random number between 1 and 30 six times. For each random number generated, check if this number of divisible by 7 or not. Log out a message to the console if it is divisible by 7 or not. 

for(i = 0; i < 6; i++) {
    console.log(Math.ceil(Math.random()*30))
}

