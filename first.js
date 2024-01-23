// //this code prnts hello world
// /*console.log("hello world");
// /*i am new to javascript and i want to learn it
// restart*/
// //arithmetic operator
// /*let a = 5;
// let b = 2;

// console.log("a =", a, "b =", b );
// console.log("a + b =", a + b); */
// /*let num = prompt("enter a number");

// if (num % 5 === 0){
//     console.log(num, "is multiple of 5");
// }else{
//     console.log(num, "is not a multiple of 5");
// }*/
// //loops

// /*for (let i = 1; i <= 5; i++){
//     console.log("ashish");
// }
// console.log("loop has ended");*/

// //calculate sum of 1 to 5 

// /*let sum = 0;
// let n = 9;
// for (let i = 1; i <= n; i++ ){
//     sum = sum + i;
// }
// console.log("sum = ", sum);
// console.log("loop has ended");*/

// // let i = 1;
// // do{
// //     console.log("i =", i);
// //     i++;
// // }while (i <= 5);
// let str = "ASHISH PRADHAN";
// // for(let i of str){ 
// //     console.log("i =", i);
// // }
// //print all even number from 0 to 100.

// // for (let num = 0; num<=100;num++){
// //     if(num%2 === 0){
// //         console.log("num =", num);
// //     }
// // }

// //Create a game where you can start with any random number.
// //Ask the user to keep guessing  the number until the user enters correct value.
// // let gameNum = 25;
// // let userNum = prompt("Guess the number :");
// // while(userNum != gameNum){
// //    userNum = prompt("You entered the wrong number ! Guess the number again :");
// // }
// // console.log("Congratulations, You entered the right number")


// let fullName = prompt("enter your full name ");

// let username = "@" + fullName + fullName.length;
// console.log(username);

/*for a given array with set of marks -> [85,97,44,37,76,60]
Find the average marks of the entire class*/

// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for (let val of marks){
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);

/*For a sum of array with a given price of 5 items -> [250,645,300,900,50]
All items have an offer of 10% off on them .change the array to store price
 after applying offer*/

//  let items =[250,645,300,900,50];
//  let i = 0;
//  for (let val of items){
//     //console.log(`Value at index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`Value after offer = ${items[i]}`);
//     i++;
//  }


//array methods
// let veg =["potato","brinjal","tomato","redish"];
//  veg.push("cucumber");
//  console.log(veg);
//  console.log(veg.toString()); 


//Functions in Java script

// function Myfunction() {
//     console.log("Welcome to my world");
//     console.log("I am learning JS");
// }

// Myfunction();
// Myfunction();

//functon of 2 number

// function sum(x,y){
//     s = x + y ;
//     return s;
//     let val = sum(3,4);
//     console.log(val);
// }

/* Create a function using the function keyword 
that takes an argument and returns the number of 
vowels in the string*/

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//     if(char === "a" || char ==="e" || char ==="i" || char ==="o" || char ==="u"){
//         count++;
//     }
//     }
//     return count;
// }

//forEach


// let num = [1,2,3,4,5];
// let newArray = num.map((val) => {
//     return val;
// })
// console.log(newArray);
// num.forEach((num) => {
//  console.log(num*num);   
// });



// let arr = [1,2,3,4,5,6,7,8,9]
// let evenArray = arr.filter((val) => {
//     return val >3;
// })
// console.log(evenArray);


// let n = prompt("Enter a number :");
// let arr = [];

// for (let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// let sum = arr.reduce((res,curr)=>{
//     return res + curr;
// });
// console.log(sum);
// let factorial = arr.reduce((res,curr)=>{
//     return res * curr;
// });
// console.log(factorial); 

// DOCUMENT OBJECT MODEL -- DOM --

// console.log("hello");
// window.console.log("heelo2");
// window.alert("hello"); 

/*
console.log --> print code
console.dir --> print document properties and methods
*/
console.dir(document);


let heading = document.getElementById("heading");
console.log(heading);
console.dir(heading);

let heading1 = document.getElementsByClassName("heading2");
console.log(heading1);
console.dir(heading1);

let h2 = document.querySelector("h2");

console.dir(h2.innerText);

h2.innerText = h2.innerText + "from Apna College Students";

let divs = document.querySelectorAll(".box");
console.log(divs);
