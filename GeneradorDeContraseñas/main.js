let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
const cadenaDeCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let contraseña = document.getElementById('contraseña');


function generar(){
    let numeroDigitado = parseInt (cantidad.value);
    console.log (numeroDigitado);

    if(numeroDigitado <= 8){
        alert("La cantidad de caracteres no puede ser menor a 6");
    }

    let password ='';
    for(let i = 0; i < numeroDigitado; i++ ){

        let caracterAleatorio = cadenaDeCaracteres[Math.floor(Math.random() * cadenaDeCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio

    }

    contraseña.value = password;
    console.log('password generado: ' + password);
}









