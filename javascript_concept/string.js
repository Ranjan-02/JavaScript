//  String Mathod

let myName = new String("Ranjan Maji");
console.log(myName.__proto__);

// console.log(myName.charAt(myName.length - 1));

// return inddutual carectar by index no
const myString = "ranjan";

console.log(myString.blink());
//  <blink>ranjan</blink> 
console.log(myString.big());
//  <big>ranjan</big>
console.log(myString.bold());
// <b>ranjan</b>

// charAt Mathod

let alfhabate = "ABCDEFGHIJ";
let index = alfhabate.length - 1;
console.log(alfhabate.charAt(index));

// concate

let myFirstName = "Iron";
let lastName = " Man";
let getNewString = (myFirstName.concat(lastName));//Return a new string
// Iron Man

let usingSplit = "ironman"
// console.log((usingSplit.split()));


