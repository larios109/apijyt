const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

/*************************************************************************************************
**************************************************************************************************
**************************************************************************************************
MODULO INVENTARIO
**************************************************************************************************
**************************************************************************************************
**************************************************************************************************/
//TABLA MATERIA PRIMA
//SELECT DE TODOS LOS DATOS DE LA TABLA MATERIA PRIMA
router.get('/materia_prima', (req, res) => {
    const query= 'CALL mi_sel_todo_materia_prima;'

    mysqlConnection.query(query, (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//SELECT DE LA TABLA MATERIA PRIMA
router.get('/materia_prima/:cod_materia', (req, res) => {
    const { cod_materia } = req.params;
    const query= 'CALL mi_sel_materia_prima (?);'

    mysqlConnection.query(query, [cod_materia], (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//DELETE TABLA MATERIA PRIMA
router.delete('/materia_prima/eliminar/:cod_materia',(req,res)=>{
    const {cod_materia}=req.params;
    const query= 'CALL mi_del_materia_prima (?);'

    mysqlConnection.query(query,[cod_materia],(err,
        rows,fields)=>{
            if(!err){
                res.json({status:'Registro eliminado'});
            }else{
                console.log(err);
            }
        });
});

//INSERT TABLA MATERIA PRIMA
router.post('/materia_prima/insertar',(req,res)=>{
    const{cod_materia,nom_materia,descripcion,pre_Compra_materia,tip_medida} =req.body;
    const query= 'CALL mi_ins_materia_prima (?,?,?,?,?);'

    mysqlConnection.query(query,[cod_materia,nom_materia,descripcion,pre_Compra_materia,tip_medida],(err,rows,fields)=>{
if (!err){
    res.json({status: 'Registro guardado'});
}else{
    console.log(err);
}
    });
});

//UPDATE TABLA MATERIA PRIMA
router.put('/materia_prima/actualizar/:cod_materia', (req, res) => {
    const {cod_materia}=req.params;
    const{nom_materia,descripcion,pre_Compra_materia,tip_medida} = req.body;
    const query ="CALL mi_upd_materia_prima (?,?,?,?,?);"
   
    mysqlConnection.query(query,[cod_materia,nom_materia,descripcion,pre_Compra_materia,tip_medida], (err, rows, fields) => {
        if (!err) {
            res.json({status: 'Registro actualizado'});
        } else {
            console.log(err);
        }
    });
});

//TABLA INVENTARIO MATERIA PRIMA
//SELECT DE TODOS LOS DATOS DE LA TABLA INVENTARIO MATERIA PRIMA
router.get('/inventario_materia_prima', (req, res) => {
    const query= 'CALL mi_sel_todo_invent_materia_prima;'

    mysqlConnection.query(query, (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//SELECT DE LA TABLA INVENTARIO MATERIA PRIMA
router.get('/inventario_materia_prima/:cod_invent_materia_prima', (req, res) => {
    const { cod_invent_materia_prima } = req.params;
    const query= 'CALL mi_sel_invent_materia_prima (?);'

    mysqlConnection.query(query, [cod_invent_materia_prima], (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//DELETE TABLA INVENTARIO MATERIA PRIMA
router.delete('/inventario_materia_prima/eliminar/:cod_invent_materia_prima',(req,res)=>{
    const {cod_invent_materia_prima}=req.params;
    const query= 'CALL mi_del_invent_materia_prima (?);'

    mysqlConnection.query(query,[cod_invent_materia_prima],(err,
        rows,fields)=>{
            if(!err){
                res.json({status:'Registro eliminado'});
            }else{
                console.log(err);
            }
        });
});

//INSERT TABLA INVENTARIO MATERIA PRIMA
router.post('/inventario_materia_prima/insertar',(req,res)=>{
    const{cod_invent_materia_prima,nom_materia,fec_compra,can_Compra,pre_compra,fec_caducidad} =req.body;
    const query= 'CALL mi_ins_invent_materia_prima (?,?,?,?,?,?);'

    mysqlConnection.query(query,[cod_invent_materia_prima,nom_materia,fec_compra,can_Compra,pre_compra,fec_caducidad],(err,rows,fields)=>{
if (!err){
    res.json({status: 'Registro guardado'});
}else{
    console.log(err);
}
    });
});

//UPDATE TABLA MATERIA PRIMA
router.put('/inventario_materia_prima/actualizar/:cod_invent_materia_prima', (req, res) => {
    const {cod_invent_materia_prima}=req.params;
    const{nom_materia,fec_compra,can_Compra,pre_compra,fec_caducidad} =req.body;
    const query ="CALL mi_upd_invent_materia_prima (?,?,?,?,?,?);"
   
    mysqlConnection.query(query,[cod_invent_materia_prima,nom_materia,fec_compra,can_Compra,pre_compra,fec_caducidad],(err,rows,fields)=>{
        if (!err) {
            res.json({status: 'Registro actualizado'});
        } else {
            console.log(err);
        }
    });
});

//TABLA PRODUCTOS MATERIA PRIMA
//SELECT DE TODOS LOS DATOS DE LA TABLA PRODUCTOS MATERIA PRIMA
router.get('/productos_materia_prima', (req, res) => {
    const query= 'CALL mi_sel_todo_product_materia_prima;'

    mysqlConnection.query(query, (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//SELECT DE LA TABLA PRODUCTOS MATERIA PRIMA
router.get('/productos_materia_prima/:cod_prod_mat_prima', (req, res) => {
    const { cod_prod_mat_prima } = req.params;
    const query= 'CALL mi_sel_product_materia_prima (?);'

    mysqlConnection.query(query, [cod_prod_mat_prima], (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//DELETE TABLA PRODUCTOS MATERIA PRIMA
router.delete('/productos_materia_prima/eliminar/:cod_prod_mat_prima',(req,res)=>{
    const {cod_prod_mat_prima}=req.params;
    const query= 'CALL mi_del_product_materia_prima (?);'

    mysqlConnection.query(query,[cod_prod_mat_prima],(err,
        rows,fields)=>{
            if(!err){
                res.json({status:'Registro eliminado'});
            }else{
                console.log(err);
            }
        });
});

//INSERT TABLA PRODUCTOS MATERIA PRIMA
router.post('/productos_materia_prima/insertar',(req,res)=>{
    const{cod_prod_mat_prima,nombre_producto,nom_materia,can_materia_requerida} =req.body;
    const query= 'CALL mi_ins_prod_materia_prima (?,?,?,?);'

    mysqlConnection.query(query,[cod_prod_mat_prima,nombre_producto,nom_materia,can_materia_requerida],(err,rows,fields)=>{
if (!err){
    res.json({status: 'Registro guardado'});
}else{
    console.log(err);
}
    });
});

//UPDATE TABLA PRODUCTOS MATERIA PRIMA
router.put('/productos_materia_prima/actualizar/:cod_prod_mat_prima', (req, res) => {
    const {cod_prod_mat_prima}=req.params;
    const{nombre_producto,nom_materia,can_materia_requerida} =req.body;
    const query ="CALL mi_upd_product_materia_prima (?,?,?,?);"
   
    mysqlConnection.query(query,[cod_prod_mat_prima,nombre_producto,nom_materia,can_materia_requerida],(err,rows,fields)=>{
        if (!err) {
            res.json({status: 'Registro actualizado'});
        } else {
            console.log(err);
        }
    });
});

module.exports=router;
