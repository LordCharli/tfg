if (sessionStorage.getItem('user') || localStorage.getItem('user')) {
    
    
    document.getElementById('nuevo').addEventListener('click',(b)=>{
        b.preventDefault();
        //document.getElementById("error-msg").innerHTML = "";
        altaMultiple();
    })

    document.getElementById('existente').addEventListener('click',(b)=>{
        b.preventDefault();
        altaSingle();
    })

}else {
    // Si la sesion no exite o es cerrada te reedireccionara automaticamente al login
    window.location.href = "index.html";
}

//funcion para dar de alta a cliente + mascota
function altaMultiple(){
    document.getElementById('nuevo').setAttribute("disabled",true);
    document.getElementById('existente').setAttribute("disabled",true);

    var formCliente = document.createElement("form");
    formCliente.setAttribute("action","#");
    formCliente.setAttribute("method","POST");
    formCliente.setAttribute("id","form-cli-info");

    // campo

    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","nif");
    input.setAttribute("name","nif");
    input.setAttribute("placeholder","NIF");
    input.setAttribute('class','form-control input-sm');
    input.style.width = "50%";
    input.style.marginRight = "25%";
    input.style.marginLeft = "25%";
    input.style.marginTop = "1%";
    input.style.marginBottom = "0.4%";

    formCliente.appendChild(input);
    

    // campo

    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","nombre");
    input.setAttribute("name","nombre");
    input.setAttribute("placeholder","Nombre");
    input.setAttribute('class','form-control input-sm');
    input.style.width = "50%";
    input.style.marginRight = "25%";
    input.style.marginLeft = "25%";
    input.style.marginTop = "0.4%";
    input.style.marginBottom = "0.4%";

    formCliente.appendChild(input);
    

    // campo

    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","apellido");
    input.setAttribute("name","apellido");
    input.setAttribute("placeholder","Apellido");
    input.setAttribute('class','form-control input-sm');
    input.style.width = "50%";
    input.style.marginRight = "25%";
    input.style.marginLeft = "25%";
    input.style.marginTop = "0.4%";
    input.style.marginBottom = "0.4%";

    formCliente.appendChild(input);
    

    // campo

    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","apellido2");
    input.setAttribute("name","apellido2");
    input.setAttribute("placeholder","Segundo Apellido");
    input.setAttribute('class','form-control input-sm');
    input.style.width = "50%";
    input.style.marginRight = "25%";
    input.style.marginLeft = "25%";
    input.style.marginTop = "0.4%";
    input.style.marginBottom = "0.4%";

    formCliente.appendChild(input);
    

    // campo

    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","telefono");
    input.setAttribute("name","telefono");
    input.setAttribute("placeholder","Telefono");
    input.setAttribute('class','form-control input-sm');
    input.style.width = "50%";
    input.style.marginRight = "25%";
    input.style.marginLeft = "25%";
    input.style.marginTop = "0.4%";
    input.style.marginBottom = "0.4%";

    formCliente.appendChild(input);
    

    // campo

    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","domicilio");
    input.setAttribute("name","domicilio");
    input.setAttribute("placeholder","Domicilio");
    input.setAttribute('class','form-control input-sm');
    input.style.width = "50%";
    input.style.marginRight = "25%";
    input.style.marginLeft = "25%";
    input.style.marginTop = "0.4%";
    input.style.marginBottom = "0.4%";

    formCliente.appendChild(input);
    
    var column = document.createElement('div');
    column.style.width = "50%";
    column.style.marginRight = "25%";
    column.style.marginLeft = "25%";
    column.style.marginTop = "3%";
    column.style.marginBottom = "3%";
    
    //Boton
    var input = document.createElement("input");
    input.setAttribute("type","button");
    input.setAttribute("id","registrar");
    input.setAttribute("name","registrar");
    input.setAttribute("value","Registrar");
    input.setAttribute('class','btn btn-primary');
    
    
    input.addEventListener('click',(a)=>{
        a.preventDefault();
            petFormDraw();
        
    })

    column.appendChild(input);

    //Boton
    var input = document.createElement("input");
    input.setAttribute("type","button");
    input.setAttribute("id","cancelar");
    input.setAttribute("name","cancelar");
    input.setAttribute("value","Cancelar");
    input.setAttribute('class','btn btn-primary');
    input.style.marginLeft = "60%";
    
    
    input.addEventListener('click',(c)=>{
        c.preventDefault();
        document.getElementById('error-msg').innerHTML = "";
        document.getElementById('form-alta-info-space').removeChild(document.getElementById('form-cli-info'));
        document.getElementById('nuevo').removeAttribute("disabled");
        document.getElementById('existente').removeAttribute("disabled");
    })

    column.appendChild(input);
    formCliente.appendChild(column);
    document.getElementById('form-alta-info-space').appendChild(formCliente);

}

