// const filterByLength = (arr, n) => {
//   const result = [];
//   for (const word of arr) {
//     if (word.length >= n) {
//       result.push(word);
//     }
//   }
//   return result;
// };

const filterByLength = (arr, n) => arr.filter((word) => word.length >= n);

const arr = ["hola", "adios", "bienvenido", "chau"];
console.log(filterByLength(arr, 5)); // debería imprimir ["adios", "bienvenido"]
