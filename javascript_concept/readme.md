
# Number Conversion 

syntex
```js
let userProviedNumber = "somerthing"
let conversionNumber = Number(userProviedNumber)
```

```js
// conversion

let userProviedNumber = false;
let userNumber = Number(userProviedNumber)
console.log(`datatype====> ${typeof userNumber} ; value=====> ${userNumber}`);


 let userProviedNumber = 22;
//  datatype====> number ; value=====> 22

//  let userProviedNumber = "22";
//  datatype====> number ; value=====> 22

 let userProviedNumber = "22abc";
//  datatype====> number ; value=====> NaN

let userProviedNumber = "abc22";
//  datatype====> number ; value=====> NaN

let userProviedNumber = null;
//  datatype====> number ; value=====> 0

let userProviedNumber = undefined;
// datatype====> number ; value=====> NaN

let userProviedNumber = true;
// datatype====> number ; value=====> 1

let userProviedNumber = false;
// datatype====> number ; value=====> 0
```

# String Conversion


```js
let userProviedString = true;
let conversionString = String(userProviedString)
console.log(`datatype ===>${typeof conversionString}; value ===>${conversionString}`);


let userProviedString = "ranjan";
// datatype ===>string; value ===>ranjan

let userProviedString = 344;
// datatype ===>string; value ===>344

let userProviedString = abc23;
// ReferenceError: abc23 is not defined

let userProviedString = null;
// datatype ===>string; value ===>null

let userProviedString = undefined;
// datatype ===>string; value ===>undefined

let userProviedString = true;
datatype ===>string; value ===>true

```
# Non-Primitive Data type
In JavaScript, non-primitive data types are also known as reference data types or complex data types. These data types are not stored directly in variables; instead, they are stored by reference...

Example:-array,object,function

```js
// non-primitive type

let obj = {
    name: "iron man",
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
```
