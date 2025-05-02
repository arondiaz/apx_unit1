class Carrera {
  nombre: string;

  constructor(nombreCarrera: string) {
    this.nombre = nombreCarrera;
  }

  getNombre() {
    return this.nombre;
  }
}

class Facultad {
  nombre: any;
  carreras: Carrera[];

  constructor(nombreFacultad: string) {
    this.nombre = nombreFacultad;
    this.carreras = [];
  }

  agregarCarrera(carrera: Carrera) {
    return this.carreras.push(carrera);
  }

  getCarreras() {
    return this.carreras;
  }
}

class Universidad {
  facultades: Facultad[];

  constructor(facultades: Facultad[]) {
    this.facultades = facultades;
  }

  agregarCarreraAFacultad(nombreFacultad: string, carrera: Carrera) {
    const agregarFacu = this.facultades.find((f) => f.nombre == nombreFacultad);

    if (agregarFacu) {
      return agregarFacu.agregarCarrera(carrera);
    }
  }

  getCarrerasPorFacultad(nombreFacultad: string) {
    for (const facu of this.facultades) {
      if (facu.nombre == nombreFacultad) {
        return facu.getCarreras();
      }
    }
    return [];
  }
}

function testUniversidad() {
  const ingenieria = new Facultad("Facultad de Ingeniería");
  const humanidades = new Facultad("Facultad de Humanidades");

  const universidad = new Universidad([ingenieria, humanidades]);

  const carrera1 = new Carrera("Ingeniería Informática");
  const carrera2 = new Carrera("Ingeniería Civil");
  const carrera3 = new Carrera("Filosofía");

  universidad.agregarCarreraAFacultad("Facultad de Ingeniería", carrera1);
  universidad.agregarCarreraAFacultad("Facultad de Ingeniería", carrera2);
  universidad.agregarCarreraAFacultad("Facultad de Humanidades", carrera3);

  const carrerasIng = universidad.getCarrerasPorFacultad(
    "Facultad de Ingeniería"
  );
  const carrerasHum = universidad.getCarrerasPorFacultad(
    "Facultad de Humanidades"
  );
  const carrerasFake = universidad.getCarrerasPorFacultad("Facultad Fantasma");

  if (
    carrerasIng.length === 2 &&
    carrerasIng[0].getNombre() === "Ingeniería Informática" &&
    carrerasHum.length === 1 &&
    carrerasHum[0].getNombre() === "Filosofía" &&
    Array.isArray(carrerasFake) &&
    carrerasFake.length === 0
  ) {
    console.log("✅ testUniversidad passed");
  } else {
    throw new Error("❌ testUniversidad failed");
  }
}

testUniversidad();
