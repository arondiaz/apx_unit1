const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function playTrivia(quest, index = 0, score = 0) {
  if (index < quest.length) {
    const q = quest[index];
    console.log(q);
    console.log(`\nPregunta ${index + 1}: ${q.question}`);
    q.options.forEach((option) => console.log(option));

    rl.question("Tu respuesta (ingresa el número): ", (respuesta) => {
      if (parseInt(respuesta) === q.answer) {
        console.log("\x1b[32m¡Correcto!\x1b[0m");
        score++;
      } else {
        console.log("\x1b[31mIncorrecto.\x1b[0m");
      }
      playTrivia(quest, index + 1, score); // Llamar recursivamente para la siguiente pregunta
    });
  } else {
    console.log(`\nTu puntuación final es: ${score} de ${quest.length}`);
    rl.close();
  }
}

module.exports = playTrivia;
