//SOLUCION PROFESOR 
Ejercicio propuesto en las transparencias
*/

entrada = prompt("Introduce tu nombre y apellidos");
console.log("El nombre introducido es: " + entrada);

// El tamaño del nombre más los apellidos (sin contar espacios)
console.log("El tamaño del nombre y apellidos sin espacios es de: " 
        + entrada.split(" ").join("").length);
         
//también valdría un replaceAll
console.log("El tamaño del nombre y apellidos sin espacios es de: " 
        + entrada.replaceAll(" ","").length); 

// La cadena en minúsculas y en mayúsculas
console.log("Minus: " + entrada.toLowerCase());
console.log("Mayus: " + entrada.toUpperCase());

/* Que divida el nombre y los apellidos y los muestr en 3 líneas
 * donde ponga "Nombre: /nApellido 1:/nApellido2:"
 */
 var elementosEntrada = entrada.split(" ");
 console.warn(elementosEntrada);
 console.log("Nombre: " + elementosEntrada[0] +
         "\nApellido 1: " + elementosEntrada[1] + 
         "\nApellido 2: " + elementosEntrada[2]);

// Propuesta de nombre de usuario -> davidfg
console.log("Propuesta de nombre 2: " +
elementosEntrada[0].toLowerCase() +
(elementosEntrada[1])[0].toLowerCase() + 
(elementosEntrada[2])[0].substring(0,1).toLowerCase()); 

// Propuesta de nombre de usuario -> dafega
console.log("Propuesta de nombre 3: " +
(elementosEntrada[0]).substr(0,2).toLowerCase() +
(elementosEntrada[1]).substr(0,2).toLowerCase() + 
(elementosEntrada[2]).substr(0,2).toLowerCase()); 

// Propuesta de contrasena

function creaPassword(nombre){
var resultado="";
for (let i=0;i<nombre.length; i++){
        resultado+=nombre.charAt(i)+i;
}
return resultado;
}

console.log("Propuesta de contraseña"+creaPassword(elementosEntrada[0]));