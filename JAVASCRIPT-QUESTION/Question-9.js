let x = undefined;
let y = 0;
let z = '';

if(x){
    console.log('truthy');
}
else if(y){
    console.log('tuthy');
}
else if(z){
    console.log('truthy');
}
else{
    console.log('all are falsy');
}


let a ='hello';
let b =1; 
let c = [];

if(a){
    console.log('truthy');
    
}
else{
    console.log('falsy');
}
 if(b){
    console.log('truthy');
}
else{
    console.log('falsy');
}
 if(c) {
    console.log('truthy');
}
else{
    console.log(' falsy');
}
// 👇 output-----------
// all are falsy
// truthy
// truthy
// truthy