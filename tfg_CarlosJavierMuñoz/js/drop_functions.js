// Compruebo que la sesion esta iniciada
if (sessionStorage.getItem('user') || localStorage.getItem('user')) {

    loadPets();
    document.getElementById('delete').addEventListener('click',(b)=>{
        b.preventDefault();

        drop();

    })

}else {
    // Si la sesion no exite o es cerrada te reedireccionara automaticamente al login
    window.location.href = "index.html";
}

function loadPets() {
    
    if (localStorage.getItem('user')) {
        var iduser = localStorage.getItem('user');
    }

    if (sessionStorage.getItem('user')) {
        var iduser = sessionStorage.getItem('user');
    }

    var msg = document.getElementById("error-msg");
    var data = {id: iduser};

    fetch('https://veterinariun.000webhostapp.com/php/pet_infoLoad', {
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
                document.getElementById('msgnew').removeChild(document.getElementById('pet'));
                document.getElementById('msgnew').appendChild(document.createTextNode("No tiene ninguna mascota asignada a su consulta"));
                // msg.innerHTML = "No tiene ninguna mascota asignada a su consulta";
            } 
            // Respuesta si todo va bien y crea la tabla
            if (success.a === 1) {           
                var select = document.getElementById('pet');
                //console.log(success.lenght);
                for (let i = 0; i < success.longitud; i++) {

                    var option = document.createElement("OPTION");
                    option.setAttribute("value",success[i].chip);
                    
                    var node = document.createTextNode(success[i].chip+" - "+success[i].nombre);
                    
                    option.appendChild(node);
                        
                    select.appendChild(option);
                    
                }


            }
            
        })

}

function drop() {

    var msg = document.getElementById("error-msg");
    var idmascota = document.getElementById('pet').value;

    var data = {id: idmascota};

    

    fetch('https://veterinariun.000webhostapp.com/php/drop', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

    .then(resp => resp.json())
    .then( function (success) {
            // Respuesta si todo va bien y crea la tabla
            if (success.a === 1) {           
                msg.innerHTML = "Se ha dado de baja junto a su dueño";
            }
            if (success.a === 2) {           
                msg.innerHTML = "Se ha dado de baja";
            }
            
        })
        location.reload();
}