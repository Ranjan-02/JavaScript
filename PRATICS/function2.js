// my Skill===============
console.log("CSS");
console.log("HTML");
console.log("BOOSTRAP");
console.log("Tailwinds");
console.log("javaScript");

// myslill================
console.log("css");
console.log("html");
console.log("javascript");
console.log("boostrap");
console.log("tailwind");

// myskill======================

console.log("css");
console.log("html");
console.log("javascript");
console.log("boostrap");
console.log("tailwinds");


// ==================  Function Come to the pictures  =================================

// function key Word
//   👇
//   👇  name of Function(mySkill)
//   👇      👇
function mySkill(){                     //Declear the Function
    console.log("HTML");                //==================
    console.log("CSS");                 //=================
    console.log("boostrap");            //Function Body
    console.log("tailWinds");           //==================
    console.log("javaScript");          //==================
    console.log("React in Processing");
    console.log("============");        //===================

}

mySkill();                              //calling the Function

mySkill();                              //calling the Function

mySkill();                              //calling the Function

mySkill();                              //calling the Function


// ==================Function Parametar and Argument===========================

//YourSkill name function (Skill,skill2) is "Parametar"
//parametat like is just variable to store the data
//
function YourSkill(name,skil1,skill2){              //name,skill1,skill2 are 
    console.log(name + " Skill is " + skil1 + "," +skill2);//parametar
};

YourSkill("anirban","css","html");   //anirban,css,html are argument

function yoursHobby(name,hobby1,hobby2,hobby3){
    console.log(name + " my Hobby is " + hobby1+","+hobby2+","+hobby3);
}
yoursHobby("Debdash","cricket","football","buy lottary");//debdash,cricket,football,buy
                                                        //lotary are Argument
                                                        //argument alaways to inject ""(cotation)


function BestBook(name,book1,book2){
    console.log(name +" "+"Fabarate Book"+" "+book1+","+book2);
    let name = "anurag";
} 

let name1 = "depesh";
let book1 = "history";
let book2 = "Bengali"           //function argument provied not only string value use Such  variable 
BestBook(name1,book1,book2);    //like name1,book1,book2 are variable                      


// ==============================Function Return===========================

function sum(number1,number2){
    let sum = number1+number2;
    return sum;
}
let storeSum = (3,5);
console.log(storeSum);


// =========================Arrow Function=================================

let arrowFunction = () =>{
    console.log("arrowFunction is vary simple");
}
arrowFunction();


let aditionWithArrowFan = (num1,num2) =>{
    let add = num1+num2;
    return add;
}
let storeadd = aditionWithArrowFan(3,6);
console.log(storeadd);