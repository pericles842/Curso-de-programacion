/*Las variables guardan datos que usaremos durante la ejecucion del codigo,
una suma una resta un numero muchas frutas UN DATO etc*/

//fíjate como GUARDO 19 en la variable 'miEdad'
var miEdad = 19;
//ahora mi edad es igual 19
// ¿y por que no colocamos 19 directamente?

var miEdad = 20
var resultadoEdad = miEdad

/*ahora mi edad ya no es 19 si no 20, no colocamos el 19 porque el 19 puede variar puede ser cualquier
 otro numero pero lo importante es lo que representa en este caso representa mi edad */

/*En la programación existen las llamadas 'palabras claves' en este caso la palabra clave para definir
 una variable es 'var', 'let', 'const' veamos cual es la diferencia */
var variable1 = 5;
let variable2 = 5;
/* La principal diferencia entre let y var en JavaScript es cómo manejan el alcance de las variables y su asignación
cuando Estes mas avanzado lee este articulo https://www.freecodecamp.org/espanol/news/var-let-y-const-cual-es-la-diferencia/ 
*/

//al usar const estas asumiendo que ya no es una variable sino una constante por lo cual su valor no se puede cambiar
const variable3 = 10
//en este caso variable10 siempre sera 10 y si intentas cambiarlo de dará error


/*
imagínate que tienes una frutería y quieres guardar tus frutas, es muy tedioso guardar... 
*/
var manzana = 'manzana'
var pera = 'pera'
var fresa = 'fresa'
var patilla = 'patilla'
//imagínate si tendrías 50 frutas, para resolver eso tenemos algo llamado Arreglo,

var frutas = ['manzana', 'pera', 'fresa', 'patilla'];
//ahora literalmente frutas contiene ... frutas
// dentro de lo [] va a ir los elementos que quieras guardar estos pueden ser numeros o palabras, separados con coma
    
var numeros = [123, 2, variable1, miEdad]; //fijate el uso de nuestras variables 

//puedes tener arreglos dentro de arreglos por ejemplo...
var cosas = [frutas, numeros, 'peluche'] //este arreglo contiene frutas numeros ademas de un peluche 





