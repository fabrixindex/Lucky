//DARK MODE AND LIGHT MODE

let botonDarkMode = document.getElementById("boton-modo-oscuro")
let botonLightMode = document.getElementById("boton-modo-claro")

let modoOscuro = JSON.parse(localStorage.getItem("modoOscuro"))

if(modoOscuro == true){
    document.body.classList.add("darkmode")
}else{
    document.body.classList.remove("darkmode")
}

botonDarkMode.addEventListener("click", ()=>{
    document.body.classList.add("darkmode")
    localStorage.setItem("modoOscuro", true)
})

botonLightMode.addEventListener("click", ()=>{
    document.body.classList.remove("darkmode")
    localStorage.setItem("modoOscuro", false)
})