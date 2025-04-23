// const fs = require("fs");

// fs.readFile("/testNode.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });



const fs = require('fs');

// Leemos el archivo 'ejemplo.txt'
fs.readFile('/testNode.txt', 'utf8', (err, data) => {
  if (err) throw err;
  // Mostramos el contenido del archivo por consola
  console.log(data);
});