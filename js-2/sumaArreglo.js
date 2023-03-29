//1. Crea una función sum que reciba un arreglo de números y retorne la suma de todos los elementos:

function sum(array){        //toma como parámetro o argumento una variable llamada array (o toma como parámetro o argumento un arreglo llamado array)
    let total = 0;
    for (let i = 0; i < array.length; i ++) {
        total = total + array[i]
    }
    return total
}

console.log(sum([1, 2, 3]))         // 6
console.log(sum([10, 8, 12, 5]))    // 35
console.log(sum([]))                // 0