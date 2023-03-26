// let day = "wednesday";
// switch (day) {
//   case "monday":
//     console.log("8am");
//     break;
//   case "tuesday":
//     console.log("6am");
//     break;
//   case "wednesday":
//   case "thursday":
//   case "friday":
//     console.log("7am");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("4am");
//     break;
//   default:
//     console.log("goodbye");
// }

// While Loop

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// for Loop

// for (let i = 1; i <= 5; i++) {
//   console.log("Hi", i);
//   for (let j = 1; j <= 5; j++) console.log("Hello", j);
// }

// Object Literal
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(person.fullName("John"));

// An Empty Object

// const person = {};
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

// Object is Mutable that means you can change its property and its value
// const x = person;
// x.age = 45;

// console.log(`${person.firstName} is ${person.age} years old`);

// Looping throught an Object

// let txt = "";
// for (let value in person) {
//   txt += value + "<br>";
//   console.log(person[value]);
// }

// Object-oriented Programming
// let circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   isVisible: true,
//   draw: function () {
//     console.log("draw");
//   },
// };

// console.log(circle.radius);
// for (let x in circle) {
//   console.log(circle[x]);
// }

// Factory Function
// function createWork(work) {
//   return {
//     work,
//     money() {
//       console.log("money");
//     },
//   };
// }

// const work1 = createWork(1);
// console.log(work1);

// const work2 = createWork(2);
// console.log(work1);

//Constructor Function

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// const myFather = new Person("Oumarion", "Quarshie", 18, "Brown");
// const myMother = new Person("Heartwill", "Quarshie", 31, "Brown");

// myMother.eye = function () {
//   return this.eye;
// };
// console.log(`My mother is ${myMother.eyeColor}.`);

// // Function Expressions
// let add = function (num1, num2) {
//   return num1 + num2;
// };

// let result = add(2, 4);
// console.log(result);

// Shorthand of Method
// let site = {
//   welcome() {
//     console.log("Welcome to w3docs!");
//   },
// };
// site.welcome();

// let add1 = (user) => {
//   console.log("Hello " + user);
// };
// add1("Oumarion");

// Todays Time and date
// let tomorrow = new Date();
// tomorrow.setDate(tomorrow.getDate() + 1);
// console.log(tomorrow);

// Arrays forEach function *********
// let data = [1, 2, 3, 4, 6, 8, 9];
// data.forEach((value, index, data) => {
//   data[index] = value ** 2;
// });

// console.log(data);

// Ternery Conditions ******
// let age = 18;
// let votable = age > 18 ? "Too Young" : "Old Enough";
// console.log(votable);

// The if Statement ******
//Syntax
//if (condition) {
// Block of code to be excuted if the condition is true
//}

// let age = 23;
// if (age >= 20) {
//   console.log("old enough for the ride");
// } else {
//   console.log("Too Young to ride");
// }

// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;

//   case 1:
//     day = "Monday";
//     break;

//   case 2:
//     day = "Tuesday";
//     break;

//   case 3:
//     day = "Wednesday";
//     break;

//   case 4:
//     day = "Thursday";
//     break;

//   case 5:
//     day = "Friday";
//     break;

//   case 6:
//     day = "Saturday";
//     break;
// }
// console.log(`Today is ` + day);

// const set = new Set();

// set.add("apple", 300);
// set.add("bananas", 200);
// set.add("Kofi", "kumasi");
// set.add("navin", "Blockchain");

// map.forEach((value, key) => {
//   console.log(map.get("navin"));
// });

// console.log(set.has("apple"));



    const add = ( function() {
        let counter = 0;
        return function () {
            counter += 1;
            return counter;
        
            
        }
        
    
    })();

    function myFunction() {
        document.getElementById("demo").innerHTML = add()
    }
 

// This is a callback function

const family = ["Heartwill", "Oumar", "Kylian", "Oumarion"]

// family.forEach((family) => console.log(family))

const myForEach = (arr, callback) => {
    for ( let i = 0; i < arr.length; i++) {
        const element = arr[i];
        callback(element)
    }
}

myForEach(family, (family) => {
    console.log(family)
})

// How to fetch pokemon api

const loadPokemon = (id, callback) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
        callback(data)
    })
}

loadPokemon(66, (pokemon) => {
    console.log(pokemon)
}) 