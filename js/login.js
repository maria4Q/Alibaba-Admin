import { username } from "./user.js";
import { admin } from "./user_verification.js";

export var usuarioregistrado = document.getElementById("usuarioregistrado");
export var login_conteiner = document.getElementById("login_conteiner");


export function login(usser, passcode){

    
    for(let i = 0; i<=6; i++){
        if(usser === username[i][1]){
            if(passcode === username[i][2]){
                console.log("Tus datos son correctos");
                admin();
            }else{
                console.log('Dato Incorrecto');
            }
        }else {
            console.log("El Usuario  o/y es incorrecto");
        }
    }
    
} 

/*EL SIGUIENTE ALGORTIMO INDICA QUE SI EL USUARIO INGRESADO
ES IGUAL A LA POSICION SELECCIONADA DE LA MATRIZ LLAMADA USERNAME
EL USUARIO INGRESA ES CORRECTO, PERO SI ESTA NO ES IGUAL A LA MATRIZ 
LLAMADA USSER EL DATO INGRESADO ES INCORRECTO.*/

/*EL SIGUIENTE INDICA QUE SI EL DATO, INGRESADO EN EL SEGUNDO CAMPO  
ES IGUAL AL DATO DE LA POSICION DADA, EL DATO ES CORRECTO, SI ES LO
CONTRARIO ESTE DATO SERA ICORRECTO */



