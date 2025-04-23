// function obtenerNumerosPares(numeros) {
//     const numerosPares = [];
//     for (let i = 0; i < numeros.length; i++) {
//       if (numeros[i] % 2 === 0) {
//         numerosPares.push(numeros[i]);
//       }
//     }
//     return numerosPares;
//   }

const obtenerNumerosPares = (numeros) => numeros.filter((numero) => numero % 2 === 0);

const arrNumeros = [1, 2, 3, 4, 5, 6];
console.log(obtenerNumerosPares(arrNumeros));
