const os = require("os");

// Obtenemos la cantidad total de memoria RAM del sistema
const totalMemoria = os.totalmem();
console.log(os.platform());
console.log(os.release());
console.log(os.cpus());
console.log(os.networkInterfaces());

// Mostramos la cantidad total de memoria RAM por consola
console.log(`La cantidad total de memoria RAM es ${totalMemoria} bytes`);
