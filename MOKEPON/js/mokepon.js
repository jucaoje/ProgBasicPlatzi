//variables universales  se utiliza const ya que son de valor fijo (constantes)
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciarJuego = document.getElementById('reiniciar-juego')
const botonMascotaJugador = document.getElementById('boton-mascota')

const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

const spanmascotaenemigo = document.getElementById('mascotaenemigo')

const spanVidasjugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionmensaje = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataque-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataque-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas') //le asignamos a la variable la clase del contenedortarjeta del html
const contenedorAtaques = document.getElementById('contenedorAtaques')
// let mokepones crea el arreglo(array) mokepones sin informacion
let mokepones = []
let ataqueJugador=[]
let ataqueEnemigo
let opcionDeMokepones
let inputhipogoge 
let inputcapipepo 
let inputratigueya 
let mascotaJugador
let ataquesMokepon
let botonFuego
let botonAgua 
let botonTierra
let botones=[]
let vidasJugador = 3
let vidasEnemigo = 3

//class Mokepon crea la clase para la construccion de los objetos del arreglo
class Mokepon {
    //constructor recibe los atributos del objeto a crear
    constructor(nombre, foto , vida) {
        //This declara las variables dentro del objeto
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        //crear el arreglo ataques dentro de la clase
        this.ataques = []
    }

}
//let recibe los valores para la variable "hipodoge", new indica que es un nuevo objeto Mokepon nombre del objeto y los valores
let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)

let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5)

let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5)
//con este valor insertamos los valores en el arreglo ataques, por cada uno de los objetos creados
hipodoge.ataques.push(
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🔥', id:'boton-fuego'},
   )

   capipepo.ataques.push(
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🔥', id:'boton-fuego'},
   )

   ratigueya.ataques.push(
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🌱', id:'boton-tierra'},
    {nombre: '💧', id:'boton-agua'},
   )
//push inserta los valores creados "mokepones" en el arreglo mokepones
mokepones.push(hipodoge,capipepo,ratigueya)

function iniciarjuego(){
    sectionSeleccionarAtaque.style.display = 'none'
    // foreach recorre el arreglo
    mokepones.forEach((mokepon)=>{
        //en la variable opcion de mokepones le cargamos el texto que vamos a ingresar al html
       opcionDeMokepones = `
       <input type="radio" name="Mascota" id=${mokepon.nombre}> 
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
       `
       //${mokepon.nombre} trae el atributo nombre del objeto mokepon y el ${mokepon.foto} trae la ruta de la imagen
       //cargamos el texto de la variable opciondemokepones al contenedor de tarjetas con el += le decimos que carge todo lo q encuentre en el arreglo
       contenedorTarjetas.innerHTML += opcionDeMokepones
       inputhipogoge = document.getElementById('Hipodoge')
       inputcapipepo = document.getElementById('Capipepo')
       inputratigueya = document.getElementById('Ratigueya')
    }

    )

    sectionReiniciarJuego.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarmascotajugador)

   
    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}
function seleccionarmascotajugador(){
    let jugar = 1
    let spanmascotajugador = document.getElementById('mascotajugador')
        
        if(inputhipogoge.checked) {
            spanmascotajugador.innerHTML= inputhipogoge.id
            mascotajugador = inputhipogoge.id
        }else if(inputcapipepo.checked) {
            spanmascotajugador.innerHTML= inputcapipepo.id
            mascotajugador = inputcapipepo.id
        }else if(inputratigueya.checked) {
            spanmascotajugador.innerHTML= inputratigueya.id
            mascotajugador = inputratigueya.id
        }else{
            alert('Debes seleccionar alguna Opción')
            jugar = 0
         } 
            
        if(jugar == 1){
        extraerAtaques(mascotajugador)  
        
        
        seleccionarmascotaenemigo()
        sectionSeleccionarAtaque.style.display = 'flex'
        sectionSeleccionarMascota.style.display = 'none'
    }
         
}
function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
       if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
            
       }
    }
    mostrarAtaques(ataques)
    
    
}
function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="botonataque Bataque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    }
    )
    botonFuego = document.getElementById('boton-fuego')
    botonAgua  = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones= document.querySelectorAll('.Bataque')
    


    
}
function secuenciaAtaque(){
    botones.forEach((boton)=>  {
        boton.addEventListener('click', (e)=> {
            if(e.target.textContent === '🔥' ){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            }else if (e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58' 
            }
            
        })

    })

}

//funcion que crea numero aleatorio
function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min + 1)+ min)  //Math.floor quita decimales, Math.random crea numero aleatorio
//este evento busca la vantana html y escucha el evento de cargar html al ejecutar la funcion iniciarjuego
}
function seleccionarmascotaenemigo(){
    let mascotaaleatorio = aleatorio(0, mokepones.length -1)

    spanmascotaenemigo.innerHTML= mokepones[mascotaaleatorio].nombre
    secuenciaAtaque()
        }

    

function ataqueenemigo(){
    let ataqueAleatorioEnemigo = aleatorio(1,3)
    if (ataqueAleatorioEnemigo == 1){
        ataqueEnemigo= "FUEGO"
    }
    else if (ataqueAleatorioEnemigo == 2){
        ataqueEnemigo= "AGUA"
    }
    else {
        ataqueEnemigo= "TIERRA"
    } ganador()
    
    
}
    function ganador(){
        
        if(ataqueJugador == ataqueEnemigo){
        crearMensaje("EMPATE")  
        }else if((ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") || (ataqueJugador=="TIERRA" && ataqueEnemigo=="AGUA")||(ataqueJugador=="FUEGO" && ataqueEnemigo=="TIERRA")){
            crearMensaje("GANASTE")  
            vidasEnemigo--
            spanVidasEnemigo.innerHTML=vidasEnemigo
        }
        // else if(ataqueJugador=="TIERRA" && ataqueEnemigo=="AGUA"){
        //     crearMensaje("GANASTE")
        // }
        // else if(ataqueJugador=="FUEGO" && ataqueEnemigo=="TIERRA"){
        //     crearMensaje("GANASTE")
        // //triunfos= triunfos + 1
        // }
        else{
             crearMensaje("PERDISTE")
            vidasJugador--
            spanVidasjugador.innerHTML=vidasJugador
         } revisarVidas()
    } 

    function revisarVidas(){
        if (vidasEnemigo == 0){
            crearMensajeFinal('Felicitaciones !! GANASTE')
        } else if(vidasJugador == 0){
            crearMensajeFinal('Lo siento !! PERDISTE')
        }
    }

function crearMensaje(resultado){
   
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionmensaje.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    // let parrafo = document.createElement('p')
    // parrafo.innerHTML= `Tu mascota  ataco con ${ataqueJugador} y la mascota enemigo ataco con ${ataqueEnemigo} el resultado es ${resultado}` 
    
    ataquesDelJugador.appendChild( nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function crearMensajeFinal(resultadoFinal){
   
    sectionmensaje.innerHTML= resultadoFinal
  
    
    botonFuego.disabled = true
    
    botonAgua.disabled = true
   
    botonTierra.disabled = true
    
    sectionReiniciarJuego.style.display = 'block'
     
}
function reiniciarJuego(){
    location.reload()
}
    
window.addEventListener('load',iniciarjuego)
