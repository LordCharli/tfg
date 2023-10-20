<?php
//CRUD    
//CREAR, BUSCAR POR CLAVE PRIMARIO, ACTUALIZAR Y BORRAR, listar la tabla(opcional)
require_once("personal.php");
require_once("libreriaPDOCla.php");

class daoPersonal extends ConBase{

    public $personal;

    // public function __construct($bbdd)
    // {
    //     $this->$bbdd = $bbdd;
    // }

    public function actualizar($personal){
        $consulta = "UPDATE personal SET id_seguridad_social=:id,nombre_empleado=:nombre,apellido_empleado=:apellido,apellido_empleado2=:apellido2,email=:email,telefono=:tel,id_centro=:centro WHERE id_seguridad_social=:id";
        $param = array(":id" => $personal->id,":nombre" => $personal->nombre,":apellido" => $personal->apellido,":apellido2" => $personal->apellido2,
        ":email" => $personal->email,":tel" => $personal->tel,":centro" => $personal->centro);
        
        $this->ConsultaSimple($consulta,$param);
    }

    public function buscar($dato){
        $usuario = new Personal();
        $consulta = "SELECT * FROM personal WHERE id_seguridad_social=:dato";
        $param = array(":dato" => $dato);
        //echo $consulta;
        $this->ConsultaDatos($consulta, $param);
        if (!empty($this->filas)) {
            $fila = $this->filas[0];
            $usuario->__SET("nombre", $fila['nombre_empleado']);
            $usuario->__SET("apellido", $fila['apellido_empleado']);
            $usuario->__SET("apellido2", $fila['apellido_empleado2']);
            $usuario->__SET("email", $fila['email']);
            $usuario->__SET("tel", $fila['telefono']);
            $usuario->__SET("centro", $fila['id_centro']);
        }
        return $usuario;
    }
}
?>