///////////////////////////////////////
// Lecture: Hoisting

// functions
console.log(calculateAge(1965));
function calculateAge(year) {
  return 2018 - year;
}

// console.log(retirement(1990)); // Here does not work
var retirement = function(year) {
  return 65 - calculateAge(year);
};

console.log(retirement(1990));

// variables
console.log(age);
var age = 23;

function foo() {
  console.log(age2);
  var age = 65;
  console.log(age);
}
foo();
console.log(age);

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/


// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/


///////////////////////////////////////
// Lecture: The this keyword


