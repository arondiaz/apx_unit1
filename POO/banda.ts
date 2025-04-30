// // CONSIGNA: Completar la clase Banda
// // en base a al test (testClaseBanda)
// interface Album {
//   title: string;
//   songs: string[];
// }

// class Banda {
//   // Propiedad que almacena los miembros de la banda
//   members: string[];
//   // definir albums - agregar una propiedad para los álbumes de la banda
//   albums: Album[];
//   // Constructor que inicializa los miembros y los álbumes
//   constructor(members: string[], albums: Album[]) {
//     this.members = members;
//     // Inicializar la propiedad albums con el valor recibido en el constructor
//     this.albums = albums;
//   }

//   // Implementar el método getFirstAlbum para retornar el primer álbum de la lista
//   getFirstAlbum(): Album {
//     return this.albums[0];
//   }

//   // Implementar el método getAllMembers para retornar todos los miembros de la banda
//   getAllMembers(): string[] {
//     return this.members;
//   }

//   // Implementar el método getRandomSong para retornar una canción aleatoria de un álbum específico
//   getRandomSong(albumTitle: string) {
//     const album: any = this.albums.find((album: any) => {
//       if (album.title == albumTitle) {
//         return true;
//       }
//     });

//     if (!album) {
//       return null;
//     }

//     const posicion = Math.random() * album.songs.length;
//     const posRedondeada = Math.floor(posicion);
//     return album.songs[posRedondeada];
//   }
// }

// // No modifiques el test
// // usalo como una guía y chequeo
// // para saber que tu clase Banda funciona correctamente

// function testClaseBanda() {
//   const members = ["dana", "pau"];

//   const fa = {
//     title: "album 1",
//     songs: ["album 1 - tema 1", "album 1 - tema 2"],
//   };

//   const banda = new Banda(members, [
//     fa,
//     {
//       title: "album 2",
//       songs: ["album 2 - tema 1", "album 2 - tema 2", "album 2 - tema 3"],
//     },
//   ]);

//   // Validar que getFirstAlbum no retorne undefined
//   const firstAlbum = banda.getFirstAlbum();
//   if (!firstAlbum) {
//     throw "Error: getFirstAlbum() retornó undefined";
//   }

//   // Validar que el primer álbum tenga la estructura correcta
//   if (
//     firstAlbum.title !== fa.title ||
//     !Array.isArray(firstAlbum.songs) ||
//     firstAlbum.songs.length !== fa.songs.length
//   ) {
//     throw "Error: getFirstAlbum() no retorna el álbum esperado";
//   }

//   // Validar que getAllMembers retorne correctamente los miembros
//   const allMembers = banda.getAllMembers();
//   if (
//     !Array.isArray(allMembers) ||
//     JSON.stringify(allMembers.sort()) !== JSON.stringify(members.sort())
//   ) {
//     throw "Error: getAllMembers() no retorna los miembros esperados";
//   }

//   // Validar que getRandomSong retorne una canción válida de "album 1"
//   const randomSongAlbum1 = banda.getRandomSong("album 1");
//   if (!randomSongAlbum1 || !fa.songs.includes(randomSongAlbum1)) {
//     throw "Error: getRandomSong() no retornó una canción válida del álbum 1";
//   }

//   // Validar que getRandomSong maneje álbumes inexistentes
//   try {
//     const invalidSong = banda.getRandomSong("album inexistente");
//     if (invalidSong !== null) {
//       throw "Error: getRandomSong() debería retornar null si el álbum no existe";
//     }
//   } catch (e) {
//     throw "Error: getRandomSong() no debería lanzar una excepción con un álbum inexistente";
//   }

//   console.log("testClaseBanda passed");
// }

// function main() {
//   // Ejecutar el test

//   //  const bandaPrueba = new Banda(
//   //    ["Pepe", "Rico"],
//   //    [
//   //      { title: "1", songs: ["q", "w", "e"] },
//   //      { title: "2", songs: ["m", "n", "l"] },
//   //    ]
//   //  );
//   // console.log(bandaPrueba);
//   // console.log(bandaPrueba.getFirstAlbum());
//   // console.log(bandaPrueba.getAllMembers());
//   //console.log(bandaPrueba.getRandomSong("1"));
//   testClaseBanda();
// }

