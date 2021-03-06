const express = require('express');
const router = express.Router();
const mysqlConection = require ('../database');

/*************************************************************************************************
**************************************************************************************************
**************************************************************************************************
MODULO CLIENTES
**************************************************************************************************
**************************************************************************************************
**************************************************************************************************/
//TABLA DEPARTAMENTO
//SELECT DE TODOS LOS DATOS DE LA TABLA DEPARTAMENTO
router.get('/departamento', (req, res) => {
    const query= `CALL mc_sel_todo_departamento;`

    mysqlConection.query(query, (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//SELECT DE LA TABLA DEPARTAMENTO
router.get('/departamento/:departamento_id', (req, res) => {
    const { departamento_id } = req.params;
    const query= 'CALL mc_sel_departamento (?);'

    mysqlConection.query(query, [departamento_id], (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//TABLA MUNICIPIO
//SELECT DE TODOS LOS DATOS DE LA TABLA MUNICIPIO
router.get('/municipio', (req, res) => {
    const query= 'CALL mc_sel_todo_municipio;'

    mysqlConection.query(query, (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//SELECT DE LA TABLA MUNICIPIO
router.get('/municipio/:municipio_id', (req, res) => {
    const { municipio_id } = req.params;
    const query= 'CALL mc_sel_municipio (?);'

    mysqlConection.query(query, [municipio_id], (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//TABLA DIRECCION CLIENTE
//SELECT DE TODOS LOS DATOS DE LA TABLA DIRECCION CLIENTE
router.get('/direccion_cliente', (req, res) => {
    const query= 'CALL mc_sel_todo_direccion_cliente;'

    mysqlConection.query(query, (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//SELECT DE LA TABLA DIRECCION CLIENTE
router.get('/direccion_cliente/:cod_direccion', (req, res) => {
    const { cod_direccion } = req.params;
    const query='CALL mc_sel_direccion_cliente (?);'

    mysqlConection.query(query, [cod_direccion], (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//DELETE TABLA DIRECCION CLIENTE
router.delete('/direccion_cliente/eliminar/:cod_direccion',(req,res)=>{
    const {cod_direccion}=req.params;
    const query= 'CALL mc_del_direccion_cliente (?);'

    mysqlConection.query(query,[cod_direccion],(err,
        rows,fields)=>{
            if(!err){
                res.json({status:'Registro eliminado'});
            }else{
                console.log(err);
            }
        });
});

//INSERT TABLA DIRECCION CLIENTE
router.post('/direccion_cliente/insertar',(req,res)=>{
    const{cod_direccion,cliente_nombre,direccion,ciudad,departamento_id,municipio_id,direccion_telefono} =req.body;
    const query= 'CALL mc_ins_direccion_cliente (?,?,?,?,?,?,?);'

    mysqlConection.query(query,[cod_direccion,cliente_nombre,direccion,ciudad,departamento_id,municipio_id,direccion_telefono],(err,rows,fields)=>{
if (!err){
    res.json({status: 'Registro guardado'});
}else{
    console.log(err);
}
    });
});

//UPDATE TABLA DIRECCION CLIENTE
router.put('/direccion_cliente/actualizar/:cod_direccion', (req, res) => {
    const {cod_direccion}=req.params;
    const{cliente_nombre,direccion,ciudad,departamento_id,municipio_id,direccion_telefono} = req.body;
    const query ="CALL mc_upd_direccion_cliente (?,?,?,?,?,?,?);"
   
    mysqlConection.query(query,[cod_direccion,cliente_nombre,direccion,ciudad,departamento_id,municipio_id,direccion_telefono], (err, rows, fields) => {
        if (!err) {
            res.json({status: 'Registro actualizado'});
        } else {
            console.log(err);
        }
    });
});

//TABLA CLIENTE
//SELECT DE TODOS LOS DATOS DE LA TABLA CLIENTE
router.get('/cliente', (req, res) => {
    const query= 'CALL mc_sel_todo_cliente;'

    mysqlConection.query(query, (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//SELECT DE LA TABLA CLIENTE
router.get('/cliente/:cod_cliente', (req, res) => {
    const { cod_cliente } = req.params;
    const query='CALL mc_sel_cliente (?);'

    mysqlConection.query(query, [cod_cliente], (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//DELETE TABLA CLIENTE
router.delete('/cliente/eliminar/:cod_cliente',(req,res)=>{
    const {cod_cliente}=req.params;
    const query= 'CALL mc_del_cliente (?);'

    mysqlConection.query(query,[cod_cliente],(err,
        rows,fields)=>{
            if(!err){
                res.json({status:'Registro eliminado'});
            }else{
                console.log(err);
            }
        });
});

//INSERT TABLA CLIENTE
router.post('/cliente/insertar',(req,res)=>{
    const{cod_cliente,cliente_nombre,cliente_apellido,clinte_correo,cliente_dni,cliente_telefono,compa??ia_nombre,compania_rtn,cliente_fecha} =req.body;
    const query= 'CALL mc_ins_cliente (?,?,?,?,?,?,?,?,?);'

    mysqlConection.query(query,[cod_cliente,cliente_nombre,cliente_apellido,clinte_correo,cliente_dni,cliente_telefono,compa??ia_nombre,compania_rtn,cliente_fecha],(err,rows,fields)=>{
if (!err){
    res.json({status: 'Registro guardado'});
}else{
    console.log(err);
}
    });
});

//UPDATE TABLA CLIENTE
router.put('/cliente/actualizar/:cod_cliente',(req,res)=>{
    const {cod_cliente}=req.params;
    const{cliente_nombre,cliente_apellido,clinte_correo,cliente_dni,cliente_telefono,compa??ia_nombre,compania_rtn,cliente_fecha} =req.body;
    const query= 'CALL mc_upd_cliente (?,?,?,?,?,?,?,?,?);'

    mysqlConection.query(query,[cod_cliente,cliente_nombre,cliente_apellido,clinte_correo,cliente_dni,cliente_telefono,compa??ia_nombre,compania_rtn,cliente_fecha],(err,rows,fields)=>{
if (!err){
    res.json({status: 'Registro guardado'});
}else{
    console.log(err);
}
    });
});

//TABLA COMPA??IA
//SELECT DE TODOS LOS DATOS DE LA TABLA COMPA??IA
router.get('/compania', (req, res) => {
    const query= 'CALL mc_sel_todo_compa??ia;'

    mysqlConection.query(query, (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//SELECT DE LA TABLA COMPA??IA
router.get('/compania/:compania_rtn', (req, res) => {
    const { compania_rtn } = req.params;
    const query='CALL mc_sel_compa??ia (?);'

    mysqlConection.query(query, [compania_rtn], (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//DELETE TABLA COMPA??IA
router.delete('/compania/eliminar/:compania_rtn',(req,res)=>{
    const {compania_rtn}=req.params;
    const query= 'CALL mc_del_compa??ia (?);'

    mysqlConection.query(query,[compania_rtn],(err,
        rows,fields)=>{
            if(!err){
                res.json({status:'Registro eliminado'});
            }else{
                console.log(err);
            }
        });
});

//INSERT TABLA COMPA??IA
router.post('/compania/insertar',(req,res)=>{
    const{compania_rtn,compa??ia_cai,compa??ia_legal_nom,compa??ia_comercial_nom,compa??ia_paginaweb,compa??ia_correo,compa??ia_facebook,compa??ia_instagram} =req.body;
    const query= 'CALL mc_ins_compa??ia (?,?,?,?,?,?,?,?);'

    mysqlConection.query(query,[compania_rtn,compa??ia_cai,compa??ia_legal_nom,compa??ia_comercial_nom,compa??ia_paginaweb,compa??ia_correo,compa??ia_facebook,compa??ia_instagram],(err,rows,fields)=>{
if (!err){
    res.json({status: 'Registro guardado'});
}else{
    console.log(err);
}
    });
});

//UPDATE TABLA COMPA??IA
router.put('/compania/actualizar/:compania_rtn',(req,res)=>{
    const {compania_rtn}=req.params;
    const{compa??ia_cai,compa??ia_legal_nom,compa??ia_comercial_nom,compa??ia_paginaweb,compa??ia_correo,compa??ia_facebook,compa??ia_instagram} =req.body;
    const query= "CALL mc_upd_compa??ia (?,?,?,?,?,?,?,?);"

    mysqlConection.query(query,[compania_rtn,compa??ia_cai,compa??ia_legal_nom,compa??ia_comercial_nom,compa??ia_paginaweb,compa??ia_correo,compa??ia_facebook,compa??ia_instagram],(err,rows,fields)=>{
if (!err){
    res.json({status: 'Registro guardado'});
}else{
    console.log(err);
}
    });
});

//TABLA COMPA??IA OFICINA
//SELECT DE TODOS LOS DATOS DE LA TABLA COMPA??IA OFICINA
router.get('/compania_oficina', (req, res) => {
    const query= 'CALL mc_sel_todo_compa??ia_oficina;'

    mysqlConection.query(query, (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//SELECT DE LA TABLA COMPA??IA OFICINA
router.get('/compania_oficina/:cod_oficina', (req, res) => {
    const { cod_oficina } = req.params;
    const query='CALL mc_sel_compa??ia_oficina (?);'

    mysqlConection.query(query, [cod_oficina], (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//DELETE TABLA COMPA??IA OFICINA
router.delete('/compania_oficina/eliminar/:cod_oficina',(req,res)=>{
    const {cod_oficina}=req.params;
    const query= 'CALL mc_del_compa??ia_oficina (?);'

    mysqlConection.query(query,[cod_oficina],(err,
        rows,fields)=>{
            if(!err){
                res.json({status:'Registro eliminado'});
            }else{
                console.log(err);
            }
        });
});

//INSERT TABLA COMPA??IA OFICINA
router.post('/compania_oficina/insertar',(req,res)=>{
    const{cod_oficina,compania_rtn,oficina_nombre,oficina_direccion,departamento_id,municipio_id,oficina_telefono_1,oficina_telefono_2} =req.body;
    const query= 'CALL mc_ins_compa??ia_oficina (?,?,?,?,?,?,?,?);'

    mysqlConection.query(query,[cod_oficina,compania_rtn,oficina_nombre,oficina_direccion,departamento_id,municipio_id,oficina_telefono_1,oficina_telefono_2],(err,rows,fields)=>{
if (!err){
    res.json({status: 'Registro guardado'});
}else{
    console.log(err);
}
    });
});

//UPDATE TABLA COMPA??IA
router.put('/compania_oficina/actualizar/:cod_oficina',(req,res)=>{
    const {cod_oficina}=req.params;
    const{compania_rtn,oficina_nombre,oficina_direccion,departamento_id,municipio_id,oficina_telefono_1,oficina_telefono_2} =req.body;
    const query= "CALL mc_upd_compa??ia_oficina (?,?,?,?,?,?,?,?);"

    mysqlConection.query(query,[cod_oficina,compania_rtn,oficina_nombre,oficina_direccion,departamento_id,municipio_id,oficina_telefono_1,oficina_telefono_2],(err,rows,fields)=>{
if (!err){
    res.json({status: 'Registro guardado'});
}else{
    console.log(err);
}
    });
});

module.exports = router;