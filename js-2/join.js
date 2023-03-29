//4. Crear una función join que reciba un arreglo y retorne un string con todos los elementos separados por espacio sin usar el método join de los arreglos.

function join(array){        
    let cadena = "";
    for (let i = 0; i < array.length; i ++) {
        if(i === array.length - 1){             //verificamos si el indice actual corresponde al último elemento
            cadena = cadena + array[i]
        }else{
            cadena = cadena + array[i]  + " "
        }
    }
    return cadena
}

console.log(join(["Juan", "come", "carne"]))    // Juan come carne
console.log(join([10, 9, 8, 7, 6, 5, 4]))       // 10 9 8 7 6 5 4