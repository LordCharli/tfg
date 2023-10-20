<?php
//CRUD    
//CREAR, BUSCAR POR CLAVE PRIMARIO, ACTUALIZAR Y BORRAR, listar la tabla(opcional)
require_once("cuentas.php");
require_once("libreriaPDOCla.php");

class daoCuentas extends ConBase{

    public $cuentas;

    // public function __construct($bbdd)
    // {
    //     $this->$bbdd = $bbdd;
    // }

    // public function insertar($articulo){
    //     $consulta = "INSERT INTO articulos VALUES(:id,:marca,:modelo,:precio,:alta,:foto)";
    //     $param = array(":id" => $articulo->__GET("id"),":marca" => $articulo->__GET("marca"),":modelo" => $articulo->__GET("modelo"),
    //         ":precio" => $articulo->__GET("precio"),":alta" => $articulo->__GET("alta"),":foto" => $articulo->__GET("foto"));
    //     echo $consulta;
    //     $this->ConsultaSimple($consulta, $param);
    // }

    // public function actualizar($articulo){
    //     $consulta = "UPDATE articulos SET id=:id,marca=:marca,modelo=:modelo,precio=:precio,alta=:alta,foto=:foto WHERE id=:id";
    //     $param = array(":id" => $articulo->__GET("id"),":marca" => $articulo->__GET("marca"),":modelo" => $articulo->__GET("modelo"),
    //     ":precio" => $articulo->__GET("precio"),":alta" => $articulo->__GET("alta"),":foto" => $articulo->__GET("foto"));
    //     echo $consulta;
    //     $this->ConsultaSimple($consulta, $param);
    // }

    public function buscar($dato){
        $cuenta = new Cuenta();
        $consulta = "SELECT * FROM cuentas WHERE n_seguridad_social=:dato";
        $param = array(":dato" => $dato);
        //echo $param[':dato'];
        $this->ConsultaDatos($consulta, $param);
        if (!empty($this->filas)) {
            $fila = $this->filas[0];
            $cuenta->__SET("n_seguridad_social", $fila['n_seguridad_social']);
            $cuenta->__SET("pass", $fila['pass']);
        }
        return $cuenta;
    }
    // public function eliminar($id){
    //     $consulta = "DELETE from articulos where id=:id";
    //     $param = array(":id" => $id);
    //     echo $consulta;
    //     $this->ConsultaSimple($consulta, $param);
    // }
    // public function listar(){
    //     $this->alumnos = array();
    //     $consulta = "SELECT * FROM articulos";
    //     $param = array();
    //     $this->ConsultaDatos($consulta, $param);
    //     foreach ($this->filas as $fila) {
    //         $articulo = new Articulo();
    //         $articulo->__SET("id", $fila['id']);
    //         $articulo->__SET("marca", $fila['marca']);
    //         $articulo->__SET("modelo", $fila['modelo']);
    //         $articulo->__SET("precio", $fila['precio']);
    //         $articulo->__SET("alta", $fila['alta']);
    //         $articulo->__SET("foto", $fila['foto']);
    //         $this->articulos[] = $articulo;
    //     }
    // }
}
