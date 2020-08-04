// Shows unexpecte printout of the result (2 first, 1 second)
/*function first() {
    //что-то делаем
    setTimeout( function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();
*/
// info prints out with a delay in half of a second
function first(callback) {
    //что-то делаем
    setTimeout( function() {
        console.log(1);
        callback();
    }, 500);
}

    first(function(){
        console.log(2)
    });
  
    
// info prints out without delay
    function first(callback) {
        //что-то делаем
        console.log(1);
            callback();
    }

        first(function(){
            console.log(2);
        });
  
      

// Two aguments in call back function. Called back called within the function
function learnJS(lang, callback) {
    console.log("I\'m learning " + lang);
    callback();
}

learnJS("JavaScript", function() {
    console.log("I passed lesson 3");
});


// Same function with different coding. Called back called outside the function
function learnJS(lang, callback) {
    console.log("I\'m learning " + lang);
    callback();
}

function done() {
    console.log("I passed lesson 3");
}

learnJS("JavaScript", done);





