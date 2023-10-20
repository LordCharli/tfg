<?php

    include("daoDueno.php");
    require_once("dueno.php");

    $data = json_decode(file_get_contents('php://input'), true);

    $daoDueno = new daoDueno('id15627373_veterinario');
    $dueno = new dueno();   

    $mascotaJSON = array(
        'id' => $data['iddueno'],
        'nombre' => $data['nombre'],
        'apellido' => $data['apellido'],
        'apellido2' => $data['apellido2'],
        'telefono' => $data['telefono'],
        'domicilio' => $data['domicilio']
    );

    $dueno->__SET('nif',$mascotaJSON['id']);
    $dueno->__SET('nombre',$mascotaJSON['nombre']);
    $dueno->__SET('apellido',$mascotaJSON['apellido']);
    $dueno->__SET('apellido2',$mascotaJSON['apellido2']);
    $dueno->__SET('telefono',$mascotaJSON['telefono']);
    $dueno->__SET('domicilio',$mascotaJSON['domicilio']);

    $daoDueno -> actualizar($dueno);

    
    echo json_encode(array("a" =>1));
    

?>