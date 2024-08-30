<?php

require_once('../config/conexion.php');

class Clientes
{

    //TODO: Metodo para obtener la lista de clientes
    public function todos()
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "SELECT * FROM clientes";
        $datos = mysqli_query($con, $cadena);
        $con->close();
        return $datos;
    }

    //TODO: Metodo para obtener un cliente por su id
    public function uno($idClientes)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "SELECT * FROM clientes WHERE idClientes=$idClientes";
        $datos = mysqli_query($con, $cadena);
        $con->close();
        return $datos;
    }

    //TODO: Metodo para insertar un cliente
    public function insertar($Nombres, $Direccion, $Telefono, $Cedula, $Correo)
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

    //TODO: Metodo para actualizar clientes
    public function actualizar($idClientes, $Nombres, $Direccion, $Telefono, $Cedula, $Correo)
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

    //TODO: Metodo para eliminar un cliente
    public function eliminar($idClientes)
    {
        try {
            $con = new ClaseConectar();
            $con = $con->ProcedimientoConectar();
            $cadena = "DELETE FROM clientes WHERE idClientes=$idClientes";
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
