//funcion que crea numero aleatorio
function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min + 1)+ min)  //Math.floor quita decimales, Math.random crea numero aleatorio
}
//funcion  de eleccion

function eleccion(jugada){

    let resultado=""

        if(jugada == 1){
                resultado= "Elegiste 🪨"
        }else if(jugada == 2){
                resultado= "Elegiste 🗒️"
        }else if(jugada == 3) {
                resultado= "Elegiste ✂️"
        }else if(jugada > 3){
                resultado= "La opción escojida no es valida"  
        }
            return resultado

}


// 1 es Piedra, 2 es Papel, 3 es Tijera
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0
min=1
max=3
    while(triunfos < 3 && perdidas < 3){
        let pc = aleatorio(1,3)
        jugador = prompt("Elige 1 para Piedra, 2 para papel y 3 para Tijera")
        //alert("Elegiste " + jugador)
            alert("Tu elección es" + eleccion(jugador))
            alert("El pc elige " + eleccion(pc))
        
            //combate
        if(jugador == pc){
            alert("EMPATE")
        }else if((jugador==1 && pc==3)||(jugador==2 && pc==1)||(jugador==3 && pc==2)){
            alert("Jugador gana")
        triunfos= triunfos + 1
        }else{
            alert("Gana pc")
            perdidas = perdidas + 1
        }

    }
alert("Tu ganaste " + triunfos + " veces. Y perdiste " + perdidas + " veces")