// crear las clases Edificio, Piso y Departamento aquí

class Departamento1 {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }

  getName() {
    return this.nombre;
  }
}

class Piso1 {
  nombre: string;
  departamentos: Departamento1[];

  constructor(nombrePiso: string) {
    this.nombre = nombrePiso;
    this.departamentos = [];
  }

  pushDepartamento(departamento: Departamento1) {
    return this.departamentos.push(departamento);
  }

  getDepartamentos() {
    return this.departamentos;
  }
}

class Edificio1 {
  pisos: Piso1[];
  constructor(pisos: Piso1[]) {
    this.pisos = pisos;
  }

  addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento1) {
    for (const p of this.pisos) {
      if (p.nombre == nombreDePiso) {
        p.pushDepartamento(departamento);
        return true;
      }
    }
  }

  getDepartamentosByPiso(nombreDePiso: string) {
    for (const p of this.pisos) {
      if (p.nombre == nombreDePiso) {
        return p.getDepartamentos();
      }
    }
    return [];
  }
}

// no modificar este test
function testClaseEdificio() {
  const unPiso = new Piso1("planta baja");
  const otroPiso = new Piso1("primer piso");
  const unEdificio = new Edificio1([unPiso, otroPiso]);
  const deptoUno = new Departamento1("depto uno");
  const deptoDos = new Departamento1("depto dos");
  const deptoTres = new Departamento1("depto tres");
  unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
  unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
  unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

  const deptos = unEdificio.getDepartamentosByPiso("planta baja");
  const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

  if (
    Array.isArray(deptosEmpty) &&
    deptosEmpty.length == 0 &&
    deptos.length == 3 &&
    deptos[2].getName() == "depto tres"
  ) {
    console.log("testClaseBandaApartment passed");
  } else {
    throw "testClaseBandaApartment not passed";
  }
}

function main() {
  testClaseEdificio();
}
main();
