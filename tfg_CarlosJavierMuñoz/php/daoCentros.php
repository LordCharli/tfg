<?php
//CRUD    
//CREAR, BUSCAR POR CLAVE PRIMARIO, ACTUALIZAR Y BORRAR, listar la tabla(opcional)
require_once("centro.php");
require_once("libreriaPDOCla.php");

class daoCentro extends ConBase{

    public $centros;

    // public function __construct($bbdd)
    // {
    //     $this->$bbdd = $bbdd;
    // }

    // public function actualizar($personal){
    //     $consulta = "UPDATE personal SET id_seguridad_social=:id , nombre_empleado=:nombre , apellido_empleado=:apellido , apellido_empleado2=:apellido2 , email=:email , telefono=:tel,id_centro:centro WHERE id_seguridad_social=:id";
    //     $param = array(":id_seguridad_social" => $personal->__GET("id"),":nombre_empleado" => $personal->__GET("nombre"),":apellido_empleado" => $personal->__GET("apellido"),":apellido_empleado2" => $personal->__GET("apellido2"),
    //     ":email" => $personal->__GET("email"),":telefono" => $personal->__GET("tel"),":centro" => $personal->__GET("centro"));
    //     //echo $consulta;
    //     $this->ConsultaSimple($consulta, $param);
    // }

    public function buscar($dato){
        $centro = new Centro();
        $consulta = "SELECT * FROM centro WHERE id_centro=:dato";
        $param = array(":dato" => $dato);
        //echo $consulta;
        $this->ConsultaDatos($consulta, $param);
        if (!empty($this->filas)) {
            $fila = $this->filas[0];
            $centro->__SET("nombre", $fila['nombre_centro']);
            $centro->__SET("direccion", $fila['direccion_centro']);
            $centro->__SET("id", $fila['id_centro']);
        }
        return $centro;
    }
}
?>