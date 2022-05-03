const express = require ('express');
const router = express.Router();
const mysqlconnection = require('../database');

/*************************************************************************************************
**************************************************************************************************
**************************************************************************************************
MODULO EMPLEADOS
**************************************************************************************************
**************************************************************************************************
**************************************************************************************************/
//TABLA ROL DE USUARIO
//SELECT DE TODOS LOS DATOS DE LA TABLA ROL DE USUARIO
router.get('/rol_usuario', (req, res) => {
    const query='CALL me_sel_todo_rol_usuario;'

    mysqlconnection.query(query, (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//SELECT DE LA TABLA ROL DE USUAIRO
router.get('/rol_usuario/:cod_rol', (req, res) => {
    const { cod_rol } = req.params;
    const query= 'CALL me_sel_rol_usuario (?);'

    mysqlconnection.query(query, [cod_rol], (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//DELETE TABLA ROL DE USUAIRO
router.delete('/rol_usuario/eliminar/:cod_rol',(req,res)=>{
    const {cod_rol}=req.params;
    const query= 'CALL me_del_rol_usuario (?);'

    mysqlconnection.query(query,[cod_rol],(err,
        rows,fields)=>{
            if(!err){
                res.json({status:'Registro eliminado'});
            }else{
                console.log(err);
            }
        });
});

//INSERT TABLA ROL DE USUARIO
router.post('/rol_usuario/insertar',(req,res)=>{
    const{cod_rol,tipo_rol} =req.body;
    const query= 'CALL me_ins_rol_usuario (?,?);'

    mysqlconnection.query(query,[cod_rol,tipo_rol],(err,rows,fields)=>{
if (!err){
    res.json({status: 'Registro guardado'});
}else{
    console.log(err);
}
    });
});

//UPDATE TABLA ROL DE USUAIRO
router.put('/rol_usuario/actualizar/:cod_rol', (req, res) => {
    const {cod_rol}=req.params;
    const{tipo_rol} = req.body;
    const query ="CALL me_upd_rol_usuario(?,?);"
   
    mysqlconnection.query(query,[cod_rol,tipo_rol], (err, rows, fields) => {
        if (!err) {
            res.json({status: 'Registro actualizado'});
        } else {
            console.log(err);
        }
    });
});

//TABLA TIPO DE OPERACION
//SELECT DE TODOS LOS DATOS DE LA TABLA TIPO DE OPERACION
router.get('/tipo_operacion', (req, res) => {
    const query='CALL me_sel_todo_tipo_operacion;'

    mysqlconnection.query(query, (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//SELECT DE LA TABLA TIPO DE OPERACION
router.get('/tipo_operacion/:cod_tipo_operacion', (req, res) => {
    const { cod_tipo_operacion } = req.params;
    const query= 'CALL me_sel_tipo_operacion (?);'

    mysqlconnection.query(query, [cod_tipo_operacion], (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//DELETE TABLA TIPO DE OPERACION
router.delete('/tipo_operacion/eliminar/:cod_tipo_operacion',(req,res)=>{
    const {cod_tipo_operacion}=req.params;
    const query= 'CALL me_del_tipo_operacion (?);'

    mysqlconnection.query(query,[cod_tipo_operacion],(err,
        rows,fields)=>{
            if(!err){
                res.json({status:'Registro eliminado'});
            }else{
                console.log(err);
            }
        });
});

//INSERT TABLA TIPO DE OPERACION
router.post('/tipo_operacion/insertar',(req,res)=>{
    const{cod_tipo_operacion,nombre_operacion} =req.body;
    const query= 'CALL me_ins_tipo_operacion (?,?);'

    mysqlconnection.query(query,[cod_tipo_operacion,nombre_operacion],(err,rows,fields)=>{
if (!err){
    res.json({status: 'Registro guardado'});
}else{
    console.log(err);
}
    });
});

//UPDATE TABLA TIPO DE OPERACION
router.put('/tipo_operacion/actualizar/:cod_tipo_operacion', (req, res) => {
    const {cod_tipo_operacion}=req.params;
    const{nombre_operacion} = req.body;
    const query ="CALL me_upd_tipo_operacion(?,?);"
   
    mysqlconnection.query(query,[cod_tipo_operacion,nombre_operacion], (err, rows, fields) => {
        if (!err) {
            res.json({status: 'Registro actualizado'});
        } else {
            console.log(err);
        }
    });
});

//TABLA USUARIO REGISTRO
//SELECT DE TODOS LOS DATOS DE LA TABLA USUARIO REGISTRO
router.get('/datos_empleado', (req, res) => {
    const query=`CALL me_sel_todo_datos_empleados;`

    mysqlconnection.query(query, (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//SELECT DE LA TABLA USUARIO REGISTRO
router.get('/datos_empleado/:cod_dato', (req, res) => {
    const { cod_dato } = req.params;
    const query= 'CALL me_sel_datos (?);'

    mysqlconnection.query(query, [cod_dato], (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//DELETE TABLA USUARIO REGISTRO
router.delete('/datos_empleado/eliminar/:cod_dato',(req,res)=>{
    const {cod_dato}=req.params;
    const query= 'CALL me_del_datos_empleados (?);'

    mysqlconnection.query(query,[cod_dato],(err,
        rows,fields)=>{
            if(!err){
                res.json({status:'Registro eliminado'});
            }else{
                console.log(err);
            }
        });
});

//INSERT TABLA USUARIO REGISTRO
router.post('/datos_empleado/insertar',(req,res)=>{
    const{cod_dato,id,dni_usuario,cod_rol,num_telefono,departamento_id,municipio_id,direccion} =req.body;
    const query= 'CALL me_ins_datos_empleados (?,?,?,?,?,?,?,?);'

    mysqlconnection.query(query,[cod_dato,id,dni_usuario,cod_rol,num_telefono,departamento_id,municipio_id,direccion],(err,rows,fields)=>{
if (!err){
    res.json({status: 'Registro guardado'});
}else{
    console.log(err);
}
    });
});

///UPDATE TABLA USUARIO REGISTRO
router.put('/datos_empleado/actualizar/:cod_dato', (req, res) => {
    const {cod_dato}=req.params;
    const{id,dni_usuario,cod_rol,num_telefono,departamento_id,municipio_id,direccion} = req.body;
    const query ="CALL me_upd_datos_empleados (?,?,?,?,?,?,?,?);"
   
    mysqlconnection.query(query,[cod_dato,id,dni_usuario,cod_rol,num_telefono,departamento_id,municipio_id,direccion], (err, rows, fields) => {
        if (!err) {
            res.json({status: 'Registro actualizado'});
        } else {
            console.log(err);
        }
    });
});

//TABLA REGISTRO OPERACION
//SELECT DE TODOS LOS DATOS DE LA TABLA REGISTRO OPERACION 
router.get('/registro_operacion', (req, res) => {
    const query='CALL me_sel_todo_registro_operacion;'

    mysqlconnection.query(query, (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//SELECT DE LA TABLA REGISTRO OPERACION
router.get('/registro_operacion/:cod_operacion', (req, res) => {
    const { cod_operacion } = req.params;
    const query= 'CALL me_sel_registro_operacion (?);'

    mysqlconnection.query(query, [cod_operacion], (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//DELETE TABLA REGISTRO OPERACION
router.delete('/registro_operacion/eliminar/:cod_operacion',(req,res)=>{
    const {cod_operacion}=req.params;
    const query= 'CALL me_del_registro_operacion (?);'

    mysqlconnection.query(query,[cod_operacion],(err,
        rows,fields)=>{
            if(!err){
                res.json({status:'Registro eliminado'});
            }else{
                console.log(err);
            }
        });
});

//INSERT TABLA REGISTRO OPERACION
router.post('/registro_operacion/insertar',(req,res)=>{
    const{cod_operacion,name,fecha_operacion,cod_tipo_operacion,referencia_operacion} =req.body;
    const query= 'CALL me_ins_registro_operacion (?,?,?,?,?);'

    mysqlconnection.query(query,[cod_operacion,name,fecha_operacion,cod_tipo_operacion,referencia_operacion],(err,rows,fields)=>{
if (!err){
    res.json({status: 'Registro guardado'});
}else{
    console.log(err);
}
    });
});

//UPDATE TABLA REGISTRO OPERACION
router.put('/registro_operacion/actualizar/:cod_operacion', (req, res) => {
    const {cod_operacion}=req.params;
    const{name,fecha_operacion,cod_tipo_operacion,referencia_operacion} = req.body;
    const query ="CALL me_upd_registro_operacion (?,?,?,?,?);"
   
    mysqlconnection.query(query,[cod_operacion,name,fecha_operacion,cod_tipo_operacion,referencia_operacion], (err, rows, fields) => {
        if (!err) {
            res.json({status: 'Registro actualizado'});
        } else {
            console.log(err);
        }
    });
});

//TABLA PAGO SALARIO
//SELECT DE TODOS LOS DATOS DE LA TABLA PAGO SALARIO
router.get('/pago_salario', (req, res) => {
    const query='CALL me_sel_todo_pago_salario;'

    mysqlconnection.query(query, (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//SELECT DE LA TABLA PAGO SALARIO
router.get('/pago_salario/:cod_pago', (req, res) => {
    const { cod_pago } = req.params;
    const query= 'CALL me_sel_pago_salario (?);'

    mysqlconnection.query(query, [cod_pago], (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//DELETE TABLA PAGO SALARIO
router.delete('/pago_salario/eliminar/:cod_pago',(req,res)=>{
    const {cod_pago}=req.params;
    const query= 'CALL me_del_pago_salario (?);'

    mysqlconnection.query(query,[cod_pago],(err,
        rows,fields)=>{
            if(!err){
                res.json({status:'Registro eliminado'});
            }else{
                console.log(err);
            }
        });
});

//INSERT TABLA PAGO SALARIO
router.post('/pago_salario/insertar',(req,res)=>{
    const{cod_pago,name,sueldo_bruto,IHSS,RAP,otras_deducciones,vacaciones,descripcion_vacaciones,salario} =req.body;
    const query='CALL me_ins_pago_salario (?,?,?,?,?,?,?,?,?);'

    mysqlconnection.query(query,[cod_pago,name,sueldo_bruto,IHSS,RAP,otras_deducciones,vacaciones,descripcion_vacaciones,salario],(err,rows,fields)=>{
if (!err){
    res.json({status: 'Registro guardado'});
}else{
    console.log(err);
}
    });
});

//UPDATE TABLA PAGO SALARIO
router.put('/pago_salario/actualizar/:cod_pago', (req, res) => {
    const {cod_pago}=req.params;
    const{name,sueldo_bruto,IHSS,RAP,otras_deducciones,vacaciones,descripcion_vacaciones,salario} = req.body;
    const query ="CALL me_upd_pago_salario (?,?,?,?,?,?,?,?,?);"
   
    mysqlconnection.query(query,[cod_pago,name,sueldo_bruto,IHSS,RAP,otras_deducciones,vacaciones,descripcion_vacaciones,salario], (err, rows, fields) => {
        if (!err) {
            res.json({status: 'Registro actualizado'});
        } else {
            console.log(err);
        }
    });
});

// TABLA USERS
//SELECT DE TODOS LOS DATOS DE LA TABLA USERS
router.get('/users', (req, res) => {
    const query='CALL me_sel_todo_users;'

    mysqlconnection.query(query, (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//SELECT DE LA TABLA USERS
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const query= 'CALL me_sel_users (?);'

    mysqlconnection.query(query, [id], (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//DELETE TABLA USERS
router.delete('/users/eliminar/:id',(req,res)=>{
    const {id}=req.params;
    const query= 'CALL me_del_users (?);'

    mysqlconnection.query(query,[id],(err,
        rows,fields)=>{
            if(!err){
                res.json({status:'Registro eliminado'});
            }else{
                console.log(err);
            }
        });
});

//UPDATE TABLA USERS
router.put('/users/actualizar/:id', (req, res) => {
    const {id}=req.params;
    const{name,email,password} = req.body;
    const query ="CALL me_upd_users (?,?,?,?);"
   
    mysqlconnection.query(query,[id,name,email,password], (err, rows, fields) => {
        if (!err) {
            res.json({status: 'Registro actualizado'});
        } else {
            console.log(err);
        }
    });
});

module.exports=router;