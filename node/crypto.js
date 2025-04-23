const crypto = require('crypto');

// Creamos un hash MD5 de la cadena de texto 'ejemplo'
const hash = crypto.createHash('md5').update('ejemplo').digest('hex');

// Mostramos el hash por consola
console.log(hash);