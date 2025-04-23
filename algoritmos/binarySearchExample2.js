var listaDeNumeros = [1, 3, 6, 98, 105, 209, 987, 1024];

function busquedaBinaria(numeros, busqueda){
  var desde = 0;
  var ultimaPosicion = numeros.length - 1;
  var hasta = ultimaPosicion;

  while(desde <= hasta) {
    var laMitad = Math.floor((desde + hasta) / 2);
    var numeroDelMedio = numeros[laMitad];
    if(numeroDelMedio == busqueda){
      return laMitad;
    }
    if(numeroDelMedio > busqueda){
      hasta = laMitad - 1;
    } else {
      desde = laMitad + 1;
    }
  }
  return -1;
}

const donde = busquedaBinaria(listaDeNumeros, 987);

console.log("encontrado en la posición " + donde, listaDeNumeros[donde]);