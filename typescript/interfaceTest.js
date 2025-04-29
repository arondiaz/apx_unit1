var doki8 = {
    userName: "Doki8",
    name: "Pepe",
    password: "aaida",
    age: 23,
    pass: false,
    genere: "Male",
};
function showUser(user) {
    console.log("username: ".concat(user.userName, ", name ").concat(user.name) +
        (user.age ? ", Edad ".concat(user.age) : "") +
        (user.pass ? ", Pase Habilitado" : ", No habilitado") +
        (user.genere === "Male" ? ", Genero Hombre" : "Genero Mujer"));
}
showUser(doki8);
