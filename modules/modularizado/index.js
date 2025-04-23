const questions = require("./questions.js");
const playTrivia = require("./game.js");

function main() {
  console.log("¡Bienvenido a la Trivia de Node.js!");
  playTrivia(questions);
}

main();
