<?php
    class Personal {
        private $id;
        private $nombre;
        private $apellido;
        private $apellido2;
        private $email;
        private $tel;
        private $centro;

        public function __GET($name){return $this->$name;}
        public function __SET($name,$value){$this->$name = $value;}
        
    }
?>