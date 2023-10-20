<?php
    class Cuenta {
        private $n_seguridad_social;
        private $pass;

        public function __GET($name){return $this->$name;}
        public function __SET($name,$value){$this->$name = $value;}
        public function __toString(){return $this->n_seguridad_social." ".$this->pass;}
    }
?>