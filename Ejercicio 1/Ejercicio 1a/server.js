const inputInterface = require('readline-sync');
const calculator = require("./calculator");

let inputOperation = inputInterface.question("Ingresa: ");

console.log("El resutado es", calculator(inputOperation))