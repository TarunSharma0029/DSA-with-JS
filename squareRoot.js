const prompt= require('prompt-sync')()
let num = parseInt(prompt("Enter the number: "))
let result= Math.sqrt(num)
console.log(`The square root of ${num} is ${result}`);