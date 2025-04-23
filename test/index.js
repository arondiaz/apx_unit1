function sumarDosNumeros(num1, num2) {
  return num1 + num2;
}

function test() {
  const resultado = sumarDosNumeros(4, 5);
  if (resultado === 9) {
    console.log("SumarDosNumeros: test passed!");
  } else {
    throw "Not work!";
  }
}

function main() {
  const resultado = sumarDosNumeros(3, 5);
  test();
  console.log(resultado);
}

main();
