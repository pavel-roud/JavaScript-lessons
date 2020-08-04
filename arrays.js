// Old way to create objects. Sintacsis is not being use nowdays.
let obj = new Object();

// New sintacsis to create an object
let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);
// The same as if to create a property inside the opbject.
options.bool = false;
console.log(options.bool);

options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

// Code shown at the lesson
/*for (let key in options) {
    console.log("Characteristic " +key+ " has value " + options[key]);

}*/

// My version of the code with some additions
let char = "Characteristic ";
let val = " has value ";

for (let key in options) {
    console.log(char.toUpperCase() +key+ val.toUpperCase() + options[key]);
}

// Shows number of properties(variables) in object
console.log(Object.keys(options).length);


// create array for the object
//let arr = [1,2,3,4,5];

// Removig the last element from array
//arr.pop();

// adding the last element to the array
//arr.push(5);

// Removig the first element from array
//arr.shift();

// adding the first lement to the array
//arr.unshift(1);

//console.log(arr);

// Creates index of 99 in array and sets it's value to 99. This is a BIG MISTAKE. SHOUD NOT BE DONE.
/*let arr = [1,2,3,4,5];
arr[99] = 99;
console.log(arr);*/

// Shows value 100 (last index +1) inspite of empty value between 5 and 99.
/*let arr = [1,2,3,4,5];
arr[99] = 99;
console.log(arr.length);
*/

//
/*for (i=0; i < arr.length; i++)
    console.log(arr[i]);
*/
//let arr = ["first", 2, 3, "four", 5];

// Request with Callback feature. in sintax first goes looping element, then name, then massiv?
/*arr.forEach(function(item, i, mass) {
    console.log(i + ": " + item + "(kucha:" + mass + ")" );
});8?


// Cycle for off goes through the element we are in. It does not work in objects
// Could be use in arrays, strings and only object in a new standard.
// here we are asking for keys of the array
/*let mass = [1,3,4,6,7];

for (let key in mass) {
    console.log(key);
}

// here we are asking for values of the array

for (let key of mass) {
    console.log(key);
}
*/
/*
// Creates separator for values of the arrays
let ans = prompt("", "");
    arr = [];

arr = ans.split(',');
console.log(arr);
*/
// use this for sending array as one string (to a server for example)
/*let arr = ["aawe", "adslkfj", "al;dkfj", "aldjf"],
   i = arr.join(', ');
    console.log(arr);
    console.log(i);
*/

    // To sort array use the following option. No problems with strings
/*let arr = ["aawe", "adslkfj", "al;dkfj", "aldjf"],
    i = arr.sort();
    console.log(arr);
*/
    // To sort correctly with number we need to have a callback function
    let arr = [1,15,4],
    i = arr.sort(compareNum);

    function compareNum(a,b) {
        return a-b;
    }

    console.log(arr);



