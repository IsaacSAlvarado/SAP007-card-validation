import validator from './validator.js';
//console.log(validator);

// Esto permite ver la primera página y validar si el ususario colocó el correo o no.
// Permite ver si el correo ingresado cumple con la expresión correcta, de no hacerlo devuelve un mensaje.
// Al ingresar el correo válido y hacer click en el botón get started nos deja avanzar a la segunda página.
const button1 = document.getElementById("getstarted");
button1.addEventListener("click", email);

function email (){
    const email = document.getElementById ("email");
    const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let message = ""
    if (email.value === ""){
        email.classList.add ("noemail")
        message = " Email is required!"
    } else if (email.value.match (regex)=== null) {
        email.classList.add ("noemail")
        message = "Ingrese un correo válido."
    }  else {
            document.getElementById ("one").style.display = "none"
            document.getElementById ("two").style.display = "block"
    }
    document.getElementById ("empty").innerHTML = message;
} 

//Nos permite seleccionar el plan individual e ir a la página de elegir el método de pago.
const button2 = document.getElementById ("getstarted1");
button2.addEventListener ("click", pay )

//Nos permite seleccionar el plan Duo e ir a la página de elegir el método de pago.

const button3 = document.getElementById ("getstarted2");
button3.addEventListener ("click", pay)

//Nos permite seleccionar el plan Familiar e ir a la página de elegir el método de pago.

const button4 = document.getElementById ("getstarted3");
button4.addEventListener ("click", pay )

function pay (){
    document.getElementById ("two").style.display = "none"
    document.getElementById ("three").style.display = "block"
}

let number = ""

const card = document.getElementById ("cardNumber");
card.addEventListener ("change", (e)=> {
    e.preventDefault();
number = e.target.value 
//console.log (number)
//Aquí está la función que nos permite modificar los dígitos colocados por el usuario en = # excepto los últimos 4 dígitos. 
card.value = validator.maskify (number) 

const number1 = validator.isValid (number)
    // console.log (validator.isValid (number))
    let message1 = ""
        if (number1 === true){
            //cardNumber.classList.add ("noValid")
            message1 = "Your card is valid!"
        } else if (number === "") {
            // email.classList.add ("noemail")
            message1 = "Type a card number";
        }  else if(number1 === false) {
        //cardNumber.classList.add ("novalid")
            message1 = "Invalid card! Please type a valid card number."; 
        }
    document.getElementById ("validInvalidCard").innerHTML = message1;
    return message1

})

// Esta función nos permite detener el curso natural del botón submit.
const submit= document.getElementById ("submit");
submit.addEventListener ("click", (e)=> { 
e.preventDefault()

const number1 = validator.isValid (number)
    // console.log (validator.isValid (number))
    let message1 = ""
        if (number1 === true){
            //cardNumber.classList.add ("noValid")
            message1 = "Your card is valid!"
        } else if (number === "") {
            // email.classList.add ("noemail")
            message1 = "Type a card number";
        }  else if(number1 === false) {
        //cardNumber.classList.add ("novalid")
            message1 = "Invalid card! Please type a valid card number."; 
        }
    document.getElementById ("validInvalidCard").innerHTML = message1;
    return message1

})










