const personas = [
    {
      nombre: "Vicky",
      edad: 30,
    },
    {
      nombre: "Fede",
      edad: 25,
    },
  ];
  
  // resultado debe ser true o false
  const resultado = personas[0].edad > personas[1].edad;
  
  console.log(
    `${personas[0].nombre} es mayor a ${personas[1].nombre}?`,
    resultado
  );
  {
  }
  
  
  
  const supermercado = [
      "Caja",
      "Estantería",
      {
        frutas: ["Manzana", "Banana", "Naranja"],
        verduras: ["Lechuga", "Zanahoria", "Brócoli"],
      },
      {
        carnicería: {
          vacuno: "Bife",
          cerdo: "Costillas",
          pollo: "Pechuga",
        },
        pescadería: ["Salmón", "Merluza", "Atún"],
      },
      {
        limpieza: {
          productos: [
            { nombre: "Detergente", precio: 350 },
            { nombre: "Lavandina", precio: 250 },
          ],
          marcas: ["Cloralex", "Mr. Músculo"],
        },
      },
    ];
  
    console.log(supermercado[2].verduras[2]);
    
  
    const mi = process.argv[2]
  
    const saludo = "Hola "
  
    console.log(saludo + mi);