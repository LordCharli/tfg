<?php

    include("daoCuentas.php");
    include("daoLogins.php");
    require_once("cuentas.php");
    require_once("login.php");

    $data = json_decode(file_get_contents('php://input'), true);

    $daoCuenta = new daoCuentas('id15627373_veterinario');
    $cuentas = new Cuenta();

    $daoLogin = new daoLogins('id15627373_veterinario');
    $login = new Login();
    
    
    $cuenta = array(
        'user' => $data['user'],
        'pass' => $data['pass'],
        'remember' => $data['remember']
    );
    
    $hash = sha1($cuenta['pass']);
    
    $user = trim($cuenta['user']);

    $cuentas = $daoCuenta -> buscar($user);
    
    
    if(!empty($cuentas)){
        //fecha actual en epoc
        $fecha = new DateTime();
        $epoc = $fecha->getTimestamp();
        

        if ($hash != $cuentas->pass) {
            $login->__SET("seguridadSocial", $cuenta['user']);
            $login->__SET("fecha", $epoc);
            $login->__SET("estado", "D");

            $daoLogin -> insertar($login);
            
            echo json_encode(array("a" =>1));


        } else {
            $login->__SET("seguridadSocial", $cuenta['user']);
            $login->__SET("fecha", $epoc);
            $login->__SET("estado", "A");

            $daoLogin -> insertar($login);


            echo json_encode(array("a" =>2 ,"session" => $cuentas->n_seguridad_social));
        }
    } else {
        
        echo json_encode(array("a" =>0));
    }

    

?>