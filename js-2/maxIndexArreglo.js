//3. Crea una función maxIndex que reciba una arreglo de números y retorne el índice donde se encuentra el mayor. Si el arreglo está vacío debe retornar -1.

function maxIndex(array){        
    let mayor = array[0];
    let indice = 0
    for (let i = 0; i < array.length; i ++) {
        if(array[i] > mayor){
            mayor = array[i]
            indice = i
        }
    }
    if(array.length === 0){
        return -1
    }
    return indice
}

console.log(maxIndex([1, 3, 2]))                // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]))   // 0
console.log(maxIndex([]))                       // -1