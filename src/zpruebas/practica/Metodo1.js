
/*
    - El '{key}' se toma como objeto, si se le pasa un objeto
    con clave "key" el resultado sera el valor de dicha clave.
    (si el argumento no es un object con clave "key" -> toma por
    defecto {key:null})

    - key2 -> {key2: null} es su valor por defecto
    */
function sumar({ key } = { key: null }, key2 = { key2: null },) {
    console.log(key)
    console.log(key2)
}

/*
    - El 'key' -> {key:null} es el valor por defecto
    
    - El key2 lo toma como un objeto con clave "key2" 
    (Si al llamar a la funcion no se declara el objeto con la clave "key2", retornara undefined)

    */
function sumar2({ key = { key2: null } }, { key2 } = { key: null }) {
    console.log(key)
    console.log(key2)
}

/*
si es {key2} o {key={key2:null}} -> lo que retorna sera el valor de
dicha clave 
*/
//{key2} -> el argumento debe ser un objeto o retornara undefined.
//{key={key2:null}} -> debe ser un objeto o tomara como defecto a {key2:null}
//key={key2:null}-> {key2:null} es su default value (el argumento puede ser cualquier tipo de dato).


/*
    - El "key" -> debe ser object(con clave "key") o tomara como default el "3"
    - El "key2" -> debe ser object(con clave "key2") o retornara undefined
    */
function sumar4({ key = 3 }, { key2 } = 5) {
    console.log(key)
    console.log(key2)
}

//Scope -> que nivel de acceso tiene cada variable en una parte de un codigo.

function sumar3(a, b, c) {
    //Arguments, contiene los valores de los argumentos de la funcion
    //No funciona en array functions
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
}

export { sumar, sumar2, sumar4, sumar3 }