<?php

class ClaseConectar
{
    public $conexion;
    protected $db;
    private $db_user = "iancallay";
    private $db_password = "GE]i41_44vilPE@n";
    private $db_host = "localhost";
    private $db_name = "sexto";

    public function ProcedimientoConectar()
    {
        $this->conexion = mysqli_connect($this->db_host, $this->db_user, $this->db_password, $this->db_name);
        mysqli_query($this->conexion, "SET NAMES 'utf8'");

        if ($this->conexion->connect_error) {
            die("No se pudo conectar al servidor: " . $this->conexion->connect_error);
        }

        $this->db = $this->conexion;
        if ($this->db == 0) {
            die("No se pudo conectar a la base de datos" . $this->conexion->connect_error);
        }
        return $this->conexion;
    }
}
