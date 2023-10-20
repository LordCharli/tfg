// Compruebo que la sesion esta iniciada
if (sessionStorage.getItem('user') || localStorage.getItem('user')) {
    document.getElementById('pet-table').setAttribute('border','2');
    loadPetTable();

}else {
    // Si la sesion no exite o es cerrada te reedireccionara automaticamente al login
    window.location.href = "index.html";
}


function loadPetTable() {
    
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
                document.getElementById('msgnew').removeChild(document.getElementById('pet-table'));
                document.getElementById('msgnew').appendChild(document.createTextNode("No tiene ninguna mascota asignada a su consulta"));
                // msg.innerHTML = "No tiene ninguna mascota asignada a su consulta";
            } 
            // Respuesta si todo va bien y crea la tabla
            if (success.a === 1) {           
                var mainTable = document.getElementById('pet-table');
                //console.log(success.lenght);
                for (let i = 0; i < success.longitud; i++) {
                    var tr = document.createElement('tr');
                    
                    var td = document.createElement("td");
                    var node = document.createTextNode(success[i].chip);
                        
                    td.appendChild(node);
                    tr.appendChild(td);

                    var td = document.createElement("td");
                    var node = document.createTextNode(success[i].nombre);
                        
                    td.appendChild(node);
                    tr.appendChild(td);

                    var td = document.createElement("td");
                    var node = document.createTextNode(success[i].especie);
                        
                    td.appendChild(node);
                    tr.appendChild(td);

                    var td = document.createElement("td");
                    var node = document.createTextNode(success[i].raza);
                        
                    td.appendChild(node);
                    tr.appendChild(td);

                    var td = document.createElement("td");
                    var node = document.createTextNode(success[i].eutanasia);
                        
                    td.appendChild(node);
                    tr.appendChild(td);
                    
                    var a = document.createElement("a");
                    a.setAttribute("href","pet_options.html?chip="+success[i].chip);
                    
                    var td = document.createElement("td");
                    var node = document.createTextNode("Consultar");
                        
                    a.appendChild(node);
                    td.appendChild(a);
                    tr.appendChild(td);


                    mainTable.appendChild(tr);
                    
                }


            }
            
        })

}