<?php
//CRUD    
//CREAR, BUSCAR POR CLAVE PRIMARIO, ACTUALIZAR Y BORRAR, listar la tabla(opcional)
require_once("mascota.php");
require_once("libreriaPDOCla.php");

class daoMascotas extends ConBase{

    public $mascotas;

    // public function __construct($bbdd)
    // {
    //     $this->$bbdd = $bbdd;
    // }

    public function insertar($mascota){
        $consulta = "INSERT INTO mascota (n_chip,nombre_mascota,raza,especie,nacimiento,eutanasia,id_personal,nif_dueno) VALUES(:n_chip,:nombre_mascota,:raza,:especie,:nacimiento,:eutanasia,:id_personal,:nif_dueno)";
        $param = array(":n_chip" => $mascota->chip,":nombre_mascota" => $mascota->nombre,":especie" => $mascota->especie,":raza" => $mascota->raza,
        ":nacimiento" => $mascota->nacimiento,":nif_dueno" => $mascota->dueno,":eutanasia" => $mascota->eutanasia,":id_personal" => $mascota->id_especialista);
        
        $this->ConsultaSimple($consulta, $param);
    }

    public function actualizar($mascota){
        $consulta = "UPDATE mascota SET n_chip=:chip,nombre_mascota=:nombre,raza=:raza,especie=:especie,eutanasia=:eutanasia WHERE n_chip=:chip";
        $param = array(":nombre" => $mascota->nombre,":especie" => $mascota->especie,":raza" => $mascota->raza,
        ":eutanasia" => $mascota->eutanasia,":chip" => $mascota->chip);
        //echo $param[":eutanasia"];
        $this->ConsultaSimple($consulta,$param);
    }

    public function buscar($dato){
        $mascota = new Mascota();
        $consulta = "SELECT * FROM mascota WHERE n_chip=:dato";
        $param = array(":dato" => $dato);
        //echo $param[':dato'];
        $this->ConsultaDatos($consulta, $param);
        if (!empty($this->filas)) {
            $fila = $this->filas[0];
            $mascota->__SET("chip", $fila['n_chip']);
            $mascota->__SET("nombre", $fila['nombre_mascota']);
            $mascota->__SET("especie", $fila['especie']);
            $mascota->__SET("raza", $fila['raza']);
            $mascota->__SET("nacimiento", $fila['nacimiento']);
            $mascota->__SET("dueno", $fila['nif_dueno']);
            $mascota->__SET("eutanasia", $fila['eutanasia']);
            $mascota->__SET("id_especialista", $fila['id_personal']);
        }
        return $mascota;
    }

    public function eliminar($id){
        $consulta = "DELETE from mascota where n_chip=:id";
        $param = array(":id" => $id);
        echo $consulta;
        $this->ConsultaSimple($consulta, $param);
    }

    public function listar($id){
        
        $this->mascotas = array();
        $consulta = "SELECT * FROM mascota WHERE id_personal=:id";
        $param = array(":id" => $id);
        
        $this->ConsultaDatos($consulta, $param);
        
        foreach ($this->filas as $fila) {
            $mascota = new Mascota();
            $mascota->__SET("chip", $fila['n_chip']);
            $mascota->__SET("nombre", $fila['nombre_mascota']);
            $mascota->__SET("especie", $fila['especie']);
            $mascota->__SET("raza", $fila['raza']);
            $mascota->__SET("nacimiento", $fila['nacimiento']);
            $mascota->__SET("dueno", $fila['nif_dueno']);
            $mascota->__SET("eutanasia", $fila['eutanasia']);
            $mascota->__SET("id_especialista", $fila['id_personal']);
            
            
            $this->mascotas[] = $mascota;

            
            
        }
        return $this->mascotas;
    }

    public function listar2($id){
        
        $this->mascotas = array();
        $consulta = "SELECT * FROM mascota WHERE nif_dueno=:id";
        $param = array(":id" => $id);
        
        $this->ConsultaDatos($consulta, $param);
        
        foreach ($this->filas as $fila) {
            $mascota = new Mascota();
            $mascota->__SET("chip", $fila['n_chip']);
            $mascota->__SET("nombre", $fila['nombre_mascota']);
            $mascota->__SET("especie", $fila['especie']);
            $mascota->__SET("raza", $fila['raza']);
            $mascota->__SET("nacimiento", $fila['nacimiento']);
            $mascota->__SET("dueno", $fila['nif_dueno']);
            $mascota->__SET("eutanasia", $fila['eutanasia']);
            $mascota->__SET("id_especialista", $fila['id_personal']);
            
            
            $this->mascotas[] = $mascota;

            
            
        }
        return $this->mascotas;
    }
}
?>