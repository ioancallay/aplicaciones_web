<?php

require_once('../config/conexion.php');

class Clientes
{

    public function getClientes()
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "SELECT * FROM clientes";
        $datos = mysqli_query($con, $cadena);
        $con->close();
        return $datos;
    }

    public function getClienteId($idClientes)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "SELECT * FROM clientes WHERE idClientes=$idClientes";
        $datos = mysqli_query($con, $cadena);
        $con->close();
        return $datos;
    }

    public function insertCliente($Nombres, $Direccion, $Telefono, $Cedula, $Correo)
    {
        try {
            $con = new ClaseConectar();
            $con = $con->ProcedimientoConectar();
            $cadena = "INSERT INTO clientes (Nombres, Direccion, Telefono, Cedula, Correo) VALUES ('$Nombres', '$Direccion', '$Telefono', '$Cedula', '$Correo')";
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

    public function updateCliente($idClientes, $Nombres, $Direccion, $Telefono, $Cedula, $Correo)
    {
        try {
            $con = new ClaseConectar();
            $con = $con->ProcedimientoConectar();
            $cadena = "UPDATE clientes SET Nombres='$Nombres', Direccion='$Direccion', Telefono='$Telefono', Cedula='$Cedula', Correo='$Correo' WHERE idClientes=$idClientes";
            if (mysqli_query($con, $cadena)) {
                return $idClientes;
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
