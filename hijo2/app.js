const { login } = require("../hijo1/app.js");

const auth = {
  Usuario: "chanchito",
  Contraseña: "feliz",
};

if (login(auth)) {
  console.log("Login correcto");
} else {
  console.log("Login incorrecto");
}
