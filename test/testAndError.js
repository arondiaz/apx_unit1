function contarPalabras(texto) {
  // Dividimos el texto en palabras utilizando espacios en blanco como delimitadores
  const palabras = texto.trim().split(" ");
  // Devolvemos la cantidad de palabras
  return palabras.length;
}

// Función de prueba
function testContarPalabras() {
  const texto = " Esta es una prueba de contar palabras ";

  const resultado = contarPalabras(texto);

  // Verificamos los resultados
  if (resultado === 7) {
    console.log("testContarPalabras funciona correctamente");
  } else {
    console.error("testContarPalabras falló en la prueba");
    console.error("Se esperaban 7 palabras y se obtuvo", resultado);
  }
}

testContarPalabras();
