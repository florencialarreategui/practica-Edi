//ahorcado
let palabrasParaJugar= ["roca","sopa","estereotipo","monitor","alpargata","ojota","programa"];
let palabraRandom="";
//pide nombre?
alert ('Bienvenidos al Ahorcado! Solo tenes 7 intentos, vamos a jugar!');







function seleccionarPalabraRandom (array,string){//aca iria el arreglo y elije la palabra me esta mandandostring
    for (let i =0; i<=array.length; i++){
        let palabraAleatoria= Math.floor(Math.random ()*(array.length));
        string=array[palabraAleatoria]
    }return (string);
}
seleccionarPalabraRandom (palabrasParaJugar,palabraRandom);
//function contarLetrasPalabraRandom// o hacemos todas las palabras de mismas letras
//cuenta las letras ya devuelve los guiones?
// palabraAdivinar = palabraAleatoria.split('');
//for (let letra of palabraAdivinar) {
  //  palabraMostrar.push('_');

//function intentos ()toma del prompt si letra esta (ver metodo si es mejor en string o array)
//la funcion va en un arreglo de 1 a 7, if letra esta imp ubic , sino imp dibujo
//letras prbadas
//fallidas
//intentos descontar 