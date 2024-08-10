<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if ($method == "OPTIONS") {
    die();
}

require_once('../models/clientes.models.php');
error_reporting(0);
$clientes = new Clientes();

switch ($_GET["op"]) {
    case 'getClientes':
        $datos = $clientes->getClientes();
        while ($row = mysqli_fetch_assoc($datos)) {
            $todos[] = $row;
        }
        echo json_encode($todos);
        break;

    case 'getClienteId':
        $idClientes = $_POST["idClientes"];
        $datos = $clientes->getClienteId($idClientes);
        $resultado = mysqli_fetch_assoc($datos);
        echo json_encode($resultado);
        break;

    case 'insertCliente':
        $Nombres = $_POST["Nombres"];
        $Direccion = $_POST["Direccion"];
        $Telefono = $_POST["Telefono"];
        $Cedula = $_POST["Cedula"];
        $Correo = $_POST["Correo"];
        $respuesta = $clientes->insertCliente($Nombres, $Direccion, $Telefono, $Cedula, $Correo);
        echo json_encode($respuesta);
        break;
    case 'updateCliente':
        $idClientes = $_POST["idClientes"];
        $Nombres = $_POST["Nombres"];
        $Direccion = $_POST["Direccion"];
        $Telefono = $_POST["Telefono"];
        $Cedula = $_POST["Cedula"];
        $Correo = $_POST["Correo"];
        $respuesta = $clientes->updateCliente($idClientes, $Nombres, $Direccion, $Telefono, $Cedula, $Correo);
        echo json_encode($respuesta);
        break;

    case 'deleteCliente':
        $idClientes = $_POST["idClientes"];
        $respuesta = $clientes->deleteCliente($idClientes);
        echo json_encode($respuesta);
        break;
}
