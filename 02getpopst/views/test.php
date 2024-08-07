<?php

require_once('../config/conexion.php');

$test = new ClaseConectar();


$datos = $test->ProcedimientoConectar();
var_dump($datos);