function petFormDraw(){
    const cliform = document.getElementById('form-cli-info');
    const cliformObj = new FormData(cliform);

    var dataCli = new Array(cliformObj.get('nombre'),cliformObj.get('nif'),cliformObj.get('apellido'),cliformObj.get('apellido2'),
    cliformObj.get('telefono'),cliformObj.get('domicilio'));

    document.getElementById('form-alta-info-space').removeChild(document.getElementById('form-cli-info'));

    // document.getElementById('form-cli-info').removeChild(document.getElementById('nif'));
    // document.getElementById('form-cli-info').removeChild(document.getElementById('nombre'));
    // document.getElementById('form-cli-info').removeChild(document.getElementById('apellido'));
    // document.getElementById('form-cli-info').removeChild(document.getElementById('apellido2'));
    // document.getElementById('form-cli-info').removeChild(document.getElementById('telefono'));
    // document.getElementById('form-cli-info').removeChild(document.getElementById('domicilio'));


    var formPet = document.createElement("form");
    formPet.setAttribute("action","#");
    formPet.setAttribute("method","POST");
    formPet.setAttribute("id","form-pet-info");

    // campo

    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","chip");
    input.setAttribute("name","chip");
    input.setAttribute("placeholder","Chip");
    input.setAttribute('class','form-control input-sm');
    input.style.width = "50%";
    input.style.marginRight = "25%";
    input.style.marginLeft = "25%";
    input.style.marginTop = "1%";
    input.style.marginBottom = "0.4%";

    formPet.appendChild(input);
    

    // campo

    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","nombre");
    input.setAttribute("name","nombre");
    input.setAttribute("placeholder","Nombre");
    input.setAttribute('class','form-control input-sm');
    input.style.width = "50%";
    input.style.marginRight = "25%";
    input.style.marginLeft = "25%";
    input.style.marginTop = "0.4%";
    input.style.marginBottom = "0.4%";

    formPet.appendChild(input);
    

    // campo

    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","especie");
    input.setAttribute("name","especie");
    input.setAttribute("placeholder","Especie");
    input.setAttribute('class','form-control input-sm');
    input.style.width = "50%";
    input.style.marginRight = "25%";
    input.style.marginLeft = "25%";
    input.style.marginTop = "0.4%";
    input.style.marginBottom = "0.4%";

    formPet.appendChild(input);
    

    // campo

    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","raza");
    input.setAttribute("name","raza");
    input.setAttribute("placeholder","Raza");
    input.setAttribute('class','form-control input-sm');
    input.style.width = "50%";
    input.style.marginRight = "25%";
    input.style.marginLeft = "25%";
    input.style.marginTop = "0.4%";
    input.style.marginBottom = "0.4%";

    formPet.appendChild(input);
    

    // campo

    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","nacimiento");
    input.setAttribute("name","nacimiento");
    input.setAttribute("placeholder","dd-mm-YYYY");
    input.setAttribute('class','form-control input-sm');
    input.style.width = "50%";
    input.style.marginRight = "25%";
    input.style.marginLeft = "25%";
    input.style.marginTop = "0.4%";
    input.style.marginBottom = "0.4%";

    formPet.appendChild(input);
    

    var column = document.createElement('div');
    column.style.width = "50%";
    column.style.marginRight = "25%";
    column.style.marginLeft = "25%";
    column.style.marginTop = "3%";
    column.style.marginBottom = "3%";

    //Boton
    var input = document.createElement("input");
    input.setAttribute("type","button");
    input.setAttribute("id","registrar");
    input.setAttribute("name","registrar");
    input.setAttribute("value","Registrar");
    input.setAttribute('class','btn btn-primary');
    
    input.addEventListener('click',(a)=>{
        a.preventDefault();
        execRegister(dataCli);
    })

    column.appendChild(input);


    //Boton
    var input = document.createElement("input");
    input.setAttribute("type","button");
    input.setAttribute("id","cancelar");
    input.setAttribute("name","cancelar");
    input.setAttribute("value","Cancelar");
    input.setAttribute('class','btn btn-primary');
    input.style.marginLeft = "60%";

    input.addEventListener('click',(c)=>{
        c.preventDefault();
        document.getElementById('form-alta-info-space').removeChild(document.getElementById('form-pet-info'));
        document.getElementById('nuevo').removeAttribute("disabled");
        document.getElementById('existente').removeAttribute("disabled");
    })

    column.appendChild(input);
    formPet.appendChild(column);
    document.getElementById('form-alta-info-space').appendChild(formPet);
}

