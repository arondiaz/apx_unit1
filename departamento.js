const propiedad = {
    id: 20001,
    titulo: "Casa con jardín en las afueras",
    descripcion: "Hermosa casa con amplio jardín y pileta.",
    tipo: "casa",
    precio: 950,
    ubicacion: {
      direccion: "Calle Los Álamos 456",
      ciudad: "Córdoba",
      provincia: "Córdoba",
      pais: "Argentina",
      codigoPostal: "X5000",
    },
    superficie: 120,
    habitaciones: 3,
    banos: 2,
    amenities: ["Parrilla", "Pileta"],
    servicios: ["Luz", "Gas", "Agua"],
    propietario: {
      nombre: "Carlos Pérez",
      telefono: "+54 9 351 789-4567",
      email: "carlos@example.com",
    },
    diasPublicado: 20,
    visitas: 100,
    destacado: false,
  };

// lo más prolijo es usar variables auxiliares para evaluar cada condicion
const esDepa = propiedad.tipo === "departamento";
// lo mismo con el resto de las condiciones
const precio = propiedad.precio < 1000;

const habitaciones = propiedad.habitaciones >= 2;

const metros = propiedad.superficie >= 80;

const diasPublicado = propiedad.diasPublicado < 7;

// luego usamos un if para chequear todas las condiciones
if (esDepa && precio && habitaciones && metros && diasPublicado) {
  console.log(`Esta propiedad ${propiedad.id} cumple con todas las condiciones!!`);
  console.log(
    `Contacto: ${propiedad.propietario.nombre}   ${propiedad.propietario.telefono}   ${propiedad.propietario.email} `
  );
} else if (esDepa && precio && habitaciones) {
  console.log(`Esta propiedad ${propiedad.id} cumple`);
  console.log(
    `Contacto: ${propiedad.propietario.nombre}   ${propiedad.propietario.telefono}   ${propiedad.propietario.email} `
  );
} else {
  console.log(`Esta propiedad ${propiedad.id} NO cumple con todas las condiciones`);
  console.log(
    `Contacto: ${propiedad.propietario.nombre}   ${propiedad.propietario.telefono}   ${propiedad.propietario.email} `
  );
  // completar la lógica
  // acá hacen falta varios ifs para mostrar las condiciones que no se cumplieron
}
