<?php

require_once("../config/conexion.php");

class Alumnos
{

    public function getAlumnos()
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $statement = "SELECT * FROM alumnos";
        $datos = mysqli_query($con, $statement);
        // $datos = $con->query($statement);

        $con->close();

        print_r($datos);
        // return $datos;
    }

    public function getAlumnosPorID($id)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $statement = "SELECT * FROM alumnos WHERE id = $id";
        $datos = mysqli_query($con, $statement);
        // $datos = $con->query($statement);
        $con->close();
        return $datos;
    }

    public function insertarAlumno($nombre, $apellido, $edad)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $statement = "INSERT INTO alumnos (nombre, apellido, edad) VALUES ('$nombre', '$apellido', $edad)";
        $datos = mysqli_query($con, $statement);
        // $datos = $con->query($statement);
        $con->close();
        return $datos;
    }

    public function actualizarAlumno($id, $nombre, $apellido, $edad)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $statement = "UPDATE alumnos SET nombre = '$nombre', apellido = '$apellido', edad = $edad WHERE id = $id";
        $datos = mysqli_query($con, $statement);
        // $datos = $con->query($statement);
        $con->close();
        return $datos;
    }

    public function eliminarAlumno($id)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $statement = "DELETE FROM alumnos WHERE id = $id";
        $datos = mysqli_query($con, $statement);
        // $datos = $con->query($statement);
        $con->close();
        return $datos;
    }
}
