function busquedaBinaria(arrayOrdenado, encontrar) {
  let inicio = 0; //primera posicion del array ordenado
  let final = arrayOrdenado.length - 1;

  while (inicio <= final) {
    const indiceDeLaMitadDelArray = Math.floor((inicio + final) / 2);
    const numeroDeLaMitad = arrayOrdenado[indiceDeLaMitadDelArray];

    if (numeroDeLaMitad === encontrar) {
      return indiceDeLaMitadDelArray;
    }

    if (numeroDeLaMitad > encontrar) {
      final = indiceDeLaMitadDelArray - 1;
      console.log("final" + final);
    } else {
      inicio = indiceDeLaMitadDelArray + 1;
      console.log("Inicio" + inicio);
    }
  }
  return -1;
}

let listaDeNumeros = [1, 3, 6, 98, 105, 209, 987, 1024];

const donde = busquedaBinaria(listaDeNumeros, 987);

console.log("encontrado en la posición " + donde, listaDeNumeros[donde]);
