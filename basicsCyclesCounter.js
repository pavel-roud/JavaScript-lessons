'use strict()';

//var leftBorderWidth = 1;
//let second = 2;
//const pi = 3.14;

//console.log (pi);

// let person = {
// name: "John",
// age: 25,
// isMarried: true
// };

// console.log(person["age"]);

// let arr = ['plum.phg', 'orange.jpg', 'apple.bmp'];

// console.log(arr[0]);

//alert("hello world");

// confirm("Are you here?");

// let answer = confirm("Are you here?");

// console.log(answer);

//  let answer = prompt("Are you 18 years old?", "Yes");

//     console.log(typeof(answer));

/*if(2*4 == 8) {
    console.log("exactly!");
 } else {
     console.log("not exactly!");
}*/

/*
 let num =50;

 if (num < 49) {
    console.log("exactly!");
 } else if (num > 100) {
    console.log("too much!");
 }   else {
    console.log("That's right!");
 }*/

// (num == 50) ? console.log("That's right!") : console.log("Wrong!");

// Оба вышеуказанных действия выполняют тоже самое действие
/*
// Команда switch делает сравнение более легким для понимания
 switch (num) {
     case num < 49:
         console.log("exactly!");
         break;
     case num > 100:
         console.log("too much!");
         break;
     case num > 80:
         console.log("Still too much!");
         break;
     //case num == 50: "Incorrect code. See correct code bellow:"
     case 50: 
         console.log("That's right!");
         break;
     default:
         console.log("Something went wrong!");
         break;
}*/

//три примера работы с циклами while, do, for.

/*let num = 50;
while (num < 55) {
    console.log(num);
    num++;
*/
/*let num = 50;
do {
    console.log(num);
    num++;
}
while (num < 55);*/

/*let num = 50;
for (let i = 1; i < 8; i++) {
    console.log(i);
}*/

/*let num = 50;
for (let i = 1; i < 8; i++) {
    if (i == 6){
        break;
    }
    console.log(i);
}*/


//function declaration. 
//(fuctions can be declired before code.)
console.log(calc(3,4));
console.log(calc(8,4));

function calc(a,b) {
    return (a + b);
}

//function exptession. 
//(fuctions can NOT be declired befor code. Function id declaired in variable)

let calc = function(a,b) {
    return (a + b);
};

console.log(calc(3,4));
console.log(calc(8,4));

// same function in ES 6 format
let calc = (a,b) => a+b;

let str = "test";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());


// let twelve = "12.2";
// console.log(Math.round(twelve));

let twelve = "12.2px";
console.log(parseInt(twelve));
console.log(parseFloat(twelve));







function createCounter() {
     let counter = 0;
     const myFunction = function() {
    counter = counter + 1;
     return counter;
     };
     return myFunction;
    }
     const increment = createCounter();
     const c1 = increment();
     const c2 = increment();
     const c3 = increment();
     console.log('example increment', c1, c2, c3);
    