function execRegister(dataCli){
    var msg = document.getElementById("error-msg");
    const petform = document.getElementById('form-pet-info');
    const petformObj = new FormData(petform);

    if (sessionStorage.getItem('user')) {
        var idpersonal = sessionStorage.getItem('user');
    }
    if (localStorage.getItem('user')) {
        var idpersonal = localStorage.getItem('user');
    }
    

    var data = {nombre: petformObj.get('nombre'),chip: petformObj.get('chip'),raza: petformObj.get('raza'),especie: petformObj.get('especie'),nacimiento: petformObj.get('nacimiento'),
    eutanasia: "No",nombreCli: dataCli[0],nif: dataCli[1],apellido: dataCli[2],apellido2: dataCli[3],telefono: dataCli[4],domicilio: dataCli[5],personal: idpersonal};

    fetch('https://veterinariun.000webhostapp.com/php/altas', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
          }
    })

    .then(resp => resp.json())
    .then( function (success) {
            // Respuesta si todo va 
            if (success.a === 1) {           
                msg.innerHTML = "Registrado con exito";
                document.getElementById('form-alta-info-space').removeChild(document.getElementById('form-pet-info'));
                document.getElementById('nuevo').removeAttribute("disabled");
                document.getElementById('existente').removeAttribute("disabled");
            }
            if(success.a === 2){
                msg.innerHTML = "Datos mal introducidos";
            }
            
        })
}

