if (sessionStorage.getItem('user') || localStorage.getItem('user')) {
    
    loadDueno(getParameter());
    document.getElementById('update').addEventListener('click',(b)=>{
        b.preventDefault();
        updateDueno(getParameter());
    })

}else {
    // Si la sesion no exite o es cerrada te reedireccionara automaticamente al login
    window.location.href = "index.html";
}

function getParameter() {
    var url = window.location.search;
    var parametro = url.replace("?idDueno=","");
    return parametro;
    
}

function loadDueno(id) {
    
    var msg = document.getElementById("error-msg");
    var data = {id: id};

    fetch('https://veterinariun.000webhostapp.com/php/dueno_infoLoad', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
          }
    })

    .then(resp => resp.json())
    .then( function (success) {
            // Respuesta si  la query no sacara nada
            if (success.a === 0) {
                msg.innerHTML = "Ha ocurrido un error";
            } 
            // Respuesta si todo va bien y crea la tabla
            if (success.a === 1) {           
                document.getElementById('nombre').value = success.nombre;
                document.getElementById('apellido').value = success.apellido;
                document.getElementById('apellido2').value = success.apellido2;
                document.getElementById('telefono').value = success.telefono;
                document.getElementById('domicilio').value = success.domicilio;

            }
            
        })

}

function updateDueno(id){
    
    const petform = document.getElementById('form-dueno-info');
    const petformObj = new FormData(petform);

    if (validator() == 1) {
        document.getElementById("error-msg").style.color = "red";
        document.getElementById("error-msg").innerHTML = "Nombre invalido";
    } else {
        if (validator() == 2) {
            document.getElementById("error-msg").style.color = "red";
            document.getElementById("error-msg").innerHTML = "Apellido invalido";
        } else {
            if (validator() == 3) {
                document.getElementById("error-msg").style.color = "red";
                document.getElementById("error-msg").innerHTML = "Apellido 2 invalido";
            } else {
                if (validator() == 4) {
                    document.getElementById("error-msg").style.color = "red";
                    document.getElementById("error-msg").innerHTML = "Telefono invalido";
                } else {
                    if (validator() == 5) {
                        document.getElementById("error-msg").style.color = "red";
                        document.getElementById("error-msg").innerHTML = "Domicilio invalido";
                    } else {
                        var data = {iddueno:id,nombre: petformObj.get('nombre') , apellido: petformObj.get('apellido') , apellido2: petformObj.get('apellido2'), 
                        telefono: petformObj.get('telefono'), domicilio: petformObj.get('domicilio')};

                        fetch('https://veterinariun.000webhostapp.com/php/dueno_infoUpdate', {
                            method: 'POST',
                            body: JSON.stringify(data),
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })

                        .then(resp => resp.json())
                        .then( function (success) {
                                // Respuesta si todo va bien carga los campos
                                if (success.a === 1) {           
                                    
                                    document.getElementById("error-msg").style.color = "green";
                                    document.getElementById("error-msg").innerHTML = "Actualizado con exito";
                                }
                                
                            })
                    }
                }
            }
        }
    }






    
}

function validator(){

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var apellido2 = document.getElementById('apellido2').value;
    var tel = document.getElementById('telefono').value;
    var domicilio = document.getElementById('domicilio').value;

    if (nombre == "" || nombre.lenght > 20) {
        return 1;
    }
    if (apellido == "" || apellido.lenght > 20) {
        return 2;
    }
    if (apellido2 == "" || apellido2.lenght > 20) {
        return 3;
    }

    var reg = new RegExp();
    reg = /\d{9}$/;
    
    if (!reg.test(tel) || tel === "") {
        return 4;
    }

    if (domicilio == "" || domicilio.lenght > 50) {
        return 5;
    }
}