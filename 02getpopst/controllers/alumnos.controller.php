<?php

require_once("../models/alumnos.models.php");

$alumnos = new Alumnos();

switch ($_GET["op"]) {
    case "getAlumnos":
        $datos = $alumnos->getAlumnos();
        while ($row = mysqli_fetch_assoc($datos)) {
            $todos[] = $row;
        }
        echo json_encode($todos);
        break;

    case "getAlumnoPorID":
        $id = $_GET["id"];
        $datos = $alumnos->getAlumnoPorID($id);
        while ($row = mysqli_fetch_assoc($datos)) {
            $todos = $row;
        }
        echo json_encode($todos);
        break;

    case "insertarAlumno":
        $nombre = $_POST["Nombre"];
        $apellido = $_POST["Apellido"];
        $edad = $_POST["Edad"];

        $datos = $alumnos->insertarAlumno($nombre, $apellido, $edad);
        echo json_encode($datos);
        // echo json_encode(array("mensaje" => "Alumno insertado correctamente"));
        break;

    case "actualizarAlumno":
        $id = $_POST["id"];
        $nombre = $_POST["Nombre"];
        $apellido = $_POST["Apellido"];
        $edad = $_POST["Edad"];
        $datos = $alumnos->actualizarAlumno($id, $nombre, $apellido, $edad);
        echo json_encode($datos);
        break;

    case "eliminarAlumno":
        $id = $_POST["id"];
        $datos = $alumnos->eliminarAlumno($id);
        echo json_encode($datos);
        break;
}
