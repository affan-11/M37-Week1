// let person = {
//     name: "Affan",
//     username: "codeiscool",
//     age: 20,



// Adds more items to the object:
// person.games = ["Hunt: Showdown", "SoT", "Halo"]
// console.log(person)

//------------------------------------------------------------


// Activity 1:
// Let’s edit our person object to include a function called sayHi and when it’s called, it should return “Hello my name is ${this.name}”
// sayHi(){
//     return console.log(`Hello my name is ${this.name}`)

// }
// }
// person.sayHi()

//------------------------------------------------------------

// Activity 2: 
// Create an object called pet with the key values of: name,typeOfPet, age, colour And methods called eat and drink. They should return a  string saying [Your Pet Name] is eating/drinking.

// let pet = {
//     name: "bob",
//     typeOfPet: "cat",
//     age: 3,
//     colour: "white",

//     eat(){
//         return console.log(`The ${this.typeOfPet} called ${this.name} is eating`)
//     },
//     drink(){
//         return console.log(`The ${this.typeOfPet} called ${this.name} is drinking`)
//     }

// }

// pet.eat();
// pet.drink()

//------------------------------------------------------------

// Activity 3:
// Create an object called coffeeShop with key values of: branch, drinks with prices, food with prices, And methods called drinksOrdered and foodOrdered. They should return a string saying [Your order] is … with all items chosen with costs and total costs. 

let coffeeShop = {
        branch: "Starbucks",
      
        drinks: {
          latte: 2.50,
          espresso: 1.5,
          capuccino: 3,
        },
      
        food: {
          cookie: 1.5,
          muffin: 2,
          sandwich: 3,
        },

        total: 0,
        drinksOrdered: function(...items) {
          let drinkTotal=0
          let validDrinks=[]
          if (items.length<1) {
            return 'please select drink a drink'
          }
          for(let i =0; i<items.length; i++)
              for (let j=0; j<this.drinks.length; j++) {
                if (items[i] == this.drinls[j][0]){
                  this.total += this.drinks[j][1];
                  drinkTotal += this.drinks[j][1];
                  validDrinks.Drinks.push(this.drinls[j][0])
                }
              }
            }
            if (validDrinks)
          }
