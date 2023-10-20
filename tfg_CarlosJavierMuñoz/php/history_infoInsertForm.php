<?php

    include("daoHistorial.php");
    require_once("historial.php");

    $data = json_decode(file_get_contents('php://input'), true);
    

    $daoHistorial = new daoHistorial('id15627373_veterinario');
    $historial = new Historial();

    $historialJson = array(
        'nchip' => $data['nchip'],
        'fecha' => $data['fecha'],
        'descrip' => $data['descrip']
    );


    $historialJson['fecha'] = trim($historialJson['fecha']);
    $fecha = array();
    $fecha = explode("-",$historialJson['fecha']);
    $epoch = mktime(0,0,0,$fecha[1],$fecha[0],$fecha[2]);

    $historial->__SET("chip", $historialJson['nchip']);
    $historial->__SET("fecha", $epoch);
    $historial->__SET("descripcion", $historialJson['descrip']);

    $daoHistorial -> insertar($historial);

    echo json_encode(array("a"=>1));      
?>