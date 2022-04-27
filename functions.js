// Functions break up code into smaller reusable chunks

const pressGrindBeans = () => {
    console.log("Grinding for 20 seconds");

}
pressGrindBeans();

//------------------------------------------------------------


// Activity 1
//Take this code and turn it into arrow function syntax:

// let factorial = () => {
//     if ((n===0) || n ===1) {
//         return 1;
//     } else {
//         return (n * factorial (n-1));
//     }
// }

// console.log(factorial(33))


//------------------------------------------------------------

// Activity 2:
// Edit the below snippet to include two parameters and a running order count updated when the function is called

let orderCount= 0;

const takeOrder = (topping) => {
    console.log(`Pizza wuth ${topping}`)
    orderCount++;
}

takeOrder("pineapple")

//------------------------------------------------------------


// Activity 3:
// Cash machine time! Let’s create one that:
// > Dispenses cash if your pin number is correct and your balance is equal to, or more than, the amount you’re trying to withdraw!