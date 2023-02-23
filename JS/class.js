//DECLARACION DE OBJETOS REMERAS

class remera{
    constructor(idRemera, articuloRemera, colorRemera, talleRemera, precioRemera, imagenRemera) {
    this.id = idRemera;
    this.articulo = articuloRemera;
    this.color = colorRemera;
    this.talle = talleRemera;
    this.precio = precioRemera;
    this.imagen = imagenRemera;
    this.cantidad = 1
    this.infocompletaRemera = function(){
        console.log(`Nuestro articulo ${articuloRemera} esta disponible en color ${colorRemera}, en la talla ${talleRemera} y su valor es de $ ${precioRemera}`)
    }
}
}

const remera1 = new remera (1, "Remera Messi edition", "dark-blue", "S", 5000, "remera-messi.jpg")
console.log(remera1)
remera1.infocompletaRemera()

const remera2 = new remera (2, "Remera full strong-black", "strong-black", "M", 4000, "remera-black.jpg")
console.log(remera2)
remera2.infocompletaRemera()

const remera3 = new remera (3, "Remera middle gray", "gray", "L", 4500, "remera-gray.jpg")
console.log(remera3)
remera3.infocompletaRemera()

const remera4 = new remera (4, "Remera flower black", "white and black", "M", 6000, "remera-hombre-floreada.jpg")
console.log(remera4)
remera4.infocompletaRemera()

const remera5 = new remera (5, "Remera quite retro beige", "beige", "L", 5499,"remera-hombre-vintage.jpg")
console.log(remera5)
remera5.infocompletaRemera()

const remera6 = new remera (6,"Remera quite retro gray", "gray", "L", 5499, "remera-hombre-vintage-gray.jpg")
console.log(remera6)
remera6.infocompletaRemera()

const remera7 = new remera (7, "Remera Stranger Things", "light gray", "S", 5999, "remera-hombre-stranger-things.jpg")
console.log(remera7)
remera7.infocompletaRemera()

const remera8 = new remera (8, "Remera Full flowers and lines", "Black and white", "M", 6999, "remera-hombre-floreada-lineas.jpg")
console.log(remera8)
remera8.infocompletaRemera()

const remera9 = new remera (9, "Remera low degrade Lucky", "Black, gray and white", "L", 3999, "remera-hombre-degrade.jpg")
console.log(remera9)
remera9.infocompletaRemera()

const remera10 = new remera (10, "Remera Lucky Mostaza", "Mostaza", "S", 7999, "remera-hombre-mostaza.jpg")
console.log(remera10)
remera10.infocompletaRemera()

const remera11 = new remera (11, "Remera low degrade Lucky", "Light blue", "L", 4499, "remera-hombre-degrade-celeleste.jpg")
console.log(remera11)
remera11.infocompletaRemera()

const remera12 = new remera (12, "Remera lady black", "Black", "S", 4399, "remera-mujer-escotev.jpg")
console.log(remera12)
remera12.infocompletaRemera()

const remera13 = new remera (13, "Remera lady full flower", "White and pink", "XS", 5999, "remera-mujer-floreada-larga.jpg")
console.log(remera13)
remera13.infocompletaRemera()

const remera14 = new remera (14, "Remera lady pink", "Pink", "M", 4999, "remera-mujer-rosa.jpg")
console.log(remera14)
remera14.infocompletaRemera()

const remera15 = new remera (15, "Remera magic hand edition", "Black", "S", 5999, "remera-mujer-mano.jpg")
console.log(remera15)
remera15.infocompletaRemera()

const remera16 = new remera (16, "Remera squid game edition", "Black", "M", 2999, "remera-mujer-squid-game.jpg")
console.log(remera16)
remera16.infocompletaRemera()

const remera17 = new remera (17, "Remera coldplay edition", "Black", "XS", 4999, "remera-mujer-coldplay.jpg")
console.log(remera17)
remera17.infocompletaRemera()

const remera18 = new remera (18, "Remera Lucky Stone edition", "Black", "M", 6299, "remera-mujer-rolling.jpg")
console.log(remera18)
remera18.infocompletaRemera()

const remera19 = new remera (19, "Remera Lucky low Stone edition", "Special Black", "L", 6499, "remera-mujer-rolling-nevada.jpg")
console.log(remera19)
remera19.infocompletaRemera()

const remera20 = new remera (20, "Remera lady Nirvana edition", "Black", "S", 4799, "remera-mujer-nirvana.jpg")
console.log(remera20)
remera20.infocompletaRemera()

const remera21 =new remera (21, "Remera Lady full freedom", "Black", "M", 4299, "remera-mujer-freedom.jpg")
console.log(remera21)
remera21.infocompletaRemera()

//DECLARACION DE OBJETOS CON CLASES -- PANTALONES

class pantalon{
    constructor(idPantalon, articuloPantalon, colorPantalon, tallePantalon, materialPantalon, precioPantalon, imagenPantalon){
        this.id = idPantalon,
        this.articulo = articuloPantalon,
        this.color = colorPantalon,
        this.talle = tallePantalon,
        this.material = materialPantalon,
        this.precio = precioPantalon,
        this.imagen = imagenPantalon;
        this.infocompletaPantalon = function(){
            console.log(`Nuestro articulo ${articuloPantalon} esta disponible en color ${colorPantalon}, en la talla ${tallePantalon}, su material es ${materialPantalon} y su valor es de $ ${precioPantalon}`)
        }
    }
}

