<?php
    class Dueno {
        private $nif;
        private $nombre;
        private $apellido;
        private $apellido2;
        private $telefono;
        private $domicilio;

        public function __GET($name){return $this->$name;}
        public function __SET($name,$value){$this->$name = $value;}
        
    }
?>