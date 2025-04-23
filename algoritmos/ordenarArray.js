// function ordernarElArray(arrayOriginal) {
//   for (let i = 0; i < arrayOriginal.length - 1; i++) {
//     for (let x = 0; x < arrayOriginal.length - 1; x++) {
//       if (arrayOriginal[x] > arrayOriginal[x + 1]) {
//         let aux = arrayOriginal[x];
//         arrayOriginal[x] = arrayOriginal[x + 1];
//         arrayOriginal[x + 1] = aux;
//       }
//     }
//   }

//   return arr;
// }

// const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));

// console.log(ordernarElArray(arr));




function bubbleSortSinOptimizacion(arr) {
    let iteraciones = 0;
    const array = [...arr]; // Copiamos para no modificar el original
  
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        iteraciones++;
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  
    return { array, iteraciones };
  }
  
  function bubbleSortOptimizado(arr) {
    let iteraciones = 0;
    const array = [...arr];
  
    for (let i = 0; i < array.length - 1; i++) {
        //optimizacion, -i para NO comparar con el que ya esta ordenado al final.
      for (let j = 0; j < array.length - 1 - i; j++) {
        iteraciones++;
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  
    return { array, iteraciones };
  }
  
  // Crear un array grande aleatorio (ej: 100 elementos entre 1 y 1000)
  const arrayGrande = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
  
  // Probar ambas versiones
  const resultadoSinOpt = bubbleSortSinOptimizacion(arrayGrande);
  const resultadoOpt = bubbleSortOptimizado(arrayGrande);
  
  console.log("🔁 Iteraciones sin optimización:", resultadoSinOpt.iteraciones);
  console.log("⚡ Iteraciones con optimización:", resultadoOpt.iteraciones);
  