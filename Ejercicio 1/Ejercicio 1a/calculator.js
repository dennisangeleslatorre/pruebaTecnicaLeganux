//Funcion claculadora
const calculator = (inputOperation) => {
    if(inputOperation.length > 30) return "La cadena ingresada es mayor a 30";
    let containLetters = false;
    let cleanInput = inputOperation.replace(/ /g, "");
    //Define la variable que se devuelve
    let operatingResult = 0;
    //recorre el string
    for ( let caracter of cleanInput) {
        let ascii = caracter.toUpperCase().charCodeAt(0);
        //La V es el caracter de raiz
	    if(ascii > 64 && ascii < 91 && caracter !== "V") containLetters = true;
    }
    //Si la cadena contiene letras devolver error
    if(containLetters) return "Las letras no estan permitidas";
    //Separamos los elementos en un array
    let itemsOperation = inputTextToArrayElements(cleanInput);
    operatingResult = calculateOperations(itemsOperation);
    return Number(operatingResult[0]);
}


const inputTextToArrayElements = (cleanInput) => {
    const itemsOperation = [];
    for ( let caracter of cleanInput) {
        if(itemsOperation.length === 0 ) itemsOperation.push(caracter);
        else if(!isNaN(caracter) && !isNaN(itemsOperation[itemsOperation.length-1])) {
            itemsOperation[itemsOperation.length-1] = `${itemsOperation[itemsOperation.length-1]}${caracter}`
        }
        else itemsOperation.push(caracter)
    }
    return itemsOperation;
}

const calculateOperations = (itemsOperation) => {
    //Buscamos raices y potencias
    let sqrtAndPowerResults =  executeOperations(itemsOperation, ["V", "^"]);
    //Buscamos divisiones y multiplicaciones
    let divisionAndMultiplyResults = executeOperations(sqrtAndPowerResults, ["/", "*"]);
    //Buscamos sumas y restas
    let sumAndSubtractResults = executeOperations(divisionAndMultiplyResults, ["+", "-"]);
    return sumAndSubtractResults;
}

//Funcion para obtener el indice de los operadores
const getIndex = (items, operations) => {
    return items.findIndex((element) => {if(element === operations[0] || element === operations[1]) return element});
}

//Funcion que ejecuta las operaciones y calcula los resultados
const executeOperations = (items, operations) => {
    const found = getIndex(items, operations);
    if(found >= 0) {
        switch (items[found]) {
            case "V":
                items[found] = Math.sqrt(Number(items[found + 1]));
                items.splice(found+1, 1);
                break;
            case "^":
                items[found] = Math.pow(Number(items[found-1]), Number(items[found+1]));
                items.splice(found+1, 1);
                items.splice(found-1, 1);
                break;
            case "/":
                items[found] = Number(items[found-1]) / Number(items[found+1]);
                items.splice(found+1, 1);
                items.splice(found-1, 1);
                break;
            case "*":
                items[found] = Number(items[found-1]) * Number(items[found+1]);
                items.splice(found+1, 1);
                items.splice(found-1, 1);
                break;
            case "+":
                items[found] = Number(items[found-1]) + Number(items[found+1]);
                items.splice(found+1, 1);
                items.splice(found-1, 1);
                break;
            case "-":
                items[found] = Number(items[found-1]) - Number(items[found+1]);
                items.splice(found+1, 1);
                items.splice(found-1, 1);
                break;
        };
        items = executeOperations(items, operations);
    }
    return items;
}

//Se exporta el modulo para usarlo en el server o en calculator.test
module.exports = calculator;