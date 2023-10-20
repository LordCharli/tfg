// Compruebo que la sesion esta iniciada
if (sessionStorage.getItem('user') || localStorage.getItem('user')) {

    loadText();


    document.getElementById('edit').addEventListener('click',(e)=> {
        e.preventDefault();
        var msg = document.getElementById('error-msg').innerHTML = "";
        //document.getElementById("form-user-info").appendChild(document.createElement("br"));

        document.getElementById('edit').setAttribute('disabled',true);

        var save = document.createElement("input");
        save.setAttribute("type","submit");
        save.setAttribute("name","save");
        save.setAttribute("id","save");
        save.setAttribute("value","Guardar cambios");
        save.setAttribute('class','btn btn-primary');

        var cancel = document.createElement("input");
        cancel.setAttribute("type","submit");
        cancel.setAttribute("name","cancel");
        cancel.setAttribute("id","cancel");
        cancel.setAttribute("value","Descartar");
        cancel.setAttribute('class','btn btn-primary');
        cancel.style.marginLeft = "40%";
        
        document.getElementById("error-msg").appendChild(save);
        document.getElementById("error-msg").appendChild(cancel);

        document.getElementById('user-name').removeAttribute("disabled");
        document.getElementById('user-surname').removeAttribute("disabled");
        document.getElementById('user-surname2').removeAttribute("disabled");
        document.getElementById('email').removeAttribute("disabled");
        document.getElementById('tel').removeAttribute("disabled");
        
        
        cancel.addEventListener('click',(a)=>{
            a.preventDefault();

            document.getElementById('user-name').setAttribute("disabled",true);
            document.getElementById('user-surname').setAttribute("disabled",true);
            document.getElementById('user-surname2').setAttribute("disabled",true);
            document.getElementById('email').setAttribute("disabled",true);
            document.getElementById('tel').setAttribute("disabled",true);

            discardChanges();
        })

        save.addEventListener('click',(b)=>{
            b.preventDefault();
            confirmChanges();
        })
    
    })







} else {
    // Si la sesion no exite o es cerrada te reedireccionara automaticamente al login
    window.location.href = "index.html";
}

// Descarta los cambios
function discardChanges() {
    
    document.getElementById('edit').removeAttribute('disabled');
    removeElement('save');
    removeElement('cancel');

}

