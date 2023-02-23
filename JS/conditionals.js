//CARTEL EMERGENTE - NIVEL DE FACHA 

let nivelDeFacha = parseInt(prompt("Ingrese su nivel de facha del 1 al 10"))
console.log(nivelDeFacha)

//CONDICIONAL - NIVEL DE FACHA

if(nivelDeFacha >=7){
    console.log(`Su nivel de facha es ${nivelDeFacha}, muy alto! pero puede aumentar si compra nuestros productos ;D`)
}

if(nivelDeFacha >=7) {
    Swal.fire({
        title: `Woooow`,
        text: `Su nivel de facha es alto! pero puede aumentar si compra nuestros productos ;D`,
        icon: `success`,
        confirmButtonText: `Excelente!`,
    })
}

if(nivelDeFacha <=6){
    console.log(`Su nivel de facha es ${nivelDeFacha} pero si usted compra nuestros productos subira considerablemente ;D`)
}

if(nivelDeFacha <=6){
    Swal.fire({
        title: `Oh... Interesante...`,
        text: `Pero si usted compra nuestros productos se volvera considerablemente mas fachero ;D`,
        icon: `warning`,
        confirmButtonText: `Excelente!`,
    })
}

