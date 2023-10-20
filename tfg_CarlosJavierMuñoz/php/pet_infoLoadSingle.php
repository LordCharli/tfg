<?php

    include("daoMascotas.php");
    require_once("mascota.php");

    $data = json_decode(file_get_contents('php://input'), true);
    

    $daoMascota = new daoMascotas('id15627373_veterinario');
    $mascota = new Mascota();

    $mascotaJson = array(
        'nchip' => $data['nchip']
    );


    $mascota = $daoMascota -> buscar($mascotaJson['nchip']);
    
    $fecha = $mascota->nacimiento;
    $fecha = date("d-m-Y", substr($fecha, 0, 10));
    


    if (empty($mascota)) {
        echo json_encode(array("a" =>0));
    } else {
        echo json_encode(array("a"=>1,"chip"=>$mascota->chip,"nombre"=>$mascota->nombre,"especie"=>$mascota->especie,"raza"=>$mascota->raza,"eutanasia"=>$mascota->eutanasia,"dueno"=>$mascota->dueno,"especialista"=>$mascota->id_especialista,"nacimiento"=>$fecha));      
    }
?>