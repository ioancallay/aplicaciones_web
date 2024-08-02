<?php
require_once("../config/conexion.php");

$val = new ClaseConectar();

$conexion = $val->ProcedimientoConectar();

return $conexion;
