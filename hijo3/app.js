const { login } = require("../hijo1/app.js");

const auth = {
  Usuario: "admin",
  Contraseña: "1234",
};

if (login(auth)) {
  console.log("Login correcto");
} else {
  console.log("Login incorrecto");
}
