<?php

$proveedores = new Proveedores();

switch ($_GET['op']) {

    case 'getProveedores':
        $datos = array();
        $datos = $proveedores->getProveedores();
        while ($row = mysqli_fetch_assoc($datos)) {
            $proveedores[] = $row;
        }
        echo json_encode($datos);

        break;
    case 'getProveedorPorID':
        $idProveedores  = $_POST['idProveedores '];
        $datos = array();
        $datos = $proveedores->getProveedorPorID($idProveedores);
        $res = mysqli_fetch_assoc($datos);
        echo json_encode($res);
        break;

    case 'insertProveedor':
        $Nombre_Empresa = $_POST['Nombre_Empresa'];
        $Direccion = $_POST['Direccion'];
        $Telefono = $_POST['Telefono'];
        $Contacto_Empresa = $_POST['Contacto_Empresa'];
        $Telefono_Contacto = $_POST['Telefono_Contacto'];
        $datos = array();
        $datos = $proveedores->insertProveedor($Nombre_Empresa, $Direccion, $Telefono, $Contacto_Empresa, $Telefono_Contacto);
        echo json_encode($datos);

        break;

    case 'updateProveedor':
        $idProveedores = $_POST['idProveedores'];
        $Nombre_Empresa = $_POST['Nombre_Empresa'];
        $Direccion = $_POST['Direccion'];
        $Telefono = $_POST['Telefono'];
        $Contacto_Empresa = $_POST['Contacto_Empresa'];
        $Telefono_Contacto = $_POST['Telefono_Contacto'];
        $datos = array();
        $datos = $proveedores->updateProveedor($idProveedores, $Nombre_Empresa, $Direccion, $Telefono, $Contacto_Empresa, $Telefono_Contacto);
        echo json_encode($datos);
        break;

    case 'deleteProveedor':
        $idProveedores = $_POST['idProveedores'];
        $datos = array();
        $datos = $proveedores->deleteProveedor($idProveedores);
        echo json_encode($datos);
        break;
}