// Funcion para hacer una segunda comprobacion de confirmacion si se quieren actualizar los datos
function confirmChanges() {
    
    var msg = document.getElementById('error-msg');
    var p = document.createElement('p');
    p.setAttribute('id','warning');
    var text = document.createTextNode("¿Esta seguro de que quiere aplicar los cambios?");
    p.appendChild(text);
    

    document.getElementById('save').setAttribute('disabled',true);
    document.getElementById('cancel').setAttribute('disabled',true);
    
    var yes = document.createElement('BUTTON');
    yes.setAttribute('id',"yes");
    yes.setAttribute('class','btn btn-primary');
    var yestext = document.createTextNode("Si");
    yes.style.marginLeft = "25%";
    yes.appendChild(yestext);
    
    var no = document.createElement('BUTTON');
    no.setAttribute('id',"no");
    no.setAttribute('class','btn btn-primary');
    var notext = document.createTextNode("No");
    no.style.marginLeft = "10%";
    no.appendChild(notext);
    
    //revisar
    msg.appendChild(p);
    msg.appendChild(yes);
    msg.appendChild(no);

    no.addEventListener('click',(a)=>{
        a.preventDefault();
        
        document.getElementById('save').removeAttribute('disabled');
        document.getElementById('cancel').removeAttribute('disabled');

        //document.getElementById('msg').innerHTML = "";
        removeElement('yes');
        removeElement('no');
        removeElement('warning');

        

    })

    yes.addEventListener('click',(a)=>{
        a.preventDefault();
        // Control de errores
        if (validator() == 1) {
            document.getElementById('msg').style.color = "red";
            document.getElementById('msg').innerHTML = "Nombre no valido";
        } else {
            if (validator() == 2) {
                document.getElementById('msg').style.color = "red";
                document.getElementById('msg').innerHTML = "Apellido no valido";
            } else {
                if (validator() == 3) {
                    document.getElementById('msg').style.color = "red";
                    document.getElementById('msg').innerHTML = "Apellido 2 no valido";
                } else {
                    if (validator() == 4) {
                        document.getElementById('msg').style.color = "red";
                        document.getElementById('msg').innerHTML = "Telefono no valido";
                    } else {
                        if (validator() == 5) {
                            document.getElementById('msg').style.color = "red";
                            document.getElementById('msg').innerHTML = "Email no valido";
                        } else {
                            if (localStorage.getItem('user')) {
                                var iduser = localStorage.getItem('user');
                            }
                    
                            if (sessionStorage.getItem('user')) {
                                var iduser = sessionStorage.getItem('user');
                            }
                    
                    
                            const userform = document.getElementById('form-user-info');
                            var centrocontent = document.getElementById('hiddenloc').value;
                            var loc = parseInt(centrocontent);
                            const userformObj = new FormData(userform);
                            console.log(loc);
                            var data = {id: iduser , user: userformObj.get('user-name') , surname: userformObj.get('user-surname') , surname2: userformObj.get('user-surname2') , email: userformObj.get('email') , tel: userformObj.get('tel'), centro: loc };
                    
                            fetch('https://veterinariun.000webhostapp.com/php/control_panelUserInfo', {
                                method: 'POST',
                                body: JSON.stringify(data),
                                headers: {
                                    'Content-Type': 'application/json'
                                  }
                            })
                            .then(resp => resp.json())
                                .then( function (success) {
                                    //Respuesta si el usuario no existe en la base de datos
                                    // if (success.a === 0) {
                                    //     msg.innerHTML = "Error, hay algun campo erroneo";
                                    // } 
                                    // Respuesta si la contraseña es incorrecta
                                    if (success.a === 1) {
                                        msg.style.color = "green";
                                        msg.innerHTML = "Los cambios se han realizado con exito";
                                    } 
                                })
                                
                        }
                    }
                }
            }
        }
        

        document.getElementById('user-name').setAttribute("disabled",true);
        document.getElementById('user-surname').setAttribute("disabled",true);
        document.getElementById('user-surname2').setAttribute("disabled",true);
        document.getElementById('email').setAttribute("disabled",true);
        document.getElementById('tel').setAttribute("disabled",true);

        removeElement('save');
        removeElement('cancel');
        discardChanges();

        document.getElementById('save').removeAttribute('disabled');
        document.getElementById('cancel').removeAttribute('disabled');
        document.getElementById('error-msg').innerHTML = "";
        
        removeElement('no');
        removeElement('yes');
    })

}



// Elimina un objeto hijo
function removeElement(elementId) {
    
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function loadText() {
    
    if (localStorage.getItem('user')) {
        var iduser = localStorage.getItem('user');
    }

    if (sessionStorage.getItem('user')) {
        var iduser = sessionStorage.getItem('user');
    }


    var data = {id: iduser};

    fetch('https://veterinariun.000webhostapp.com/php/control_panelUserInfoLoad', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
          }
    })

    .then(resp => resp.json())
    .then( function (success) {
            //Respuesta si el usuario no existe en la base de datos
            if (success.a === 0) {
                msg.innerHTML = "Error inesperado";
            } 
            // Respuesta si la contraseña es incorrecta
            if (success.a === 1) {
                document.getElementById('user-name').value = success.nombre;
                document.getElementById('user-surname').value = success.apellido;
                document.getElementById('user-surname2').value = success.apellido2;
                document.getElementById('email').value = success.email;
                document.getElementById('tel').value = success.tel;
                document.getElementById('hiddenloc').value = success.centro;

                var node = document.createTextNode(" "+success.centroNombre);

                document.getElementById('location').appendChild(node);

                //document.getElementById('location').setAttribute("href","centros.html?id="+success.centro);
            }
            
        })

}

function validator(){

    var user = document.getElementById('user-name').value;
    var surname = document.getElementById('user-surname').value;
    var surname2 = document.getElementById('user-surname2').value;
    var email = document.getElementById('email').value;
    var tel = document.getElementById('tel').value;

    if (user == "" || user.lenght > 20) {
        return 1;
    }
    if (surname == "" || surname.lenght > 30) {
        return 2;
    }
    if (surname2 == "" || surname2.lenght > 30) {
        return 3;
    }

    var reg = new RegExp();
    reg = /\d{9}$/;
    
    if (!reg.test(tel) || tel === "") {
        return 4;
    }

    var reg = new RegExp();
    reg = /(\w+)[@](\w+)[.](\w{2,3})$/;
    
    if (!reg.test(email) || email === "") {
        return 5;
    }

}