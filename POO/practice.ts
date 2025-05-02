class Libro {
  titulo: string;

  constructor(titulo: string) {
    this.titulo = titulo;
  }

  getTitulo() {
    return this.titulo;
  }
}

class Seccion {
  nombre: string;
  libros: Libro[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.libros = [];
  }

  agregarLibro(libro: Libro) {
    return this.libros.push(libro);
  }

  getLibros() {
    return this.libros;
  }
}

class Biblioteca {
  secciones: Seccion[];

  constructor(secciones: Seccion[]) {
    this.secciones = secciones;
  }

  agregarLibroASeccion(nombreSeccion: string, libro: Libro) {
    for (const s of this.secciones) {
      if (s.nombre == nombreSeccion) {
        s.agregarLibro(libro);
      }
    }
  }

  getLibrosPorSeccion(nombreSeccion: string) {
    for (const s of this.secciones) {
      if (s.nombre == nombreSeccion) {
        return s.getLibros();
      }
    }
    return [];
  }
}

function testBiblioteca() {
  const ficcion = new Seccion("Ficción");
  const ciencia = new Seccion("Ciencia");
  const biblioteca = new Biblioteca([ficcion, ciencia]);

  const libro1 = new Libro("1984");
  const libro2 = new Libro("Fahrenheit 451");
  const libro3 = new Libro("El origen de las especies");

  biblioteca.agregarLibroASeccion("Ficción", libro1);
  biblioteca.agregarLibroASeccion("Ficción", libro2);
  biblioteca.agregarLibroASeccion("Ciencia", libro3);

  const librosFiccion = biblioteca.getLibrosPorSeccion("Ficción");
  const librosCiencia = biblioteca.getLibrosPorSeccion("Ciencia");
  const librosInexistente = biblioteca.getLibrosPorSeccion("Historia");

  if (
    librosFiccion.length === 2 &&
    librosFiccion[0].getTitulo() === "1984" &&
    librosCiencia.length === 1 &&
    librosCiencia[0].getTitulo() === "El origen de las especies" &&
    Array.isArray(librosInexistente) &&
    librosInexistente.length === 0
  ) {
    console.log("✅ testBiblioteca passed");
  } else {
    throw new Error("❌ testBiblioteca failed");
  }
}

testBiblioteca();
