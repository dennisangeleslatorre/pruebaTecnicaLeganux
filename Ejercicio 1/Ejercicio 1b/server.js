const inputInterface = require('readline-sync');

const claculateMaxEvenSum = (values) => {
    //Limpiamos los datos
    let containLetters = false;
    let cleanInput = values.replace(/ /g, "");
    for ( let caracter of cleanInput) {
        let ascii = caracter.toUpperCase().charCodeAt(0);
        //La V es el caracter de raiz
	    if(ascii > 64 && ascii < 91) containLetters = true;
    }
    //Si la cadena contiene letras devolver error
    if(containLetters) return "Las letras no estan permitidas";
    const valuesArray = values.split(",").map(item => Number(item));
    console.log("valuesArray", valuesArray)
    //Se deben sumar todos los pares positivos
    const sumEven = [...valuesArray].filter(item => (item%2 === 0 && item>0)).reduce((acc, cv) => acc + cv, 0);
    //Obetenemos los numeros impares
    const oddNumbers = [...valuesArray].filter(item => item%2 !== 0);
    //Si la cantidad de impares no es par eliminamos uno
    const sumOdd = calculateMaxOddSum(oddNumbers);
    return sumEven + sumOdd;
}

const calculateMaxOddSum = (oddNumbers) => {
    const resultsArray = [];
    oddNumbers.sort((a,b) => {
        return b-a;
    })
    //Suma todos los impares si la cantidad es para si no eliminas uno
    let totalOdd = [...oddNumbers];
    if(totalOdd.length %2 !== 0) {
        totalOdd.pop();
    }
    resultsArray.push(totalOdd.reduce((acc, cv) => acc + cv, 0));
    //Sumas los impares quitanto todos los negativos y un valor positivo si la cantidad de numeros es impar
    let maximumSumWithoutNegatives = [...oddNumbers].filter(item => item > 0);
    if(maximumSumWithoutNegatives.length %2 !== 0) {
        maximumSumWithoutNegatives.pop();
    }
    resultsArray.push(maximumSumWithoutNegatives.reduce((acc, cv) => acc + cv, 0));
    //Sumas los impares positivos y agregas el menor ultimo negativos si la cantidad es impar
    let maximumSumWithNegatives = [...oddNumbers].filter(item => item > 0);
    if(maximumSumWithNegatives.length %2 !== 0) {
        maximumSumWithNegatives.push(oddNumbers[maximumSumWithNegatives + 1]);
    }
    resultsArray.push(maximumSumWithNegatives.reduce((acc, cv) => acc + cv, 0));
    //Devolver el mayor resultado
    return resultsArray.sort((a,b) => {
        return b-a;
    })[0]
}

//Ejemplo 2, 3, 6, -5, 10, 1, 1
var inputValues = inputInterface.question("Ingrese numeros separados por ',': ");

console.log(claculateMaxEvenSum(inputValues));