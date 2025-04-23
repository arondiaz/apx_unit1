function binarySearch(arr, target) {
    // Inicializar variables
    let left = 0;
    let right = arr.length - 1;
  
    // Bucle de búsqueda
    while (left <= right) {
      // Calcular el índice del valor medio
      const mid = Math.floor((left + right) / 2);

      // Si el valor medio es igual al valor buscado, devolver el índice
      if (arr[mid] === target) {
        return mid;
      }
  
      // Si el valor buscado es menor que el valor medio, buscar en la mitad izquierda
      if (target < arr[mid]) {
        right = mid - 1;
      }
  
      // Si el valor buscado es mayor que el valor medio, buscar en la mitad derecha
      else {
        left = mid + 1;
      }
    }
  
    // Si el valor no se encuentra, devolver -1
    return -1;
  }
  
  // Ejemplo de uso
  const arr = [1, 3, 5, 7, 9];
  const target = 5;
  
  const result = binarySearch(arr, target);
  console.log(result); // 2
  