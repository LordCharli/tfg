if (sessionStorage.getItem('user') || localStorage.getItem('user')) {
    
    document.getElementById('fecha').setAttribute('placeholder','dd-mm-yyyy')

    document.getElementById('insert').addEventListener('click',(e)=> {
        e.preventDefault();
        insertHistory(getParameter());
    })
    

}else {
    // Si la sesion no exite o es cerrada te reedireccionara automaticamente al login
    window.location.href = "index.html";
}

function insertHistory(chip) {
    
    var msg = document.getElementById("error-msg");
    var date = document.getElementById('fecha').value;
    var desc = document.getElementById('desc').value;


    var data = {nchip: chip,fecha:date,descrip:desc};


    if (validator() == 1) {
        msg.style.color = "green";
        msg.innerHTML = "Formato de fecha incorrecto";
    } else {
        if (validator() == 2) {
            msg.style.color = "green";
            msg.innerHTML = "Campos mal introducidos";
        } else {
            fetch('https://veterinariun.000webhostapp.com/php/history_infoInsertForm', {
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
                        window.location.href = "historial.html?chip="+chip;
                    }
                    
                })
                
               
        }
    }
    document.getElementById('fecha').value = "";
    document.getElementById('desc').value ="";


    

}

function getParameter() {
    var url = window.location.search;
    var parametro = url.replace("?chip=","");
    return parametro;
    
}

function validator(){

    var fecha = document.getElementById('fecha').value;
    var desc = document.getElementById('desc').value;

    var reg = new RegExp();
    reg = /[0-3][0-9][-][0-1][0-9][-]\d{4}$/;
    
    if (!reg.test(fecha) || fecha === "") {
        return 1;
    }

    if (desc.lenght > 220 || desc === "") {
        return 2;
    }
}