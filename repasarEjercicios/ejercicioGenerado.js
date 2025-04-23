/**
 * CONVERSACION Y EXPLICACION DE COMO FUNCIONA LA PARTE DEL BUCLE EXCELENTE!!
 * https://chatgpt.com/share/6805556c-157c-8003-8e9c-45b72de31b2d
 * 
 * 
 * 
 * 
 * 
 * 
 * 📘 Ejercicio: Seguimiento de libros por usuario, categoría y fecha
    Supongamos que tenés este objeto que representa qué libros leyó cada usuario, agrupados por categoría:
 * 
    🎯 Tu objetivo:
    Crear un nuevo objeto usersByCategoryAndBook con esta estructura:
    {
  fiction: {
    "The Hobbit": {
      alice: "2025-01-10",
      charlie: "2025-01-19"
    },
    "1984": {
      alice: "2025-01-12",
      bob: "2025-01-14"
    },
    ...
  },
  science: {
    "A Brief History of Time": {
      alice: "2025-01-15",
      charlie: "2025-01-23"
    },
    ...
  }
}



    🧠 Pistas:
    Recorre los usuarios.

    Dentro de cada usuario, recorre las categorías.

    Dentro de cada categoría, recorre los libros.

    Armá el nuevo objeto en ese orden:
    usersByCategoryAndBook[category][book][user] = fecha.


 */

const categorizedBooksByUser = {
  alice: {
    fiction: {
      "The Hobbit": "2025-01-10",
      1984: "2025-01-12",
    },
    science: {
      "A Brief History of Time": "2025-01-15",
    },
  },
  bob: {
    fiction: {
      1984: "2025-01-14",
      "Brave New World": "2025-01-16",
    },
    science: {
      Cosmos: "2025-01-18",
    },
  },
  charlie: {
    fiction: {
      "The Hobbit": "2025-01-19",
      "Brave New World": "2025-01-21",
    },
    science: {
      "A Brief History of Time": "2025-01-23",
    },
  },
};

const usersByCategoryAndBook = {};

for (const userId in categorizedBooksByUser) {
  for (const category in categorizedBooksByUser[userId]) {
    for (const book in categorizedBooksByUser[userId][category]) {
      if (!usersByCategoryAndBook[category]) {
        usersByCategoryAndBook[category] = {};
      }

      if (!usersByCategoryAndBook[category][book]) {
        usersByCategoryAndBook[category][book] = {};
      }

      usersByCategoryAndBook[category][book][userId] =
        categorizedBooksByUser[userId][category][book];
    }
  }
}

console.log(usersByCategoryAndBook);




/*
Cuando estás armando un objeto anidado como este:

usersByCategoryAndBook[category][book][userId] = ...;

Tenés que asegurarte de que cada nivel anterior exista antes de poder acceder al siguiente.



🚨 ¿Qué pasa si lo escribís así?
usersByCategoryAndBook[book][category][userId] = ...


Pero tus if de verificación están en este orden:

if (!usersByCategoryAndBook[category]) {
  usersByCategoryAndBook[category] = {};
}
if (!usersByCategoryAndBook[category][book]) {
  usersByCategoryAndBook[category][book] = {};
}

Entonces cuando después accedés a usersByCategoryAndBook[book], ese nivel no existe, porque vos creaste primero usersByCategoryAndBook[category]. Por eso da este error:

TypeError: Cannot set properties of undefined

✅ Regla de oro:
El orden en que accedés a las claves anidadas en la asignación, debe coincidir con el orden en que verificás y creás esos niveles.

Ejemplo concreto:

Si vas a hacer esto:

usersByCategoryAndBook[category][book][userId] = fecha;

Debés asegurarte antes:
if (!usersByCategoryAndBook[category]) {
  usersByCategoryAndBook[category] = {};
}
if (!usersByCategoryAndBook[category][book]) {
  usersByCategoryAndBook[category][book] = {};
}

Porque primero necesitás category, luego dentro de eso book, y dentro de eso userId.


*/