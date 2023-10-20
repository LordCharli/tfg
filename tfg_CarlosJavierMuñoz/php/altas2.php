<?php

    include("daoDueno.php");
    include("daoMascotas.php");
    require_once("mascota.php");
    require_once("dueno.php");


    $data = json_decode(file_get_contents('php://input'), true);
    

    $daoMascota = new daoMascotas('id15627373_veterinario');
    $daoDueno = new daoDueno('id15627373_veterinario');
    $mascota = new Mascota();
    $dueno = new Dueno();

    $insertJson = array(
        'chip' => $data['chip'],
        'nombre' => $data['nombre'],
        'raza' => $data['raza'],
        'especie' => $data['especie'],
        'nacimiento' => $data['nacimiento'],
        'nif' => $data['nif'],
        'personal' => $data['personal']
    );

    // comprobar que el dueño esta registrado
    
    $dueno = $daoDueno->buscar($insertJson['nif']);
    
    if ($dueno->nif != $insertJson['nif']) {
        echo json_encode(array("a"=>0));
    } else {
        $mascota = $daoMascota->buscar($insertJson['chip']);
        if ($mascota->chip == $insertJson['chip']) {
            echo json_encode(array("a"=>2));
        } else {
            $mascota = new Mascota();
            
            $insertJson['nacimiento'] = trim($insertJson['nacimiento']);
            $fecha = array();
            $fecha = explode("-",$insertJson['nacimiento']);
            $epoch = mktime(0,0,0,$fecha[1],$fecha[0],$fecha[2]);
        
            $mascota->__SET("chip", $insertJson['chip']);
            $mascota->__SET("nombre", $insertJson['nombre']);
            $mascota->__SET("especie", $insertJson['especie']);
            $mascota->__SET("raza", $insertJson['raza']);
            $mascota->__SET("eutanasia", "No");
            $mascota->__SET("dueno", $insertJson['nif']);
            $mascota->__SET("id_especialista", $insertJson['personal']);
            $mascota->__SET("nacimiento", $epoch);
            
            
            if($insertJson['chip'] == "" || $insertJson['nombre'] == "" || $insertJson['raza'] == "" || $insertJson['especie'] == "" || $insertJson['nacimiento'] == "" || $insertJson['nif'] == "" || $insertJson['personal'] == ""){
                 echo json_encode(array("a"=>3)); 
            
            } else {
                $daoMascota -> insertar($mascota);
                echo json_encode(array("a"=>1)); 
            }
            
             
        }               
    }



    

        
?>