const { login } = require("../hijo1/app.js");

const auth = {
  Usuario: "chanchito",
  Contraseña: "feliz",
};

const persona = {
  Nombre: "Juan",
  Edad: 20,
  Direccion: "Calle 1",
};

if (login(auth)) {
  console.log("Bienvenido " + persona.Nombre + " al sistema");
} else {
  console.log("Login incorrecto");
}
