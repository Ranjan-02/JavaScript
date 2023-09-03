// let userputBoolean = undefined;
// console.log(typeof userputBoolean);

// let ConversionBoolean = Boolean(userputBoolean)
// console.log(`datatype ====>${typeof ConversionBoolean}; value ====>${ConversionBoolean}`);



// console.log(typeof 0 >= typeof null);

// console.log(0 >= null);
// console.log(0 > null);
// console.log(0 == null);

// non-primitive type

let obj = {
    name: "hitesh choudhuri",
    age: 34,
    isLogedIn: false
}
console.log(typeof obj);//output :- datatype--object

let superHero = ["ironman", "saktiman", "thor", "hela"]
console.log(typeof superHero);//output :- datatype--object

let myAttitude = function () {
    console.log("do not distrub");
}
console.log(typeof myAttitude); //output :- datatype--function(object function)

let userValue = null;
console.log(typeof userValue);//output :- datatype--object