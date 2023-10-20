<?php
//CRUD    
//CREAR, BUSCAR POR CLAVE PRIMARIO, ACTUALIZAR Y BORRAR, listar la tabla(opcional)
require_once("dueno.php");
require_once("libreriaPDOCla.php");

class daoDueno extends ConBase{

    public $duenos;

    // public function __construct($bbdd)
    // {
    //     $this->$bbdd = $bbdd;
    // }

    public function insertar($dueno){
        $consulta = "INSERT INTO dueno (nif,nombre,apellido,apellido2,telefono,domicilio) VALUES(:nif,:nombre,:apellido,:apellido2,:telefono,:domicilio)";
        $param = array(":nif" => $dueno->__GET("nif"),":nombre" => $dueno->__GET("nombre"),":apellido" => $dueno->__GET("apellido"),":apellido2" => $dueno->__GET("apellido2"),
        ":telefono" => $dueno->__GET("telefono"),":domicilio" => $dueno->__GET("domicilio"));
        //echo $consulta;
        $this->ConsultaSimple($consulta, $param);
    }

    public function actualizar($dueno){
        $consulta = "UPDATE dueno SET nombre=:nombre,apellido=:apellido,apellido2=:apellido2,telefono=:telefono,domicilio=:domicilio WHERE nif=:id";
        $param = array(":nombre" => $dueno->nombre,":apellido" => $dueno->apellido,":apellido2" => $dueno->apellido2,
        ":telefono" => $dueno->telefono,":domicilio" => $dueno->domicilio,":id" => $dueno->nif);
        
        $this->ConsultaSimple($consulta,$param);
    }

    public function buscar($dato){
        $dueno = new Dueno();
        $consulta = "SELECT * FROM dueno WHERE nif=:dato";
        $param = array(":dato" => $dato);
        //echo $param[':dato'];
        $this->ConsultaDatos($consulta, $param);
        if (!empty($this->filas)) {
            $fila = $this->filas[0];
            $dueno->__SET("nif", $fila['nif']);
            $dueno->__SET("nombre", $fila['nombre']);
            $dueno->__SET("apellido", $fila['apellido']);
            $dueno->__SET("apellido2", $fila['apellido2']);
            $dueno->__SET("telefono", $fila['telefono']);
            $dueno->__SET("domicilio", $fila['domicilio']);
        }
        return $dueno;
    }

    public function eliminar($id){
        $consulta = "DELETE from dueno where nif=:id";
        $param = array(":id" => $id);
        echo $consulta;
        $this->ConsultaSimple($consulta, $param);
    }

    public function listar($id){
        
        $this->duenos = array();
        $consulta = "SELECT * FROM duenos WHERE nif=:id";
        $param = array(":id" => $id);
        
        $this->ConsultaDatos($consulta, $param);
        
        foreach ($this->filas as $fila) {
            $dueno = new Dueno();
            $dueno->__SET("nif", $fila['nif']);
            $dueno->__SET("nombre", $fila['nombre']);
            $dueno->__SET("apellido", $fila['apellido']);
            $dueno->__SET("apellido2", $fila['apellido2']);
            $dueno->__SET("telefono", $fila['telefono']);
            $dueno->__SET("domicilio", $fila['domicilio']);
            
            $this->duenos[] = $dueno;

            
            
        }
        return $this->duenos;
    }
}
?>