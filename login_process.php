<?php
header('Content-Type: application/json');
require_once 'conexion.php';

// Leer los datos enviados por la petición fetch en formato JSON
$input = json_decode(file_get_contents('php://input'), true);

$correo = trim($input['correo'] ?? '');
$password = trim($input['password'] ?? '');

if (empty($correo) || empty($password)) {
    echo json_encode(['success' => false, 'message' => 'Por favor, ingresa tu correo y contraseña.']);
    exit;
}

// Consulta segura con Prepared Statements
$stmt = $conexion->prepare("SELECT id, nombre, password FROM usuarios WHERE correo = ?");
$stmt->bind_param("s", $correo);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows === 1) {
    $usuario = $resultado->fetch_assoc();
    
    // Verificación de credencial (soporta texto plano o hash seguro)
    if ($password === $usuario['password'] || password_verify($password, $usuario['password'])) {
        echo json_encode([
            'success' => true, 
            'message' => '¡Inicio de sesión exitoso! Redirigiendo...',
            'usuario' => $usuario['nombre']
        ]);
    } else {
        echo json_encode(['success' => false, 'message' => 'La contraseña es incorrecta.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'El correo electrónico no se encuentra registrado.']);
}

$stmt->close();
$conexion->close();
?>