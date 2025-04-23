const args = process.argv; // Obtenemos los argumentos

function reading(params) {
  const argsObject = {};

  for (let i = 2; i < params.length; i++) {
    if (params[i].startsWith("--") && params[i + 1]) {
        console.log(params[i + 1]);
      argsObject[params[i].slice(2)] = params[i + 1]; // Agregamos al objeto
    }
  }

  return argsObject;
}

console.log(reading(args));
