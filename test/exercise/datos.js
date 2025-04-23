const fs = require("fs");

const rawData = fs.readFileSync("./datos.json");
const data = JSON.parse(rawData);

function getAll() {
  return data;
}

function getOlderThan(number) {

  const filtrado = data.filter((p) => p.edad > number);
  return filtrado;
}
// getOlderThan(30);

module.exports = {
  getAll,
  getOlderThan,
};
