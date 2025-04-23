function unaFuncion(num1, num2) {
  let result = num1 + num2;
  return result;
}

function otraFuncion() {
  return "yes";
}

function main() {
  const a = unaFuncion(2, 3);
  const b = otraFuncion();

  console.log(a, b);
}

main();
