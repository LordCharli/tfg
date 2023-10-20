<?php

    include("daoPersonal.php");
    include("daoCentros.php");
    require_once("personal.php");
    require_once("centro.php");

    $data = json_decode(file_get_contents('php://input'), true);

    $daoPersonal = new daoPersonal('id15627373_veterinario');
    $daoCentro = new daoCentro('id15627373_veterinario');
    $personal = new Personal();
    $centro = new Centro();


    $usuario = array(
        'id' => $data['id']
    );
    

    $personal = $daoPersonal -> buscar($usuario['id']);
    $centro = $daoCentro -> buscar($personal->centro);
    
    if (empty($personal)) {
        echo json_encode(array("a" =>0));
    } else {
        echo json_encode(array("a" =>1,"nombre" => $personal->nombre,"apellido" => $personal->apellido,"apellido2" => $personal->apellido2,"email" => $personal->email,"tel" => $personal->tel,"centro" => $personal->centro,"centroNombre"=>$centro->nombre));
    }

?>