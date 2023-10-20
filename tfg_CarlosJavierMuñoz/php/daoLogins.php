<?php
//CRUD    
//CREAR, BUSCAR POR CLAVE PRIMARIO, ACTUALIZAR Y BORRAR, listar la tabla(opcional)
require_once("login.php");
require_once("libreriaPDOCla.php");

class daoLogins extends ConBase{

    public $logins;

    // public function __construct($bbdd)
    // {
    //     $this->$bbdd = $bbdd;
    // }

    public function insertar($login){
        $consulta = "INSERT INTO logins (id_seguridad_social,fecha,estado) VALUES(:id_seguridad_social,:fecha,:estado)";
        $param = array(":id_seguridad_social" => $login->__GET("seguridadSocial"),":fecha" => $login->__GET("fecha"),":estado" => $login->__GET("estado"));
        //echo $consulta;
        $this->ConsultaSimple($consulta, $param);
    }

    // public function actualizar($articulo){
    //     $consulta = "UPDATE articulos SET id=:id,marca=:marca,modelo=:modelo,precio=:precio,alta=:alta,foto=:foto WHERE id=:id";
    //     $param = array(":id" => $articulo->__GET("id"),":marca" => $articulo->__GET("marca"),":modelo" => $articulo->__GET("modelo"),
    //     ":precio" => $articulo->__GET("precio"),":alta" => $articulo->__GET("alta"),":foto" => $articulo->__GET("foto"));
    //     echo $consulta;
    //     $this->ConsultaSimple($consulta, $param);
    // }

    // public function buscar($dato){
    //     $mascota = new Mascota();
    //     $consulta = "SELECT * FROM mascota WHERE n_chip=:dato";
    //     $param = array(":dato" => $dato);
    //     //echo $param[':dato'];
    //     $this->ConsultaDatos($consulta, $param);
    //     if (!empty($this->filas)) {
    //         $fila = $this->filas[0];
    //         $mascota->__SET("chip", $fila['n_chip']);
    //         $mascota->__SET("nombre", $fila['nombre_mascota']);
    //         $mascota->__SET("especie", $fila['especie']);
    //         $mascota->__SET("raza", $fila['raza']);
    //         $mascota->__SET("nacimiento", $fila['f.nacimiento']);
    //         $mascota->__SET("dueno", $fila['nif_dueno']);
    //         $mascota->__SET("eutanasia", $fila['eutanasia']);
    //         $mascota->__SET("id_especialista", $fila['id_personal']);
    //     }
    //     return $mascota;
    // }

    // public function eliminar($id){
    //     $consulta = "DELETE from mascota where n_chip=:id";
    //     $param = array(":id" => $id);
    //     echo $consulta;
    //     $this->ConsultaSimple($consulta, $param);
    // }

    // public function listar($id){
        
    //     $this->historiales = array();
    //     $consulta = "SELECT * FROM historial WHERE n_chip=:id";
    //     $param = array(":id" => $id);
        
    //     $this->ConsultaDatos($consulta, $param);
        
    //     foreach ($this->filas as $fila) {
    //         $historial = new Mascota();
    //         $historial->__SET("chip", $fila['n_chip']);
    //         $historial->__SET("revision", $fila['id_revision']);
    //         $historial->__SET("fecha", $fila['fecha']);
    //         $historial->__SET("descripcion", $fila['descripcion']);
            
    //         $this->historiales[] = $historial;

    //         return $this->historiales;
            
    //     }
    // }
}
?>