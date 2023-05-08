const prompt= require('prompt-sync')()
// var name;
// name= prompt("Enter you name: ")
// age= prompt("Enter your age: ")
// console.log("your name is ", name)
// console.log("your age is ", age)

// a= parseInt(prompt("Enter a: "))
// b= parseInt(prompt("Enter b: "))
// sum=a+b;
// console.log("The Sum is ", sum)     

let i= parseInt(prompt("Enter the number: "))
if(i % 2 == 0){
    console.log("The number is even")
}
else {
    console.log("The number is odd")
}