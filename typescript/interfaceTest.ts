interface User {
  userName: string;
  name: string;
  password: string;
  age?: number;
  email?: string;
  pass: boolean;
  genere: string;
}

const doki8: User = {
  userName: "Doki8",
  name: "Pepe",
  password: "aaida",
  age: 23,
  pass: false,
  genere: "Male",
};

function showUser(user: User) {
  console.log(
    `username: ${user.userName}, name ${user.name}` +
      (user.age ? `, Edad ${user.age}` : "") +
      (user.pass ? `, Pase Habilitado` : ", No habilitado") +
      (user.genere === "Male" ? `, Genero Hombre` : `Genero Mujer`)
  );
}

showUser(doki8);
