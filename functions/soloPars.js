function main() {
  // Declarar un array de objetos
  const arrayObjetos = [
    { texto: "hola", unNumero: 1 },
    { texto: "mundo", unNumero: 2 },
    { texto: "javascript", unNumero: 3 },
    { texto: "array", unNumero: 4 },
    { texto: "objeto", unNumero: 5 },
    { texto: "propiedad", unNumero: 6 },
    { texto: "valor", unNumero: 7 },
    { texto: "programa", unNumero: 8 },
    { texto: "funcion", unNumero: 9 },
    { texto: "variable", unNumero: 10 },
    { texto: "codigo", unNumero: 11 },
    { texto: "logica", unNumero: 12 },
    { texto: "estructura", unNumero: 13 },
    { texto: "elemento", unNumero: 14 },
    { texto: "condicion", unNumero: 15 },
    { texto: "bucle", unNumero: 16 },
    { texto: "console", unNumero: 17 },
    { texto: "debug", unNumero: 18 },
    { texto: "evento", unNumero: 19 },
    { texto: "clase", unNumero: 20 },
  ];

  // Llamar a la función que filtra los objetos pares
  const resultado = filtrarObjetosPares(arrayObjetos);

  // Mostrar el resultado por consola
  console.log(resultado);
}

function filtrarObjetosPares(array) {
  const resultado = [];

  // Recorrer el array de objetos
  for (let i = 0; i < array.length; i++) {
    const objeto = array[i];

    // Verificar si el número dentro del objeto es par
    if (objeto.unNumero % 2 === 0) {
      resultado.push(objeto);
    }
  }

  return resultado;
}

main();
