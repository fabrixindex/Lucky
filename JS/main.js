//FUNCIONA JS?
console.log("funciona todito")

//DECLARACION DE CONSTANTES Y VARIABLES

let precioTotal = document.getElementById("precioTotal")
let botonFinzalizarCompra = document.getElementById("botonFinalizarCompra")
//CONSTANTE PARA LUXON
const DateTime = luxon.DateTime
const fechaActual = DateTime.now()
//BOTONES CARRITO
let bodycarrito = document.getElementById("bodycarrito")
let botoncarrito = document.getElementById("botoncarrito")
//CAPTURA PARA LOADER
let loaderTexto = document.getElementById("loaderTexto")
let loaderitem = document.getElementById("loaderitem")

//DOM

let contenedorRemeras = document.getElementById("contenedor-remeras")
for(let remera of catalogoRemeras){
    let nuevaRemera =  document.createElement("div")
    nuevaRemera.innerHTML = `
    <div id="${remera.id}" class="card" style="width: 18rem;">

        <img id="imagen-productos" src="img/${remera.imagen}" class="card-img-top" alt="${remera.articulo}">

        <div class="card-body">
            <h5 id="titulo-productos" class="card-title">${remera.articulo}</h5>
            <p id="texto-productos" class="card-text"><strong>Color:</strong> ${remera.color}</p>
            <p id="texto-productos" class="card-text"><strong>Talle:</strong> ${remera.talle}</p>
            <p id="texto-productos" class="${remera.precio <= 4000 && "ofertas-productos"}"><strong>Precio: $ ${remera.precio}</strong></p>
            <button type="button" id="agregarCarritoRemera${remera.id}" class="btn btn-outline-primary"><strong>Agregar al carrito</strong></button>
        </div>
    </div>
  `

  contenedorRemeras.appendChild(nuevaRemera)

  //EVENTO - REMERAS 

  let agregarCarritoRemera = document.getElementById(`agregarCarritoRemera${remera.id}`)
  console.log(agregarCarritoRemera)
  agregarCarritoRemera.addEventListener("click",()=>{
    agregarAlCarrito(remera)
  })
}

let contenedorPantalones = document.getElementById("contenedor-pantalones")
for(let pantalon of catalogoPantalones){
    let nuevopantalon = document.createElement("div")
    nuevopantalon.innerHTML = `
    <div id="${pantalon.id}" class="card" style="width: 18rem;">

        <img id="imagen-productos" src="img/${pantalon.imagen}" class="card-img-top" alt="${pantalon.articulo}">

        <div class="card-body">
            <h5 id="titulo-productos" class="card-title">${pantalon.articulo}</h5>
            <p id="texto-productos" class="card-text"><strong>Color:</strong> ${pantalon.color}</p>
            <p id="texto-productos" class="card-text"><strong>Talle:</strong> ${pantalon.talle}</p>
            <p id="texto-productos" class="${pantalon.precio <= 4000 && "ofertas-productos"}"><strong>Precio: $ ${pantalon.precio}</strong></p>
            <button type="button" id="agregarCarritoPantalon${pantalon.id}" class="btn btn-outline-primary"><strong>Agregar al carrito</strong></button>
        </div>
    </div>
  `

  contenedorPantalones.appendChild(nuevopantalon)

  //EVENTO - PANTALONES

  let agregarCarritoPantalon = document.getElementById(`agregarCarritoPantalon${pantalon.id}`)
  console.log(agregarCarritoPantalon)
  agregarCarritoPantalon.addEventListener("click", ()=>{
    agregarAlCarrito(pantalon)
})
}

//CARRITO
let productosEnCarrito = []

if(localStorage.getItem("carrito")){
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
    console.log(productosEnCarrito)
}else{
    productosEnCarrito = []
    localStorage.setItem("carrito", productosEnCarrito)
}

function agregarAlCarrito(remera){

    let articuloagregado = productosEnCarrito.find((elemento)=>elemento.id == remera.id)
    if(articuloagregado == undefined){
        console.log(`El articulo ${remera.articulo} en color ${remera.color}, en talle ${remera.talle} y cuyo precio es ${remera.precio} ha sido agregado al carrito.`)
        productosEnCarrito.push(remera)
        localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
    
        Swal.fire({
            title: `Ha agregado un producto al carrito :D`,
            text: `El articulo ${remera.articulo}, en color ${remera.color} y en talle ${remera.talle} ha sido agregado al carrito con exito! :D`,
            icon: `succes`,
            imageUrl: `img/${remera.imagen}`,
            imageHeight: `200`,
            confirmButtonText: `Excelente!`,
        })

    }else{        
        Swal.fire({
        title: `ATENCION! El articulo ya fue agregado!`,
        text: `El articulo ${remera.articulo}, en color ${remera.color} y en talle ${remera.talle} ya existe en el carrito`,
        icon: `info`,
        ShowConfirmButton: false,
        timer: 2000,
    })}

}