function altaSingle() {
    document.getElementById('nuevo').setAttribute("disabled",true);
    document.getElementById('existente').setAttribute("disabled",true);

    var formPet = document.createElement("form");
    formPet.setAttribute("action","#");
    formPet.setAttribute("method","POST");
    formPet.setAttribute("id","form-pet-info");

    // campo

    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","chip");
    input.setAttribute("name","chip");
    input.setAttribute("placeholder","Chip");
    input.setAttribute('class','form-control input-sm');
    input.style.width = "50%";
    input.style.marginRight = "25%";
    input.style.marginLeft = "25%";
    input.style.marginTop = "1%";
    input.style.marginBottom = "0.4%";

    formPet.appendChild(input);
    

    // campo

    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","nombre");
    input.setAttribute("name","nombre");
    input.setAttribute("placeholder","Nombre");
    input.setAttribute('class','form-control input-sm');
    input.style.width = "50%";
    input.style.marginRight = "25%";
    input.style.marginLeft = "25%";
    input.style.marginTop = "0.4%";
    input.style.marginBottom = "0.4%";

    formPet.appendChild(input);
    

    // campo

    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","especie");
    input.setAttribute("name","especie");
    input.setAttribute("placeholder","Especie");
    input.setAttribute('class','form-control input-sm');
    input.style.width = "50%";
    input.style.marginRight = "25%";
    input.style.marginLeft = "25%";
    input.style.marginTop = "0.4%";
    input.style.marginBottom = "0.4%";

    formPet.appendChild(input);
    

    // campo

    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","raza");
    input.setAttribute("name","raza");
    input.setAttribute("placeholder","Raza");
    input.setAttribute('class','form-control input-sm');
    input.style.width = "50%";
    input.style.marginRight = "25%";
    input.style.marginLeft = "25%";
    input.style.marginTop = "0.4%";
    input.style.marginBottom = "0.4%";

    formPet.appendChild(input);
    

    
    // campo

    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","nif");
    input.setAttribute("name","nif");
    input.setAttribute("placeholder","NIF");
    input.setAttribute('class','form-control input-sm');
    input.style.width = "50%";
    input.style.marginRight = "25%";
    input.style.marginLeft = "25%";
    input.style.marginTop = "0.4%";
    input.style.marginBottom = "0.4%";

    formPet.appendChild(input);
    


    // campo

    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","nacimiento");
    input.setAttribute("name","nacimiento");
    input.setAttribute("placeholder","dd-mm-YYYY");
    input.setAttribute('class','form-control input-sm');
    input.style.width = "50%";
    input.style.marginRight = "25%";
    input.style.marginLeft = "25%";
    input.style.marginTop = "0.4%";
    input.style.marginBottom = "0.4%";

    formPet.appendChild(input);
    

    var column = document.createElement('div');
    column.style.width = "50%";
    column.style.marginRight = "25%";
    column.style.marginLeft = "25%";
    column.style.marginTop = "3%";
    column.style.marginBottom = "3%";


    //Boton
    var input = document.createElement("input");
    input.setAttribute("type","button");
    input.setAttribute("id","registrar");
    input.setAttribute("name","registrar");
    input.setAttribute("value","Registrar");
    input.setAttribute('class','btn btn-primary');
    
    input.addEventListener('click',(a)=>{
        a.preventDefault();
        execRegister2();
    })
    column.appendChild(input);
    

    //Boton
    var input = document.createElement("input");
    input.setAttribute("type","button");
    input.setAttribute("id","cancelar");
    input.setAttribute("name","cancelar");
    input.setAttribute("value","Cancelar");
    input.setAttribute('class','btn btn-primary');
    input.style.marginLeft = "60%";
    input.addEventListener('click',(c)=>{
        c.preventDefault();
        document.getElementById('form-alta-info-space').removeChild(document.getElementById('form-pet-info'));
        document.getElementById('nuevo').removeAttribute("disabled");
        document.getElementById('existente').removeAttribute("disabled");
    })

    formPet.appendChild(input);

    column.appendChild(input);
    formPet.appendChild(column);
    document.getElementById('form-alta-info-space').appendChild(formPet);
    
}

function execRegister2() {
    var msg = document.getElementById("error-msg");
    const petform = document.getElementById('form-pet-info');
    const petformObj = new FormData(petform);  

    if (sessionStorage.getItem('user')) {
        var idpersonal = sessionStorage.getItem('user');
    }
    if (localStorage.getItem('user')) {
        var idpersonal = localStorage.getItem('user');
    }

    var data = {nombre: petformObj.get('nombre'),chip: petformObj.get('chip'),raza: petformObj.get('raza'),especie: petformObj.get('especie'),nacimiento: petformObj.get('nacimiento'),
    eutanasia: "No",nif: petformObj.get('nif'),personal: idpersonal};

    fetch('https://veterinariun.000webhostapp.com/php/altas2', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
          }
    })

    .then(resp => resp.json())
    .then( function (success) {
            // Respuesta si todo va 
            if (success.a === 1) {           
                msg.innerHTML = "Registrado con exito";
                document.getElementById('form-alta-info-space').removeChild(document.getElementById('form-pet-info'));
                document.getElementById('nuevo').removeAttribute("hidden");
                document.getElementById('existente').removeAttribute("hidden");
            }else{
                if (success.a === 2) {
                    msg.innerHTML = "Ya hay una mascota registrada con este numero de chip";
                }else{
                    if(success.a === 3){
                        msg.innerHTML = "Campos mal introducidos";
                    } else {
                        msg.innerHTML = "El cliente no esta registrado, porfavor utilice la opcion de nuevo cliente";
                    document.getElementById('form-alta-info-space').removeChild(document.getElementById('form-pet-info'));
                    document.getElementById('nuevo').removeAttribute("disabled");
                    document.getElementById('existente').removeAttribute("disabled");
                    }
                    
                }
                
            }
                      
                
            
            
        })
}