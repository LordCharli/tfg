if (sessionStorage.getItem('user') || localStorage.getItem('user')) {
    
    loadPet(getParameter());
    document.getElementById('update').addEventListener('click',(b)=>{
        b.preventDefault();
        updatePet(getParameter());
    })

}else {
    // Si la sesion no exite o es cerrada te reedireccionara automaticamente al login
    window.location.href = "index.html";
}

function loadPet(chip) {
    
    var msg = document.getElementById("error-msg");
    var data = {nchip: chip};

    fetch('https://veterinariun.000webhostapp.com/php/pet_infoLoadSingle', {
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
                msg.innerHTML = "La mascota no existe";
            } 
            // Respuesta si todo va bien y crea la tabla
            if (success.a === 1) {           
                document.getElementById('pet-name').value = success.nombre;
                document.getElementById('especie').value = success.especie;
                document.getElementById('raza').value = success.raza;
                document.getElementById('nacimiento').value = success.nacimiento;
                document.getElementById('dueno').value = success.dueno;
                //document.getElementById('especialista').value = success.especialista;

                if (success.eutanasia == "Si") {
                    document.getElementById('eutanasiaSi').checked = true;
                } else {
                    document.getElementById('eutanasiaNo').checked = true;
                }
                
                
                
                document.getElementById("historial").setAttribute("href","historial.html?chip="+success.chip);
                document.getElementById("datos-dueno").setAttribute("href","dueno.html?idDueno="+success.dueno);

            }
            
        })

}

function updatePet(chip){
    var msg = document.getElementById("error-msg");
    const petform = document.getElementById('form-pet-info');
    const petformObj = new FormData(petform);

    if (validator() == 1) {
        msg.style.color = "red";
        msg.innerHTML = "Nombre invalido";
    } else {
        if (validator() == 2) {
            msg.style.color = "red";
            msg.innerHTML = "Raza invalida";
        } else {
            if (validator() == 3) {
                msg.style.color = "red";
                msg.innerHTML = "Especie invalida";
            } else {

                if (document.getElementById('eutanasiaSi').checked) {
                    var euta = "Si";
                } else {
                    var euta = "No";
                }
                if (sessionStorage.getItem('user')){
                    var espe = sessionStorage.getItem('user');
                } if (localStorage.getItem('user')) {
                    var espe = localStorage.getItem('user');
                }
                    
                
                console.log(euta);
                var data = {nchip:chip,nombre: petformObj.get('pet-name') , especie: petformObj.get('especie') , raza: petformObj.get('raza'), eutanasia: euta, fecha: petformObj.get('nacimiento'), dueno: petformObj.get('dueno'),especialista: espe};
            
                fetch('https://veterinariun.000webhostapp.com/php/pet_infoUpdate', {
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
                            msg.style.color = "green";
                            msg.innerHTML = "Actualizado con exito";
                        }
                        
                    })
            }
        }
    }

    
}


// Recoge el parametro de la URL
function getParameter() {
    var url = window.location.search;
    var parametro = url.replace("?chip=","");
    return parametro;
    
}

function validator(){

    var nombre = document.getElementById('pet-name').value;
    var raza = document.getElementById('raza').value;
    var especie = document.getElementById('especie').value;

    if (nombre == "" || nombre.lenght > 20) {
        return 1;
    }
    if (raza == "" || raza.lenght > 20) {
        return 2;
    }
    if (especie == "" || especie.lenght > 20) {
        return 3;
    }

}