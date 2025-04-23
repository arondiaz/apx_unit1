const palos = ["♥️", "♦️", "♣️", "♠️"];
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const mazo = [];
let indiceGeneral = 0;

for (let i = 0; i < palos.length; i++) {
  const palo = palos[i];

  // Acá tenés que usar otro for para recorrer
  // los valores y generar cada carta

  // [tu lógica]
  for (const valor of valores) {
    //mazo.push(`${valor} de ${palo}`);
  }
}

// es lo mismo cual es el orden en el que elegimos poner que array recorrer primero, solo va a cambiar el orden, quizas en este caso es mejor la eleccion de recorrer primero los palos como en el caso de la solucion de arriba.
//Ya que con éste primero va a generar todas las cartas A con todos los palos, preferencia de como se genera.

for (let i = 0; i < valores.length; i++) {
  const valor = valores[i];

  for (const palo of palos) {
    mazo.push(`${valor} de ${palo}`);
  }
}

console.log(mazo);
