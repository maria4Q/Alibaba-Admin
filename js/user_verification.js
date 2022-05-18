import {usuarioregistrado, login_conteiner} from './login.js';

export function admin(){
    alert('Los datos ingresa, se ha colocado correctamente');
    usuarioregistrado.classList.add("active-block");
    login_conteiner.classList.remove("active-flex");
}
