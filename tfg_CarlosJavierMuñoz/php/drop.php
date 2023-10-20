<?php

    include("daoMascotas.php");
    include("daoDueno.php");
    include("daoHistorial.php");
    require_once("mascota.php");
    require_once('dueno.php');
    



    $data = json_decode(file_get_contents('php://input'), true);

    $daoMascotas = new daoMascotas('id15627373_veterinario');
    $daoDuenos = new daoDueno('id15627373_veterinario');
    $daoHistorial = new daoHistorial('id15627373_veterinario');
    $mascota = new Mascota();

    

    $mascotaJSON = array(
        'id' => $data['id']
    );

    $mascota = $daoMascotas->buscar($mascotaJSON['id']);  

    $mascotas = array();

    $mascotas = $daoMascotas -> listar2($mascota->dueno);
    if (count($mascotas) > 1) {
        $daoHistorial->eliminar($mascotaJSON['id']);
        $daoMascotas->eliminar($mascotaJSON['id']);
        echo json_encode(array("a"=>2));
    } else {
        $daoHistorial->eliminar($mascotaJSON['id']);
        $daoMascotas->eliminar($mascotaJSON['id']);
        $daoDuenos->eliminar($mascota->dueno);
        echo json_encode(array("a"=>1));
    }


    // if (count($duenos) < 1) {
    //     $daoDuenos->eliminar($dueno);
    //     echo json_encode(array("a"=>1));
    // } else {
    //     if (count($duenos) > 1) {
    //         
    //     } else {
    //         json_encode(array("a"=>0));
    //     }
    // }
    



?>