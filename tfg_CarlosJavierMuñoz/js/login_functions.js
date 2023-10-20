function UserLoginClient() {

    var user = document.getElementById("user").value;

    var reg = new RegExp();
    reg = /([A-Z]{4})([0-9]{12})$/;
    
    if (!reg.test(user) || user === "") {
        return false;
    } else {      
        return true;
    }
}

// Carga de estilos bootstrap

var inputs = document.getElementsByTagName('input');

for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].type.toLowerCase() == 'text') {
        inputs[i].setAttribute('class','form-control input-sm');
    }
}

var buttons = document.getElementsByTagName('input');

for(var i = 0; i < buttons.length; i++) {
    if(buttons[i].type.toLowerCase() == 'button') {
        buttons[i].setAttribute('class','btn btn-primary');
    }
}

var msg = document.getElementById('error-msg');
const loginform = document.getElementById('login-form');

loginform.addEventListener('submit', (e) => {
    // Previene la recarga
    e.preventDefault();
    if (UserLoginClient()) {

        const loginformObj = new FormData(loginform);

        var data = {user: loginformObj.get('user') , pass: loginformObj.get('pass') , remember: loginformObj.get('remember')};
        var isChecked = document.getElementById('remember').checked;

        fetch('https://veterinariun.000webhostapp.com/php/login_validator', {
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
                    msg.innerHTML = "El usuario no existe";
                } 
                // Respuesta si la contraseña es incorrecta
                if (success.a === 1) {
                    msg.innerHTML = "Contraseña incorrecta";
                }
                // El inicio de sesion es exitoso crea una sesion y reedirecciona
                if (success.a === 2) {
                    // Compruebo que el usuario quiera dejar la sesion abierta para crear un tipo de sesion u otro
                    if (isChecked) {
                        // localstorage para que permanezca iniciada aunque el navegador sea cerrado
                        localStorage.setItem('user',success.session);
                        window.location.href = "controlPanel.html";
                    } else {
                        // sessionStorage para que expire al cerrar el navegador
                        sessionStorage.setItem('user',success.session);
                        window.location.href = "controlPanel.html";
                    }
                    
                    //location.href = 'php/login?session=' + success[1]
                }
                
            })
    } else {
        msg.innerHTML = "El numero de usuario introducido no es valido o el campo esta vacio";
    }
})