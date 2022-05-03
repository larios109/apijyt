const bcrypt = require('bcrypt');

const encryptarContrasena = (contrasena) => {
        return  bcrypt.hash(contrasena, 10);
}

module.exports = { encryptarContrasena };