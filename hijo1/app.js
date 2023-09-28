const auth = {
  Usuario: "admin",
  Contraseña: "1234",
};

function login(authExternal) {
  return (
    auth.Usuario === authExternal.Usuario &&
    auth.Contraseña === authExternal.Contraseña
  );
}

module.exports = { login };