function agregarAlCarrito(pantalon){

    let articuloagregado = productosEnCarrito.find((elemento)=>elemento.id == pantalon.id)

    if(articuloagregado == undefined){
        console.log(`El articulo ${pantalon.articulo} en color ${pantalon.color}, en talle ${pantalon.talle} y cuyo precio es ${pantalon.precio} ha sido agregado al carrito.`)
        productosEnCarrito.push(pantalon)
        localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
    
        Swal.fire({
            title: `Ha agregado un producto al carrito :D`,
            text: `El articulo ${pantalon.articulo} en color ${pantalon.color} y en talle ${pantalon.talle} ha sido agregado al carrito con exito! :D`,
            icon: `success`,
            imageUrl: `img/${pantalon.imagen}`,
            imageHeight: `200`,
            confirmButtonText: `Excelente!`,
        })
    }else{        
        Swal.fire({
        title: `ATENCION! El articulo ya fue agregado!`,
        text: `El articulo ${pantalon.articulo}, en color ${pantalon.color} y en talle ${pantalon.talle} ya existe en el carrito`,
        icon: `info`,
        ShowConfirmButton: false,
        timer: 2000,
    })}
}

/*AGREGAR AL CARRITO*/

function cargarProductosCarrito(arrayCarrito){

    bodycarrito.innerHTML = ""

    arrayCarrito.forEach((productosEnCarrito)=>{
       bodycarrito.innerHTML +=
       `
       <div class="card border-primary mb-3" id ="productoCarrito${productosEnCarrito.id}">
            <img id="imagen-productos" class="card-img-top" src="img/${productosEnCarrito.imagen}" alt="imagen-productos-carrito">
            <div class="card-body">
            <h4 id="titulo-productos" class="card-title">${productosEnCarrito.articulo}</h4>
                   
            <p id="texto-productos" class="card-text"><strong>Precio: $${productosEnCarrito.precio}</strong></p> 
            <button class= "btn btn-danger" id="botonEliminar${productosEnCarrito.id}"><i class="fas fa-trash-alt"></i></button>
            </div>    
        </div>
       `
    })

    arrayCarrito.forEach((productosEnCarrito)=>
    document.getElementById(`botonEliminar${productosEnCarrito.id}`).addEventListener("click", ()=>{
        console.log(`El producto eliminado es ${productosEnCarrito.articulo}`)
    
    
    let cardsArticulos = document.getElementById(`productoCarrito${productosEnCarrito.id}`)
    cardsArticulos.remove()

    let eliminarCard = arrayCarrito.find((remera)=> remera.id == productosEnCarrito.id)
    console.log(eliminarCard)

    let ubicacionEnArray = arrayCarrito.indexOf(eliminarCard)
    console.log(ubicacionEnArray)
    arrayCarrito.splice(ubicacionEnArray,1)
    console.log(arrayCarrito)

    localStorage.setItem("carrito", JSON.stringify(arrayCarrito))

    calcularTotalCarrito(arrayCarrito)

})
)

    calcularTotalCarrito(productosEnCarrito)
}

function finalizarCompra(arrayFinalizarCompra){
    Swal.fire({
        title:`¿Esta seguro de realizar la compra?`,
        icon:`info`, 
        showCancelButton: true,
        confirmButtonText:`Si, seguro!!!`,
        cancelButtonText: `Prefiero pensarlo un poco mas... :c`,
        confirmButtonColor:`green`,
        cancelButtonColor:`red`,
    }).then((resultado)=>{
        if(resultado.isConfirmed){
            let otroTotal = calcularTotalCarrito(productosEnCarrito)
            console.log(otroTotal)
            Swal.fire({
                title: `Compra realizada con exito!`,
                icon: `success`,
                confirmButtonColor:`green`,
                text:`Muchas gracias por su compra del dia ${fechaActual.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)} a las ${fechaActual.toLocaleString(DateTime.TIME_SIMPLE)}. El total de su compra es $ ${otroTotal}`,  
            })

            productosEnCarrito = []
            localStorage.removeItem("carrito")

        }else{
            Swal.fire({
                title: `Compra NO realizada ;(`,
                icon: `error`,
                text:`Esparamos cambie de opinion y vuelva mas tarde ;D`,
                timer:3500, 
            })
        }
    })
}

//FUNCION CALCULAR TOTAL CARRITO

function calcularTotalCarrito(productosEnCarrito){
    let totalCarrito = productosEnCarrito.reduce((acumulador, productosEnCarrito)=> acumulador + productosEnCarrito.precio, 0)
    totalCarrito == 0 ? precioTotal.innerHTML = `<p id="texto-carrito-vacio">El carrito esta vacio :(</p>` : precioTotal.innerHTML =  `
    <p id="texto-total-carrito">El total es <strong>$${totalCarrito}</strong></p>
    `
    return totalCarrito
}

//FUNCION PARA LOADER
setTimeout(()=>{
    loaderTexto.remove()
    loaderitem.remove()
},500)


/*SECCION PARA COLOCAR EVENTOS*/

botoncarrito.addEventListener("click", () =>(
    cargarProductosCarrito(productosEnCarrito)
))

botonFinzalizarCompra.addEventListener("click", () =>(
    finalizarCompra(productosEnCarrito)
))
