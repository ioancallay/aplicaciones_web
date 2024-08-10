<?php

require_once('../config/conexion.php');

class Productos
{

    //TODO: Metodo que trae la lista de todos los productos
    public function getProductos()
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "SELECT * FROM productos";
        $resultado = mysqli_query($con, $cadena);
        return $resultado;
    }

    //TODO: Meetodo para traer un solo producto por su Id
    public function getProductoId($idProductos)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "SELECT * FROM productos WHERE idProductos=$idProductos";
        $resultado = mysqli_query($con, $cadena);
        return $resultado;
    }

    //TODO: Metodo para insertar un producto
    public function insertProducto($Codigo_Barras, $Nombre_Producto, $Grava_IVA)
    {

        try {
            $con = new ClaseConectar();
            $con = $con->ProcedimientoConectar();
            $cadena = "INSERT INTO productos (Codigo_Barras, Nombre_Producto, Grava_IVA) VALUES ('$Codigo_Barras', $Nombre_Producto, $Grava_IVA)";
            if (mysqli_query($con, $cadena)) {
                return $con->insert_id;
            } else {
                return $con->error;
            }
        } catch (Exception $e) {
            return $e->getMessage();
        } finally {
            $con->close();
        }
    }

    //TODO: Metodo para actualizar un producto
    public function updateProducto($idProductos, $Codigo_Barras, $Nombre_Producto, $Grava_IVA)
    {
        try {
            $con = new ClaseConectar();
            $con = $con->ProcedimientoConectar();
            $cadena = "UPDATE productos SET Codigo_Barras='$Codigo_Barras', Nombre_Producto=$Nombre_Producto, Grava_IVA=$Grava_IVA WHERE idProductos=$idProductos";
            if (mysqli_query($con, $cadena)) {
                return $idProductos;
            } else {
                return $con->error;
            }
        } catch (Exception $e) {
            return $e->getMessage();
        } finally {
            $con->close();
        }
    }

    //TODO: Metodo para eliminar el producto
    public function deleteProducto($idProductos)
    {
        try {
            $con = new ClaseConectar();
            $con = $con->ProcedimientoConectar();
            $cadena = "DELETE FROM productos WHERE idProductos=$idProductos";
            if (mysqli_query($con, $cadena)) {
                return $idProductos;
            } else {
                return $con->error;
            }
        } catch (Exception $e) {
            return $e->getMessage();
        } finally {
            $con->close();
        }
    }
}
