// function rendomPassword() {
//     let pass = ""
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

//     for (let i = 1; i <= length; i++) {
//         let char = Math.floor(Math.random() * str.length + 1)
//         pass += str.charAt(char)

//     }
//     console.log(pass);
//     console.log('ranjan');
// }
// rendomPassword();

// for (let i = 1; i < 10; i++) {
//     console.log(i);
// }
let letter = "abcdefghijklmn"
console.log(letter.length);
let rendomNumber = Math.floor(Math.random() * letter.length + 1);
console.log(rendomNumber);