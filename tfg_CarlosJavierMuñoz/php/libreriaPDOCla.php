<?php

class ConBase {

private $host="localhost";
private $usuario="id15627373_root";
private $clave="Nt#5W&PuC2uJ%<dB";

protected $bbdd;
protected $db;

public $filas=array();   

function __construct($base)   //Al instanciar la clase debemos pasar el nombre de la BBDD
{
  $this->bbdd=$base;	
}  

private function conectaDb()   //Funcion que nos conecta a una BBDD
{
    try {
         $this->db = new PDO("mysql:host=$this->host;dbname=$this->bbdd",$this->usuario,$this->clave);
         $this->db->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);
         $this->db->exec("set names utf8mb4");
    } 
	catch(PDOException $e) 
	{
        
        print "  <p>Error: No puede conectarse con la base de datos.</p>\n\n";
        print "  <p>Error: " . $e->getMessage() . "</p>\n";
       
        exit();
    }
}

public function ConsultaSimple($consulta,$param)
{
	$this->conectaDb();
	// echo $consulta;
	$resul=$this->db->prepare($consulta);
	if (!$resul->execute($param))    
	{
	  echo "Error al ejecutar la consulta simple";	
	}	

    $this->Cerrar();
   
}
public function ConsultaDatos($consulta,$param)
{
	// echo $consulta;
	//echo $param[':dato'];
    $this->filas=array();   //Limpiamos el Array de filas para cada consulta  
   
	$this->conectaDb();
	
	$resul=$this->db->prepare($consulta);
	
	if (!$resul->execute($param))    
	{
	  echo "Error al ejecutar la consulta datos";	
	}	
    else
	{
		
	   while($fila=$resul->fetch(PDO::FETCH_ASSOC)) 
       {
		
		  $this->filas[]=$fila;  //Añadimos una fila mas al Array 
	   }
	   
	}	
	
	$this->Cerrar();
	
}


private function Cerrar()    //Cierra una conexión PDO
{
   $this->db=null;	
}


}



?>