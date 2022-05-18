import { login } from "./login.js";

function validacionDatos(e){
    e.preventDefault();
    var username = document.querySelector("#username").value;
    var password = document.querySelector('#password').value;

    login(username,password);
    
}
var start =  document.querySelector("#form");
start.addEventListener('submit',validacionDatos);






















/*Guardan la información de elementos considerando su nombre*/ 
/*function login(){
    var username, pass;

    username = documentdocument.getElementById("username").value;
    pass = document.getElementById('password') 

    if(username == sophie5 && pass == green05){
        window.location = "usuarioRegistrado.html";
    }

    login(username,password);
}

console.log(username, pass)*/














































/*Importando Libreria de la clase donde se almecena la programación de usser, password
  import { login} from "./login.js"*/


/*VALIDACIÓN DE CODIGO EDE LOS INPUTS DEL FORMULARIO
var usserpase = document.getElementById('usserpase').value
var passcode = document.getElementById('passcode').value

var user_error = document.getElementById('user_error').value
var pass_error = document.getElementById('pass_error').value 

function valitation(){
     if (usserpase == )
}
*/
/*function userVerification(event){
    event.preventDefault();

    var password = document.querySelector("#inputContrasenna").value;
    var verification = document.querySelector("#inputConfirmarContrasenna").value;
    var Answer = document.querySelector("inputAnswers");
    var Answer2 = document.querySelector("inputAnswers2");

    
}

login(user,password);
*/

