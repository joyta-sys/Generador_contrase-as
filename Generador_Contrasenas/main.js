let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadena_Caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789./*-+';

function generar() {

    let numero_digitado = parseInt(cantidad.value);
    
    if(numero_digitado <= 8){

        alert("La cantidad de  caracteres debe ser  al menos 8");
    }

    let password = '';

    for (let i = 0; i < numero_digitado; i++) {
        
        let caracterAleatorio = cadena_Caracteres[ Math.floor(Math.random() * cadena_Caracteres.length)];
        

        password += caracterAleatorio;
    }
    contrasena.value = password;
}










