<?php
    class Mascota {
        private $chip;
        private $nombre;
        private $especie;
        private $raza;
        private $eutanasia;
        private $dueno;
        private $id_especialista;
        private $nacimiento;

        public function __GET($name){return $this->$name;}
        public function __SET($name,$value){$this->$name = $value;}
        
    }
?>