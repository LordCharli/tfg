<?php

    include("daoHistorial.php");
    require_once("Historial.php");

    $data = json_decode(file_get_contents('php://input'), true);

    $daoHistorial = new daoHistorial('id15627373_veterinario');

    $historialJson = array(
        'id' => $data['id']
    );

    $historial = array();

    $historial = $daoHistorial->listar($historialJson['id']);

    if (empty($historial)) {
        echo json_encode(array("a" =>0));
    } else {
        $historialArray = array("a"=>1,"longitud"=>0);
        

        for ($i=0; $i < count($historial); $i++) { 
            //echo $historial[$i]->revision; 
            
            $fecha = $historial[$i]->fecha;
            $fecha = date("d-m-Y", substr($fecha, 0, 10));     

            $historialOnly = array("revision"=>$historial[$i]->revision,"chip"=>$historial[$i]->chip,"fecha"=>$fecha,"descripcion"=>$historial[$i]->descripcion);

            $historialArray[$i] = $historialOnly;

            $historialArray["longitud"]++;
        }

        echo json_encode($historialArray);
        
    }




?>