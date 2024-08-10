<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if ($method == "OPTIONS") {
    die();
}

require_once('../models/productos.models.php');
error_reporting(0);
$productos = new Productos();

switch ($_GET["op"]) {
    case 'getProductos':
        $datos = $productos->getProductos();
        while ($row = mysqli_fetch_assoc($datos)) {
            $todos[] = $row;
        }
        echo json_encode($todos);
        break;

    case 'getProductoId':
        $idProductos = $_POST["idProductos"];
        $datos = $productos->getProductoId($idProductos);
        $resultado = mysqli_fetch_assoc($datos);
        echo json_encode($resultado);
        break;

    case 'insertProducto':
        $Codigo_Barras = $_POST["Codigo_Barras"];
        $Nombre_Producto = $_POST["Nombre_Producto"];
        $Grava_IVA = $_POST["Grava_IVA"];
        $datos = $productos->insertProducto($Codigo_Barras, $Nombre_Producto, $Grava_IVA);
        echo json_encode($datos);
        break;

    case 'updateProducto':
        $id = $_POST["idProductos"];
        $Codigo_Barras = $_POST["Codigo_Barras"];
        $Nombre_Producto = $_POST["Nombre_Producto"];
        $Grava_IVA = $_POST["Grava_IVA"];
        $datos = $productos->updateProducto($idProductos, $Codigo_Barras, $Nombre_Producto, $Grava_IVA);
        echo json_encode($datos);
        break;

    case 'deleteProducto':
        $idProductos = $_POST["idProductos"];
        $datos = $productos->deleteProducto($idProductos);
        echo json_encode($datos);
        break;
}
