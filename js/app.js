// let numOne = 5;
// let numTwo = 5;

function calc(numOne,numTwo) {
    return console.log(
        `
        Suma: ${numOne}+${numTwo} = ${numOne+numTwo}
        Resta: ${numOne}-${numTwo} = ${numOne-numTwo}
        Multiplicacion: ${numOne}*${numTwo} = ${numOne*numTwo}
        Division: ${numOne}/${numTwo} = ${numOne/numTwo}
        `
    )
}
calc(10,5)
calc(5,5)
calc(3,7)