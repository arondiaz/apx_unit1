// Array de teléfonos celulares con nombre y precio
const telefonos = [
    { nombre: "Samsung Galaxy S21", precio: 799 },
    { nombre: "iPhone 13", precio: 999 },
    { nombre: "Google Pixel 6a", precio: 449 },
    { nombre: "Xiaomi Redmi Note 12", precio: 299 },
    { nombre: "OnePlus Nord CE 3 Lite", precio: 329 },
    { nombre: "Motorola Moto G Stylus", precio: 199 },
  ];
  
  // Presupuesto disponible
  let presupuesto = 500;
  
  // Mostrar los teléfonos dentro del presupuesto
  let index = 0;
  
  let telefonosDentroDePresupuesto = [];
  let indiceAux = 0;
  
  while (index < telefonos.length) {
    const tel = telefonos[index];
    if (tel.precio <= presupuesto) {
      // Completá la siguiente lógica
      // 1. Cuando encontramos un teléfono dentro del presupuesto, lo añadimos al array `telefonosDentroDePresupuesto`.
      telefonosDentroDePresupuesto.push((telefonos[index]));
      indiceAux++;
      // 2. Usamos el índice `indiceAux` para llevar el control de la posición en el array de acumulación.
      // 3. Incrementamos `indiceAux` para asegurarnos de que el siguiente teléfono se guarde en la siguiente posición del array.
    }
    index++;
  }
  
  // Al finalizar deberías ver los teléfonos dentro del presupuesto
  console.log("Teléfonos dentro de presupuesto", telefonosDentroDePresupuesto);