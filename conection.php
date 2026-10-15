<?php
$host = "localhost";
$usuario = "root";      // Usuario por defecto en XAMPP
$password = "";          // Contraseña por defecto en XAMPP (vacía)
$base_datos = "shiftly_db";

$conexion = new mysqli($host, $usuario, $password, $base_datos);

if ($conexion->connect_error) {
    die(json_encode([
        'success' => false, 
        'message' => 'Error de conexión a la Base de Datos: ' . $conexion->connect_error
    ]));
}

$conexion->set_charset("utf8");
?>