// main();

/**
 * REVIEW
 *
 */

// CONSIGNA: Completar la clase Banda
// en base a al test (testClaseBanda)
class Banda {
  // Propiedad que almacena los miembros de la banda
  members: string[];
  // definir albums - agregar una propiedad para los álbumes de la banda
  albums: any;
  // Constructor que inicializa los miembros y los álbumes
  constructor(members: string[], albums: any) {
    this.members = members;
    // Inicializar la propiedad albums con el valor recibido en el constructor
    this.albums = albums;
  }

  // Implementar el método getFirstAlbum para retornar el primer álbum de la lista
  getFirstAlbum() {
    return this.albums[0];
  }

  // Implementar el método getAllMembers para retornar todos los miembros de la banda
  getAllMembers() {
    return this.members;
  }

  // Implementar el método getRandomSong para retornar una canción aleatoria de un álbum específico
  getRandomSong(albumTitle: any) {
    for (const album of this.albums) {
      if (album.title == albumTitle) {
        const index = album.songs.length;
        const random = Math.floor(Math.random() * index);
        return album.songs[random];
      } else {
        return null;
      }
    }
  }
}

// No modifiques el test
// usalo como una guía y chequeo
// para saber que tu clase Banda funciona correctamente

function testClaseBanda() {
  const members = ["dana", "pau"];

  const fa = {
    title: "album 1",
    songs: ["album 1 - tema 1", "album 1 - tema 2"],
  };

  const banda = new Banda(members, [
    fa,
    {
      title: "album 2",
      songs: ["album 2 - tema 1", "album 2 - tema 2", "album 2 - tema 3"],
    },
  ]);

  // Validar que getFirstAlbum no retorne undefined
  const firstAlbum = banda.getFirstAlbum();
  if (!firstAlbum) {
    throw "Error: getFirstAlbum() retornó undefined";
  }

  // Validar que el primer álbum tenga la estructura correcta
  if (
    firstAlbum.title !== fa.title ||
    !Array.isArray(firstAlbum.songs) ||
    firstAlbum.songs.length !== fa.songs.length
  ) {
    throw "Error: getFirstAlbum() no retorna el álbum esperado";
  }

  // Validar que getAllMembers retorne correctamente los miembros
  const allMembers = banda.getAllMembers();
  if (
    !Array.isArray(allMembers) ||
    JSON.stringify(allMembers.sort()) !== JSON.stringify(members.sort())
  ) {
    throw "Error: getAllMembers() no retorna los miembros esperados";
  }

  // Validar que getRandomSong retorne una canción válida de "album 1"
  const randomSongAlbum1 = banda.getRandomSong("album 1");
  if (!randomSongAlbum1 || !fa.songs.includes(randomSongAlbum1)) {
    throw "Error: getRandomSong() no retornó una canción válida del álbum 1";
  }

  // Validar que getRandomSong maneje álbumes inexistentes
  try {
    const invalidSong = banda.getRandomSong("album inexistente");
    if (invalidSong !== null) {
      throw "Error: getRandomSong() debería retornar null si el álbum no existe";
    }
  } catch (e) {
    throw "Error: getRandomSong() no debería lanzar una excepción con un álbum inexistente";
  }

  console.log("testClaseBanda passed");
}

function main() {
  // const bandaTest = new Banda(
  //   ["Pepe", "Mario"],
  //   [
  //     { title: "Los Perios", songs: ["Marta, te quiero", "Pepe"] },
  //     { title: "Segundo", songs: [{}] },
  //   ]
  // );
  // console.log(bandaTest.getFirstAlbum());
  // console.log(bandaTest.getAllMembers());
  // console.log(bandaTest.getRandomSong("Los Perios"));
  // Ejecutar el test
  testClaseBanda();
}

main();
