// class Libro {
//   titulo: string;
//   autor: string;
//   añoPublicacion: number;

//   constructor(titulo: string, autor: string, añoPublicacion: number) {
//     this.titulo = titulo;
//     this.autor = autor;
//     this.añoPublicacion = añoPublicacion;
//   }

//   getAntiguedad() {
//     const añoActual = new Date().getFullYear();
//     const antiguedad = añoActual - this.añoPublicacion;
//     return antiguedad;
//   }

//   mostrarInfo() {
//     console.log(
//       `Titulo ${this.titulo}, autor ${this.autor}, año publicacion ${
//         this.añoPublicacion
//       }, antiguedad ${this.getAntiguedad()}.`
//     );
//   }
// }

// const libro1 = new Libro("Manual de Vida", "Epicteto", 2000);
// const libro2 = new Libro("Meditaciones", "Marco Aurelio", 2014)
// libro1.mostrarInfo();
// libro2.mostrarInfo();

class Libro {
  titulo: string;
  autor: string;
  año: number;

  constructor(titulo: string, autor: string, año: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
  }

  getAntiguedad(): number {
    const año = new Date().getFullYear() - this.año;

    return año;
  }

  getMostrarInfo() {
    console.log(
      `Titulo ${this.titulo}, Autor ${this.autor}, Año ${this.getAntiguedad()}.`
    );
  }
}

const libro1 = new Libro("Estoico", "Romeo", 1999);
libro1.getMostrarInfo();

const libro2 = new Libro("Java Completo", "Mark", 2020);
libro2.getMostrarInfo();
