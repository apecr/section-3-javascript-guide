///////////////////////////////////////
// Lecture: Hoisting

// functions

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

// console.log(this);

// function calculateAge(yearOfBirth) {
//   console.log(this);
//   return 2018 - yearOfBirth;
// }
// console.log(calculateAge(1990));

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);

    // function innerFunction() {
    //   // It will log the global object
    //   console.log(this);
    // }
    // innerFunction();
    return 2018 - this.yearOfBirth;
  }
};

john.calculateAge();


var mike = {
  name: 'Mike',
  yearOfBirth: 1984
};

console.log(john.calculateAge.apply(mike));
