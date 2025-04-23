function transformarFrase(frase) {
  //
  const fraseMayuscula = frase.map((palabra) => {
    const primeraLetra = palabra.charAt(0).toUpperCase();

    const resto = palabra.slice(1).toLowerCase();

    return primeraLetra + resto;
  });

  const resultado = fraseMayuscula.join(" ");

  return resultado;
}

const oracion = [
  "la",
  "vida",
  "es",
  "hermosa",
  "voy",
  "a",
  "conseguir",
  "trabajo",
];

console.log(transformarFrase(oracion));
