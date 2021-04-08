//---Tema Arreglos Parte 2

var concatenaN1 = ["Hola", "Buenas", "Tardes"];
var concatenaN2 = ["Adiós", "Buenas", "Noches"];
var concatenacionFinal = concatenaN2.concat(concatenaN1);
//console.log( concatenacionFinal);

// Método sort
//Ordenar los elementos de un arreglo y devolver el arreglo ordenado
//nombreArreglo1.sort();
var frutasN1 = [ "Mandarina", "Piña", "Sandia", "Durazno" ];
var frutasN2 = [ "Mandarina", "Piña", "Pera", "Durazno" ];
var arregloNumeros = [ 5000, 10, 200, 1000, 400 ];

frutasN1.sort();
console.log( frutasN1 );

frutasN2.sort();
console.log( frutasN2 );

//arregloNumeros.sort();
//console.log( arregloNumeros );


/* Ciclos - For
for(inicialización ; expresión; incremento){
    instrucciones
}*/
console.log("Hola - Forma Manual");
console.log("Hola - Forma Manual");
console.log("Hola - Forma Manual");

for( var i = 10; i < 2; i-- ){
    console.log( "Hola - Forma automática, " + "i= " + i);
}

//console.log( arregloNumeros[4] );
for( var j = 0; j < arregloNumeros.length; j++ ){
    console.log( "El valor del arreglo en la posición " 
    + j + " es: " + arregloNumeros[j] );
}