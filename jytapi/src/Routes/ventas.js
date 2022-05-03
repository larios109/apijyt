const express = require ('express');
const router = express.Router();
const mysqlconnection = require('../database');

/*************************************************************************************************
**************************************************************************************************
**************************************************************************************************
MODULO VENTAS
**************************************************************************************************
**************************************************************************************************
**************************************************************************************************/
//TABLA VENTAS
//SELECT DE TODOS LOS DATOS DE LA TABLA VENTA
router.get('/ventas', (req, res) => {
    const query= `CALL mv_sel_todo_ventas;`

    mysqlconnection.query(query, (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//SELECT DE LA TABLA VENTA
router.get('/ventas/:cod_venta', (req, res) => {
    const { cod_venta } = req.params;
    const query= 'CALL mv_sel_ventas (?);'

    mysqlconnection.query(query, [cod_venta], (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//DELETE TABLA VENTAS
router.delete('/ventas/eliminar/:cod_venta',(req,res)=>{
    const {cod_venta}=req.params;
    const query= 'CALL mv_del_ventas (?);'

    mysqlconnection.query(query,[cod_venta],(err,
        rows,fields)=>{
            if(!err){
                res.json({status:'Registro eliminado'});
            }else{
                console.log(err);
            }
        });
});

//INSERT TABLA VENTA
router.post('/ventas/insertar',(req,res)=>{
    const{cod_venta,name,cliente_nombre,fecha_creacion} =req.body;
    const query= 'CALL mv_ins_ventas (?,?,?,?);'

    mysqlconnection.query(query,[cod_venta,name,cliente_nombre,fecha_creacion],(err,rows,fields)=>{
if (!err){
    res.json({status: 'Registro guardado'});
}else{
    console.log(err);
}
    });
});

//UPDATE TABLA VENTAS
router.put('/ventas/actualizar/:cod_venta', (req, res) => {
    const {cod_venta}=req.params;
    const{name,cliente_nombre} = req.body;
    const query ='CALL mv_upd_ventas(?,?,?);'
   
    mysqlconnection.query(query,[cod_venta,name,cliente_nombre], (err, rows, fields) => {
        if (!err) {
            res.json({status: 'Registro actualizado'});
        } else {
            console.log(err);
        }
    });
});

//TABLA DETALLE VENTA
//SELECT DE TODOS LOS DATOS DE LA TABLA DETALLE VENTA
router.get('/detalle_venta', (req, res) => {
    const query= 'CALL mv_sel_todo_detalle_ventas;'

    mysqlconnection.query(query, (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//SELECT DE LA TABLA DETALLE VENTA
router.get('/detalle_venta/:cod_detalle_venta', (req, res) => {
    const { cod_detalle_venta } = req.params;
    const query= 'CALL mv_sel_detalle_venta (?);'

    mysqlconnection.query(query, [cod_detalle_venta], (err, 
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//DELETE TABLA DETALLE VENTA
router.delete('/detalle_venta/eliminar/:cod_detalle_venta',(req,res)=>{
    const {cod_detalle_venta}=req.params;
    const query= 'CALL mv_del_detalle_ventas (?);'

    mysqlconnection.query(query,[cod_detalle_venta],(err,
        rows,fields)=>{
            if(!err){
                res.json({status:'Registro eliminado'});
            }else{
                console.log(err);
            }
        });
});

//INSERT TABLA DETALLE VENTA
router.post('/detalle_venta/insertar',(req,res)=>{
    const{cod_detalle_venta,cod_venta,nombre_producto,cantidad,precio_venta,descuento,impuesto_sobre_venta,subtotal} =req.body;
    const query= 'CALL mv_ins_detalle_ventas (?,?,?,?,?,?,?,?);'

    mysqlconnection.query(query,[cod_detalle_venta,cod_venta,nombre_producto,cantidad,precio_venta,descuento,impuesto_sobre_venta,subtotal],(err,rows,fields)=>{
if (!err){
    res.json({status: 'Registro guardado'});
}else{
    console.log(err);
}
    });
});

//UPDATE TABLA DETALLE VENTAS
router.put('/detalle_venta/actualizar/:cod_detalle_venta', (req, res) => {
    const {cod_detalle_venta}=req.params;
    const{cod_venta,nombre_producto,cantidad,precio_venta,descuento,impuesto_sobre_venta,subtotal} = req.body;
    const query ='CALL mv_upd_detalle_ventas(?,?,?,?,?,?,?,?);'
   
    mysqlconnection.query(query,[cod_detalle_venta,cod_venta,nombre_producto,cantidad,precio_venta,descuento,impuesto_sobre_venta,subtotal], (err, rows, fields) => {
        if (!err) {
            res.json({status: 'Registro actualizado'});
        } else {
            console.log(err);
        }
    });
});

module.exports=router;