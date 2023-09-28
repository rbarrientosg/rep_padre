const { login } = require("../hijo1/app.js");

const auth = {
  Usuario: "admin",
  Contraseña: "1234",
};

const persona = {
  Nombre: "Chacnhito",
  Edad: 19,
  Direccion: "Calle 45",
};

if (login(auth)) {
  console.log("Bienvenido " + persona.Nombre + " al sistema");
} else {
  console.log("Login incorrecto");
}
