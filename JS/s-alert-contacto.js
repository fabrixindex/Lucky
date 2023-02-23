let botonformulario = document.getElementById("botonformulario")

botonformulario.addEventListener("click", ()=>(
    Swal.fire({
        title: `¡Su consulta fue enviada!`,
        icon: `success`,
        text:`Muchas gracias por contactarse con nosotros! En breve nos estaremos comunicando con usted.`,
        timer:3500, 
    })
))