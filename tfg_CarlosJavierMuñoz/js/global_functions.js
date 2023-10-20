var out = document.getElementById('logout');


out.addEventListener('click',(a)=>{
    a.preventDefault();
    logout();
})


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
        buttons[i].setAttribute('class','btn btn-primary btn-sm');
    }
}






function logout(){

    if (sessionStorage.getItem('user')) {
        sessionStorage.removeItem('user');
        window.location.href = "index.html";
    }
    if (localStorage.getItem('user')) {
        localStorage.removeItem('user');
        window.location.href = "index.html";
    }
}