
function main() {
    const args = process.argv.slice(2);
  
    const argsObject = argsController(args, {
      create: {
        mainArgRequired: false,
        requiredArgs: ["title", "price"],
        resolver: createController
      },
      get: {
        mainArgRequired: true,
        resolver: getController
      },
      update: {
        mainArgRequired: true,
        requiredArgs: ["title", "price"],
        resolver: updateController
      },
      del: {
        mainArgRequired: true,
        resolver: delController
      }
    });
  
    if (argsObject.error) {
      console.error(argsObject.error);
    }
  }
  
  main();
  
  // Este es el controlador que tenés que trabajar
  /**
   * Procesa los argumentos y devuelve un objeto con la información del comando o un error.
   * @param {string[]} args - Lista de argumentos de la CLI.
   * @param {Object} commandsMap - Mapa de comandos disponibles y sus configuraciones.
   * @returns {{ command?: string, mainArg?: string, argsObject?: Object, error?: string }} - Resultado del procesamiento.
   */
  function argsController(args, commandsMap) {

    const commandName = args.length > 0 ? args[0] : null;
    if (!commandName) {
      return { error: "Faltó el comando." };
    }
    const commandConfig = commandsMap[commandName];
  
    if (!commandConfig) {
      return { error: `Comando desconocido: ${commandName}` };
    }
  
    let mainArg = null;
    const argsObject = {};
  
    let i = 1;
    if (commandConfig.mainArgRequired) {
      if (!args[i] || args[i].startsWith("--")) {
        return {
          error: `El comando '${commandName}' requiere un argumento principal.`,
        };
      }
      mainArg = args[i];
      i++;
    }
  
    while (i < args.length) {
      const current = args[i];
  
      if (current.startsWith("--")) {
        const key = current.substring(2);
        const next = args[i + 1];
  
        if (next && !next.startsWith("--")) {
          argsObject[key] = next;
          i++; // Saltamos el valor ya procesado
        } else {
          argsObject[key] = true; // Flag sin valor explícito
        }
      }
  
      i++;
    }
  
    if (commandConfig.requiredArgs) {
      const missingArgs = commandConfig.requiredArgs.filter(
        (arg) => !(arg in argsObject)
      );
  
      if (missingArgs.length > 0) {
        return {
          error: `Faltan argumentos requeridos para el comando '${commandName}': ${missingArgs.join(
            ", "
          )}`,
        };
      }
    }
    if (commandConfig.mainArgRequired) {
      commandConfig.resolver(mainArg, argsObject);
    } else {
      commandConfig.resolver(argsObject);
    }
  
    return { command: commandName, mainArg, args: argsObject };
  }
    /*
    PASO A PASO PARA RESOLVER EL PROBLEMA:
    
    1. Validación inicial:
       - Verificamos si se proporcionaron argumentos (`args`). Si no hay argumentos, devolvemos un error indicando que no se proporcionó ningún comando.
       - Extraemos el nombre del comando (`commandName`) del primer argumento (`args[0]`).
       - Comprobamos si el comando existe en el mapa de comandos (`commandsMap`). Si no existe, devolvemos un error indicando que el comando es desconocido, por ejemplo:
       - Si el comando es `foo` y no existe en el mapa, devolvemos el error `return { error: `Unknown command: foo` };`.
  
    2. Validación del argumento principal:
       - Inicializamos `mainArg` como `null` y creamos un objeto `argsObject` para almacenar los argumentos adicionales.
       - Si el comando requiere un argumento principal (`commandConfig.mainArgRequired`), verificamos si el siguiente argumento (`args[1]`) existe y no comienza con `--` (indicador de opción o flag).
       - Si no se proporciona el argumento principal cuando es requerido, devolvemos un error indicando que falta.
       - Si se encuentra el argumento principal, lo almacenamos en `mainArg` y avanzamos al siguiente índice (`i++`).
  
    3. Procesamiento de argumentos adicionales:
       - Iteramos a través de los argumentos restantes (`args[i]`).
       - Si el argumento actual comienza con `--`, lo consideramos como una opción o flag.
       - Verificamos si el siguiente elemento no es otra opción (`--`) para tratarlo como un valor asociado a la opción actual.
       - Si no hay un valor asociado, asumimos que es un flag booleano y lo asignamos como `true`.
  
       Ejemplo:
       ```bash
       node app.js comando --opcion valor --flag
       Resultado esperado: { opcion: "valor", flag: true }
       ```
  
    4. Verificación de argumentos requeridos:
       - Si el comando tiene argumentos requeridos (`commandConfig.requiredArgs`), revisamos si todos están presentes en `argsObject`.
       - Si falta algún argumento requerido, devolvemos un error indicando cuáles faltan.
  
    5. Ejecución del comando:
       - Ejemplo de invocación de `resolver` con `mainArg`:
         `commandConfig.resolver(mainArg, argsObject);`
       - Ejemplo de invocación de `resolver` sin `mainArg`:
         `commandConfig.resolver(argsObject);`
       
  
    6. Retorno de resultado:
       - Si todo se procesa correctamente, devolvemos un objeto con el nombre del comando, el argumento principal (si aplica) y los argumentos adicionales procesados.
       - Ejemplo de retorno: `{ command: "update", mainArg: "id-123", argsObject: { title: "Departamento", price: 15000 } }`
    */
  
  
  
  // Todo lo que viene a continuación está mockeado
  // Esto es para entender la estructura general y no hace mucho más
  // Más adelante trabajaremos en estas partes
  
  // Controllers (mock)
  
  function createController(args) {
    const newProp = createPropModel(args);
    showPropView(newProp);
    return newProp;
  }
  
  function getController(mainArg) {
    const prop = getProp(mainArg);
    showPropView(prop);
    return prop;
  }
  
  function updateController(mainArg, args) {
    const updatedProp = updateProp(mainArg, args);
    showPropView(updatedProp);
    return updatedProp;
  }
  
  function delController(mainArg) {
    const result = deleteProp(mainArg);
    console.log("Propiedad eliminada con éxito");
    return result;
  }
  
  // Modelos (mock)
  
  /**
   * Crea una nueva propiedad en la base de datos y la devuelve.
   */
  function createPropModel(data) {
    return { id: Math.floor(Math.random() * 1000), ...data };
  }
  
  /**
   * Elimina una propiedad de la base de datos según su ID y devuelve el resultado.
   */
  function deleteProp(id) {
    return { id, status: "deleted" };
  }
  
  /**
   * Actualiza una propiedad en la base de datos según su ID y devuelve la versión actualizada.
   */
  function updateProp(id, data) {
    return { id, ...data, updatedAt: new Date().toISOString() };
  }
  
  /**
   * Obtiene una propiedad de la base de datos según su ID y la devuelve.
   */
  function getProp(id) {
    return { id, title: "Sample Title", price: 100, createdAt: new Date().toISOString() };
  }
  
  // Views (mock)
  function showPropView(prop) {
    if (Array.isArray(prop)) {
      console.table(prop);
    } else {
      console.table([prop]);
    }
  }
  
  // Tests
  function testArgsController() {
    const commandsMap = {
      create: {
        mainArgRequired: false,
        requiredArgs: ["title", "price"],
        resolver: () => { },
      },
      get: {
        mainArgRequired: true,
        resolver: () => { },
      },
      update: {
        mainArgRequired: true,
        resolver: () => { },
      },
      del: {
        mainArgRequired: true,
        resolver: () => { },
      },
    };
  
    const tests = [
      { command: ["create", "--title", "Departamento", "--price", "15000"], expectedError: false },
      { command: ["create", "--title", "Departamento"], expectedError: true },
      { command: ["get", "id-123"], expectedError: false },
      { command: ["get"], expectedError: true },
      { command: ["update", "id-123", "--precio", "300000"], expectedError: false },
      { command: ["del", "id-123"], expectedError: false },
      { command: ["del"], expectedError: true },
    ];
  
    tests.forEach(({ command, expectedError }, index) => {
      const result = argsController(command, commandsMap);
      const hasError = Boolean(result.error);
      console.log(`Test ${index + 1}: ${hasError === expectedError ? '✅' : '❌'} - Comando: ${command.join(" ")}`);
    });
  }
  
  // Descomentá esta linea parar correr los tests y probar tu argsController
  // testArgsController();