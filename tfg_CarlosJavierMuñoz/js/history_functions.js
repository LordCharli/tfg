// Compruebo que la sesion esta iniciada
if (sessionStorage.getItem('user') || localStorage.getItem('user')) {
    document.getElementById('history-table').setAttribute('border','2');
    var param = getParameter();
    loadPetTable(param);

}else {
    // Si la sesion no exite o es cerrada te reedireccionara automaticamente al login
    window.location.href = "index.html";
}

function loadPetTable(nchip) {

    var msg = document.getElementById("error-msg");
    var data = {id: nchip};

    fetch('https://veterinariun.000webhostapp.com/php/history_infoLoad', {
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
               document.getElementById('msgnew').appendChild(document.createTextNode("Esta mascota no ha pasado por consulta nunca"));
                // msg.innerHTML = "Esta mascota no ha pasado por consulta nunca";
            } 
            // Respuesta si todo va bien y crea la tabla
            if (success.a === 1) {           
                var mainTable = document.getElementById('history-table');
                //console.log(success.lenght);
                console.log(success.longitud);
                for (let i = 0; i < success.longitud; i++) {
                    var tr = document.createElement('tr');
                    
                    var td = document.createElement("td");
                    var node = document.createTextNode(success[i].revision);
                        
                    td.appendChild(node);
                    tr.appendChild(td);

                    var td = document.createElement("td");
                    var node = document.createTextNode(success[i].chip);
                        
                    td.appendChild(node);
                    tr.appendChild(td);

                    var td = document.createElement("td");
                    var node = document.createTextNode(success[i].fecha);
                        
                    td.appendChild(node);
                    tr.appendChild(td);

                    var td = document.createElement("td");
                    var node = document.createTextNode(success[i].descripcion);
                        
                    td.appendChild(node);
                    tr.appendChild(td);

                    mainTable.appendChild(tr);
                    
                }


            }

            var a = document.createElement("a");
            a.setAttribute("href","history_options.html?chip="+getParameter());
            var node = document.createTextNode("Nuevo Registro");
                        
            a.appendChild(node);
            document.getElementById('error-msg').appendChild(document.createElement("br"));       
            document.getElementById('error-msg').appendChild(a);       
        })

}

function getParameter() {
    var url = window.location.search;
    var parametro = url.replace("?chip=","");
    return parametro;
    
}

function removeElement(elementId) {
    
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}