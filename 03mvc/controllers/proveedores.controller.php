<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if ($method == "OPTIONS") {
    die();
}

require_once('../models/proveedores.models.php');
error_reporting(0);
$proveedores = new Proveedores();

switch ($_GET['op']) {

    case "getProveedores":
        $datos = $proveedores->getProveedores();
        while ($row = mysqli_fetch_assoc($datos)) {
            $todos[] = $row;
        }
        echo json_encode($todos);

        break;
    case "getProveedorPorID":
        $idProveedores  = $_POST['idProveedores '];
        $datos = $proveedores->getProveedorPorID($idProveedores);
        $res = mysqli_fetch_assoc($datos);
        echo json_encode($res);
        break;

    case "insertProveedor":
        $Nombre_Empresa = $_POST['Nombre_Empresa'];
        $Direccion = $_POST['Direccion'];
        $Telefono = $_POST['Telefono'];
        $Contacto_Empresa = $_POST['Contacto_Empresa'];
        $Telefono_Contacto = $_POST['Telefono_Contacto'];
        $datos = $proveedores->insertProveedor($Nombre_Empresa, $Direccion, $Telefono, $Contacto_Empresa, $Telefono_Contacto);
        echo json_encode($datos);

        break;

    case "updateProveedor":
        $idProveedores = $_POST['idProveedores'];
        $Nombre_Empresa = $_POST['Nombre_Empresa'];
        $Direccion = $_POST['Direccion'];
        $Telefono = $_POST['Telefono'];
        $Contacto_Empresa = $_POST['Contacto_Empresa'];
        $Telefono_Contacto = $_POST['Telefono_Contacto'];
        $datos = $proveedores->updateProveedor($idProveedores, $Nombre_Empresa, $Direccion, $Telefono, $Contacto_Empresa, $Telefono_Contacto);
        echo json_encode($datos);
        break;

    case 'deleteProveedor':
        $idProveedores = $_POST['idProveedores'];
        $datos = $proveedores->deleteProveedor($idProveedores);
        echo json_encode($datos);
        break;
}
