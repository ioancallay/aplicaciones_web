<?php
/*
1. Instalación de PHP:
- Instala un entorno de desarrollo local para PHP utilizando XAMPP, WAMP, MAMP o LAMP.
- Verifica que PHP esté correctamente instalado creando un archivo llamado `info.php` que utilice la función `phpinfo();`. Muestra la captura de pantalla del resultado.

2. Script Básico en PHP:
- Crea un archivo PHP llamado `tarea.php`.
- Dentro de este archivo, realiza las siguientes tareas:

a. Declaración de Variables:
- Define al menos cinco variables de diferentes tipos de datos (integer, float, string, boolean, array).
- Asigna valores a estas variables.

b. Operaciones Aritméticas:
- Realiza al menos dos operaciones aritméticas con las variables numéricas que has creado. Muestra el resultado usando la función `echo`.

c. Manipulación de Cadenas:
- Crea una variable de tipo cadena y realiza las siguientes acciones:
- Concatenación de dos cadenas.
- Obtén la longitud de la cadena.

d. Uso de Condicionales:
- Crea una estructura de control condicional que verifique el valor de una variable booleana y muestre un mensaje diferente según sea `true` o `false`.

e. Creación de un Array:
- Define un arreglo con al menos cinco elementos.
- Muestra un elemento específico del arreglo utilizando su índice.
*/


$entero = 5;
$decimal = 10.5;
$doble = 10.9;
$cadena = "Hola, mundo!";
$booleano = true;
$arreglo = ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4", "Elemento 5"];

echo "Variables declaradas correctamente";

echo "<br>Suma de enteros: " . ($entero + $decimal);

echo "<br>Concatenación de cadenas: " . ($cadena . " " . $doble);

echo "<br>Longitud de la cadena: " . strlen($cadena);

if ($booleano) {
    echo "<br>La variable booleana es true";
} else {
    echo "<br>La variable booleana es false";
}

echo "<br>Elemento del arreglo: " . $arreglo[2];
