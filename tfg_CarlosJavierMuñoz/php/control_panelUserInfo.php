<?php

    include("daoPersonal.php");
    require_once("personal.php");

    $data = json_decode(file_get_contents('php://input'), true);

    $daoPersonal = new daoPersonal('id15627373_veterinario');
    $personal = new personal();   

    $usuario = array(
        'id' => $data['id'],
        'user' => $data['user'],
        'surname' => $data['surname'],
        'surname2' => $data['surname2'],
        'email' => $data['email'],
        'tel' => $data['tel'],
        'centro' => $data['centro']
    );

    $personal->__SET('id',$usuario['id']);
    $personal->__SET('nombre',$usuario['user']);
    $personal->__SET('apellido',$usuario['surname']);
    $personal->__SET('apellido2',$usuario['surname2']);
    $personal->__SET('email',$usuario['email']);
    $personal->__SET('tel',$usuario['tel']);
    $personal->__SET('centro',$usuario['centro']);

    $daoPersonal -> actualizar($personal);

    
    echo json_encode(array("a" =>1));
    

?>