const express = require('express');
const app = express();


// configuracion del servidor 
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// rutas 
app.use(require('./Routes/ventas'));
app.use(require('./Routes/produccion'));
app.use(require('./Routes/cliente'));
app.use(require('./Routes/empleado'));
app.use(require('./Routes/inventario'));

//empezando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });

