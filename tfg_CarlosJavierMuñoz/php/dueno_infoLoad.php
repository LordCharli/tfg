<?php

    include("daoDueno.php");
    require_once("dueno.php");

    $data = json_decode(file_get_contents('php://input'), true);
    

    $daoDueno = new daoDueno('id15627373_veterinario');
    $dueno = new Dueno();

    $duenoJson = array(
        'id' => $data['id']
    );


    $dueno = $daoDueno -> buscar($duenoJson['id']);


    if (empty($dueno)) {
        echo json_encode(array("a" =>0));
    } else {
        echo json_encode(array("a"=>1,"nombre"=>$dueno->nombre,"apellido"=>$dueno->apellido,"apellido2"=>$dueno->apellido2,"telefono"=>$dueno->telefono,"domicilio"=>$dueno->domicilio));      
    }
?>