<?php

require_once('../config/conexion.php');

class Proveedores
{

    //TODO: Implementar los metodos de la clase Proveedores
    public function getProveedores() //TODO: Implementar el metodo getProveedores
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $statement = "SELECT * FROM proveedores";
        $datos = mysqli_query($con, $statement);
        $con->close();
        return $datos;
    }

    //TODO: 
    public function getProveedorPorID($idProveedores) //TODO: Implementar el metodo getProveedorPorID
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "SELECT * FROM `proveedores` WHERE `idProveedores`=$idProveedores";
        $datos = mysqli_query($con, $cadena);
        $con->close();
        return $datos;
    }

    public function insertProveedor($Nombre_Empresa, $Direccion, $Telefono, $Contacto_Empresa, $Telefono_Contacto) //TODO: Implementar el metodo insertProveedor
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

    public function updateProveedor($idProveedores, $Nombre_Empresa, $Direccion, $Telefono, $Contacto_Empresa, $Telefono_Contacto) //TODO: Implementar el metodo updateProveedor
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

    public function deleteProveedor($idProveedores) //TODO: Implementar el metodo deleteProveedor
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
