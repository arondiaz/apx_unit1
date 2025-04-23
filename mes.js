const informacionMensual = [
  {
    nombreDelMes: "Enero",
    cantidadDeDias: 31,
    eventoDelMes: "Año Nuevo",
  },
  {
    nombreDelMes: "Febrero",
    cantidadDeDias: 28,
    eventoDelMes: "Día de San Valentín",
  },
  {
    nombreDelMes: "Marzo",
    cantidadDeDias: 31,
    eventoDelMes: "Día Internacional de la Mujer",
  },
  {
    nombreDelMes: "Abril",
    cantidadDeDias: 30,
    eventoDelMes: "Pascua (varía cada año)",
  },
  {
    nombreDelMes: "Mayo",
    cantidadDeDias: 31,
    eventoDelMes: "Día del Trabajador",
  },
  {
    nombreDelMes: "Junio",
    cantidadDeDias: 30,
    eventoDelMes: "Día del Padre (algunos países)",
  },
  {
    nombreDelMes: "Julio",
    cantidadDeDias: 31,
    eventoDelMes: "Día de la Independencia (EE. UU.)",
  },
  {
    nombreDelMes: "Agosto",
    cantidadDeDias: 31,
    eventoDelMes: "Día Internacional de la Juventud",
  },
  {
    nombreDelMes: "Septiembre",
    cantidadDeDias: 30,
    eventoDelMes: "Día de la Independencia (México)",
  },
  {
    nombreDelMes: "Octubre",
    cantidadDeDias: 31,
    eventoDelMes: "Halloween",
  },
  {
    nombreDelMes: "Noviembre",
    cantidadDeDias: 30,
    eventoDelMes: "Día de los Muertos",
  },
  {
    nombreDelMes: "Diciembre",
    cantidadDeDias: 31,
    eventoDelMes: "Navidad",
  },
];

const arguments = Number(process.argv[2]) - 1;

//console.log(arguments);

const infoDelMes = informacionMensual[arguments];

console.log("Numero del mes:", arguments + 1);
console.log("Nombre del mes:", infoDelMes.nombreDelMes);
console.log("Dias", infoDelMes.cantidadDeDias);
console.log("Evento", infoDelMes.eventoDelMes);