const pantalon1 = new pantalon(1, "Jean racer ultra", "Negro", "41","jean", 5000, "jean-racer.jpg")
console.log(pantalon1)
pantalon1.infocompletaPantalon()

const pantalon2 = new pantalon(2, "Jean ultra energy", "Green", "42","gabardina", 7000, "jean-green.jpg")
console.log(pantalon2)
pantalon2.infocompletaPantalon()

const pantalon3 = new pantalon(3, "Jean max elegant Gray", "Gray", "40","jean", 10000, "jean-gray.jpg")
console.log(pantalon3)
pantalon3.infocompletaPantalon()

const pantalon4 = new pantalon(4, "Jean Lucky classic", "Blue", "41", "Jean", 3500, "pantalon-hombre-classic-blue.jpg")
console.log(pantalon4)
pantalon4.infocompletaPantalon()

const pantalon5 = new pantalon(5, "Pantalon max elegant Black", "Black", "39", "gabardina", 15000, "pantalon-hombre-elegant-black.jpg")
console.log(pantalon5)
pantalon5.infocompletaPantalon()

const pantalon6 = new pantalon(6, "Jean low Sky", "Sky blue", "40", "Jean", 12499, "pantalon-hombre-celeste.jpg")
console.log(pantalon6)
pantalon6.infocompletaPantalon()

const pantalon7 = new pantalon(7, "Jean max territory", "Gray", "41", "Jean", 11999, "pantalon-hombre-gray.jpg")
console.log(pantalon7)
pantalon7.infocompletaPantalon()

const pantalon8 = new pantalon(8, "Jean Lucky full white", "White", "40", "Jean", 10299, "pantalon-hombre-white.jpg")
console.log(pantalon8)
pantalon8.infocompletaPantalon()

const pantalon9 = new pantalon(9, "Jean Extra Fire Lucky", "Red", "39", "Jean", 13499, "pantalon-hombre-red.jpg")
console.log(pantalon9)
pantalon9.infocompletaPantalon()

const pantalon10 = new pantalon(10, "Pantalon star limited edition", "mostaza", "40", "gabardina", 16499, "pantalon-hombre-mostaza.jpg")
console.log(pantalon10)
pantalon10.infocompletaPantalon()

const pantalon11 = new pantalon(11, "Jean Lady Dark Blue", "Dark blue", "36", "Jean", 7999, "pantalon-mujer-dark-blue.jpg")
console.log(pantalon11)
pantalon11.infocompletaPantalon()

const pantalon12 = new pantalon(12, "Jean Lady Light Blue", "Light blue", "37", "Jean", 9699, "pantalon-mujer-light-blue.jpg")
console.log(pantalon12)
pantalon12.infocompletaPantalon()

const pantalon13 = new pantalon(13, "Jean Lady classic black", "Black", "38", "Jean", 3999, "pantalon-mujer-black.jpg")
console.log(pantalon13)
pantalon13.infocompletaPantalon()

const pantalon14 = new pantalon(14, "Pantalon Lady elegant green", "Green", "36", "gabardina", 9899, "pantalon-mujer-green.jpg")
console.log(pantalon14)
pantalon14.infocompletaPantalon()

const pantalon15 = new pantalon(15, "Pantalon limited elegant black", "Black", "38", "rubber", 14999, "pantalon-mujer-elegant-black.jpg")
console.log(pantalon15)
pantalon15.infocompletaPantalon()

const pantalon16 = new pantalon(16, "Jean Lady Cute Pink", "Pink", "36", "gabardina", 9899, "pantalon-mujer-pink.jpg")
console.log(pantalon16)
pantalon16.infocompletaPantalon()

const pantalon17 = new pantalon(17, "Jean Lady dark gray", "Dark gray", "37", "Jean", 8699, "pantalon-mujer-dark-gray.jpg")
console.log(pantalon17)
pantalon17.infocompletaPantalon()

const pantalon18 = new pantalon(18, "Jean Lady wide leg Lucky", "Light blue", "38", "Jean", 12999, "pantalon-mujer-palazzo.jpg")
console.log(pantalon18)
pantalon18.infocompletaPantalon()

//ARRAYS DE OBJETOS

const catalogoRemeras = [remera1, remera2, remera3, remera4, remera5, remera6, remera7, remera8, remera9, remera10, remera11, remera12, remera13, remera14, remera15, remera16, remera17, remera18, remera19, remera20, remera21]
console.log(catalogoRemeras)

function mostrarcatalogoRemeras(array1){
    for(let remera of array1){
    console.log(remera.articulo, remera.precio)
    }
}
mostrarcatalogoRemeras(catalogoRemeras)

const catalogoPantalones = [pantalon1, pantalon2, pantalon3, pantalon4, pantalon5, pantalon6, pantalon7, pantalon8, pantalon9, pantalon10, pantalon11, pantalon12, pantalon13, pantalon14, pantalon15, pantalon16, pantalon17, pantalon18]
console.log(catalogoPantalones)

function mostrarcatalogoPantalones (array2){
    for(let pantalon of array2){
        console.log(pantalon.articulo, pantalon.precio)
    }
}
mostrarcatalogoPantalones(catalogoPantalones)

//CARGA DE ARRAYS AL STORAGE

localStorage.setItem("catalogoremeras", JSON.stringify(catalogoRemeras))

localStorage.setItem("catalogopantalones", JSON.stringify(catalogoPantalones))

