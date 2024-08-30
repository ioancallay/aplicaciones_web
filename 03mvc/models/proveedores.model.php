<?php

require_once('../config/conexion.php');

class Proveedores
{

    //TODO: Método para mostrar todos los proveedores
    public function todos()
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $statement = "SELECT * FROM proveedores";
        $datos = mysqli_query($con, $statement);
        $con->close();
        return $datos;
    }

    //TODO: Método para mostrar un solo proveedor
    public function uno($idProveedores)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "SELECT * FROM `proveedores` WHERE `idProveedores`=$idProveedores";
        $datos = mysqli_query($con, $cadena);
        $con->close();
        return $datos;
    }
    //TODO: Método para insertar un proveedor
    public function insertar($Nombre_Empresa, $Direccion, $Telefono, $Contacto_Empresa, $Telefono_Contacto)
    {
        try {
            $con = new ClaseConectar();
            $con = $con->ProcedimientoConectar();
            $statement = "INSERT INTO proveedores (Nombre_Empresa, Direccion, Telefono, Contacto_Empresa, Telefono_Contacto) VALUES ('$Nombre_Empresa', '$Direccion', '$Telefono', '$Contacto_Empresa', '$Telefono_Contacto')";
            if (mysqli_query($con, $statement)) {
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

    //TODO: Método para actualizar un proveedor
    public function actualizar($idProveedores, $Nombre_Empresa, $Direccion, $Telefono, $Contacto_Empresa, $Telefono_Contacto) //TODO: Implementar el metodo updateProveedor
    {
        try {
            $con = new ClaseConectar();
            $con = $con->ProcedimientoConectar();
            $statement = "UPDATE proveedores SET Nombre_Empresa = '$Nombre_Empresa', Direccion = '$Direccion', Telefono = '$Telefono', Contacto_Empresa = '$Contacto_Empresa', Telefono_Contacto = '$Telefono_Contacto' WHERE idProveedores = $idProveedores";
            if (mysqli_query($con, $statement)) {
                return $idProveedores;
            } else {
                return $con->error;
            }
        } catch (Exception $e) {
            return $e->getMessage();
        } finally {
            $con->close();
        }
    }

    //TODO: Método para eliminar un proveedor
    public function eliminar($idProveedores)
    {
        try {
            $con = new ClaseConectar();
            $con = $con->ProcedimientoConectar();
            $statement = "DELETE FROM proveedores WHERE idProveedores = $idProveedores";
            if (mysqli_query($con, $statement)) {
                return $idProveedores;
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
