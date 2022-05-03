const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

/*************************************************************************************************
**************************************************************************************************
**************************************************************************************************
MODULO PRODUCCION
**************************************************************************************************
**************************************************************************************************
**************************************************************************************************/
//TABLA PRODUCTOS
//SELECT DE TODOS LOS DATOS DE LA TABLA PRODUCTOS
router.get('/productos', (req, res) => {
    const query= 'CALL mp_sel_todo_prodcutos;'

    mysqlConnection.query(query, (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//SELECT DE LA TABLA PRODUCTOS
router.get('/productos/:cod_producto', (req, res) => {
    const { cod_producto } = req.params;
    const query= 'CALL mp_sel_productos (?);'

    mysqlConnection.query(query, [cod_producto], (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//DELETE TABLA PRODUCTOS
router.delete('/productos/eliminar/:cod_producto',(req,res)=>{
    const {cod_producto}=req.params;
    const query= 'CALL mp_del_productos (?);'

    mysqlConnection.query(query,[cod_producto],(err,
        rows,fields)=>{
            if(!err){
                res.json({status:'Registro eliminado'});
            }else{
                console.log(err);
            }
        });
});

//INSERT TABLA PRODUCTOS
router.post('/productos/insertar',(req,res)=>{
    const{cod_producto,nombre_producto,descrip_producto,precio_producto} =req.body;
    const query= 'CALL mp_ins_productos (?,?,?,?);'

    mysqlConnection.query(query,[cod_producto,nombre_producto,descrip_producto,precio_producto],(err,rows,fields)=>{
if (!err){
    res.json({status: 'Registro guardado'});
}else{
    console.log(err);
}
    });
});

//UPDATE TABLA PRODUCTOS
router.put('/productos/actualizar/:cod_producto', (req, res) => {
    const{cod_producto}=req.params;
    const{nombre_producto,descrip_producto,precio_producto} = req.body;
    const query ="CALL mp_upd_productos(?,?,?,?);"
   
    mysqlConnection.query(query,[cod_producto,nombre_producto,descrip_producto,precio_producto], (err, rows, fields) => {
        if (!err) {
            res.json({status: 'Registro actualizado'});
        } else {
            console.log(err);
        }
    });
});

//TABLA PRODUCTOS INVENTARIOS
//SELECT DE TODOS LOS DATOS DE LA TABLA PRODUCTOS
router.get('/productos_inventarios', (req, res) => {
    const query= 'CALL mp_sel_todo_inventario_prodcutos;'

    mysqlConnection.query(query, (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//SELECT DE LA TABLA PRODUCTOS INVENTARIOS
router.get('/productos_inventarios/:cod_lote', (req, res) => {
    const { cod_lote } = req.params;
    const query= 'CALL mp_sel_inventario_productos (?);'

    mysqlConnection.query(query, [cod_lote], (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//DELETE TABLA PRODUCTOS INVENTARIOS
router.delete('/productos_inventarios/eliminar/:cod_lote',(req,res)=>{
    const {cod_lote}=req.params;
    const query= 'CALL mp_del_inventario_productos (?);'

    mysqlConnection.query(query,[cod_lote],(err,
        rows,fields)=>{
            if(!err){
                res.json({status:'Registro eliminado'});
            }else{
                console.log(err);
            }
        });
});

//INSERT TABLA PRODUCTOS INVENTARIOS
router.post('/productos_inventarios/insertar',(req,res)=>{
    const{cod_lote,nombre_producto,fech_creacion_lote,fech_caducidad_lote,cant_lote,prec_vent_lote} =req.body;
    const query= 'CALL mp_ins_inventario_productos (?,?,?,?,?,?);'

    mysqlConnection.query(query,[cod_lote,nombre_producto,fech_creacion_lote,fech_caducidad_lote,cant_lote,prec_vent_lote],(err,rows,fields)=>{
if (!err){
    res.json({status: 'Registro guardado'});
}else{
    console.log(err);
}
    });
});

//UPDATE TABLA PRODUCTOS INVENTARIOS
router.put('/productos_inventarios/actualizar/:cod_lote', (req, res) => {
    const{cod_lote}=req.params;
    const{nombre_producto,fech_creacion_lote,fech_caducidad_lote,cant_lote,prec_vent_lote} = req.body;
    const query ='CALL mp_upd_inventario_productos (?,?,?,?,?,?);'
   
    mysqlConnection.query(query,[cod_lote,nombre_producto,fech_creacion_lote,fech_caducidad_lote,cant_lote,prec_vent_lote], (err, rows, fields) => {
        if (!err) {
            res.json({status: 'Registro actualizado'});
        } else {
            console.log(err);
        }
    });
});

module.exports = router;