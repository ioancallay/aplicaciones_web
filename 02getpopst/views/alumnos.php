<?php
require_once("../config/config.php");

$val = new ClaseConectar();

$conexion = $val->ProcedimientoConectar();

return $conexion;
