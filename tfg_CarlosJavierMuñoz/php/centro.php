<?php
    class Centro {
        private $id;
        private $nombre;
        private $direccion;

        public function __GET($name){return $this->$name;}
        public function __SET($name,$value){$this->$name = $value;}
        
    }
?>