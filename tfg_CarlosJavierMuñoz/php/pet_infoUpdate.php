<?php

    include("daoMascotas.php");
    require_once("mascota.php");

    $data = json_decode(file_get_contents('php://input'), true);

    $daoMascota = new daoMascotas('id15627373_veterinario');
    $mascota = new Mascota();   

    $mascotaJSON = array(
        'chip' => $data['nchip'],
        'nombre' => $data['nombre'],
        'especie' => $data['especie'],
        'eutanasia' => $data['eutanasia'],
        'fecha' => $data['fecha'],
        'dueno' => $data['dueno'],
        'id' => $data['especialista'],
        'raza' =>$data['raza']
    );
    
    // $mascotaJSON['fecha'] = trim($mascotaJSON['fecha']);
    // $fecha = array();
    // $fecha = explode("-",$mascotaJSON['fecha']);
    // $epoch = mktime(0,0,0,$fecha[1],$fecha[0],$fecha[2]);
    

    $mascota->__SET('chip',$mascotaJSON['chip']);
    $mascota->__SET('nombre',$mascotaJSON['nombre']);
    $mascota->__SET('especie',$mascotaJSON['especie']);
    $mascota->__SET('raza',$mascotaJSON['raza']);
    $mascota->__SET('eutanasia',$mascotaJSON['eutanasia']);
    $mascota->__SET('nacimiento',$mascotaJSON['fecha']);
    $mascota->__SET('id_especialista',$mascotaJSON['id']);
    $mascota->__SET('dueno',$mascotaJSON['dueno']);

    $daoMascota -> actualizar($mascota);

    
    echo json_encode(array("a" =>1));
    

?>