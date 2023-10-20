<?php
    class Historial {
        private $revision;
        private $chip;
        private $fecha;
        private $descripcion;

        public function __GET($name){return $this->$name;}
        public function __SET($name,$value){$this->$name = $value;}
        
    }
?>