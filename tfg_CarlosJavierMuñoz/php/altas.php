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
        'nombreCli' => $data['nombreCli'],
        'apellido' => $data['apellido'],
        'apellido2' => $data['apellido2'],
        'telefono' => $data['telefono'],
        'domicilio' => $data['domicilio'],
        'personal' => $data['personal']
    );

    $insertJson['nacimiento'] = trim($insertJson['nacimiento']);
    $fecha = array();
    $fecha = explode("-",$insertJson['nacimiento']);
    
        if($insertJson['chip'] == "" || $insertJson['nombre'] == "" || $insertJson['raza'] == "" || $insertJson['especie'] == "" || $insertJson['nacimiento'] == "" || $insertJson['nif'] == "" || $insertJson['nombreCli'] == "" || $insertJson['apellido'] == "" || $insertJson['apellido2'] == "" || $insertJson['telefono'] == "" || $insertJson['domicilio'] == "" || $insertJson['personal'] == ""){
             echo json_encode(array("a"=>2)); 
            
        } else {
            $epoch = mktime(0,0,0,$fecha[1],$fecha[0],$fecha[2]);

    $dueno->__SET("nif", $insertJson['nif']);
    $dueno->__SET("nombre", $insertJson['nombreCli']);
    $dueno->__SET("apellido", $insertJson['apellido']);
    $dueno->__SET("apellido2", $insertJson['apellido2']);
    $dueno->__SET("telefono", $insertJson['telefono']);
    $dueno->__SET("domicilio", $insertJson['domicilio']);

    $mascota->__SET("chip", $insertJson['chip']);
    $mascota->__SET("nombre", $insertJson['nombre']);
    $mascota->__SET("especie", $insertJson['especie']);
    $mascota->__SET("raza", $insertJson['raza']);
    $mascota->__SET("eutanasia", "No");
    $mascota->__SET("dueno", $insertJson['nif']);
    $mascota->__SET("id_especialista", $insertJson['personal']);
    $mascota->__SET("nacimiento", $epoch);
    
    
   
    
    
    
    $daoDueno -> insertar($dueno);
    $daoMascota -> insertar($mascota);

    echo json_encode(array("a"=>1)); 
    }
    
    
    
    
    
    
    
    
    
?>