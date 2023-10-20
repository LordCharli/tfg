<?php

    include("daoMascotas.php");
    require_once("mascota.php");

    $data = json_decode(file_get_contents('php://input'), true);

    $daoMascota = new daoMascotas('id15627373_veterinario');

    $mascotaJson = array(
        'id' => $data['id']
    );

    $mascotas = array();

    $mascotas = $daoMascota -> listar($mascotaJson['id']);

    //print($mascotas[0]->nombre);

    if (empty($mascotas)) {
        echo json_encode(array("a" =>0));
    } else {
        $mascotasArray = array("a"=>1,"longitud"=>0);

        for ($i=0; $i < count($mascotas); $i++) { 

            $mascota = array("chip"=>$mascotas[$i]->chip,"nombre"=>$mascotas[$i]->nombre,"especie"=>$mascotas[$i]->especie,"raza"=>$mascotas[$i]->raza,"eutanasia"=>$mascotas[$i]->eutanasia);

            $mascotasArray[$i] = $mascota;

            $mascotasArray["longitud"] = $mascotasArray["longitud"]+1;
        }

        echo json_encode($mascotasArray);
        
    }




?>