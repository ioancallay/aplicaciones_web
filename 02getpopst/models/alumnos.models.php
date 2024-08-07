<?php
error_reporting(1);
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
        return $datos;
    }

    public function getAlumnoPorID($id)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $statement = "SELECT * FROM alumnos WHERE IdAlumno = $id";
        $datos = mysqli_query($con, $statement);
        // $datos = $con->query($statement);
        $con->close();
        return $datos;
    }

    public function insertarAlumno($nombre, $apellido, $edad)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $statement = "INSERT INTO alumnos (Nombre, Apellido, Edad) VALUES ('$nombre', '$apellido', $edad)";
        $datos = mysqli_query($con, $statement);
        if(!$datos){
            echo "Error al insertar alumno: " . mysqli_error($con);
        }
        // $datos = $con->query($statement
        $con->close();
        return $datos;
    }

    public function actualizarAlumno($id, $nombre, $apellido, $edad)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $statement = "UPDATE alumnos SET Nombre = '$nombre', Apellido = '$apellido', Edad = $edad WHERE IdAlumno = $id";
        $datos = mysqli_query($con, $statement);
        // $datos = $con->query($statement);
        $con->close();
        return $datos;
    }

    public function eliminarAlumno($id)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $statement = "DELETE FROM alumnos WHERE IdAlumno = $id";
        $datos = mysqli_query($con, $statement);
        // $datos = $con->query($statement);
        $con->close();
        return $datos;
    }
}
