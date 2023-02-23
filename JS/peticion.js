let contenedorPeticion = document.getElementById("contenedorPeticion")


class opiniones{
    constructor(idopinion, nombreopinion, opinionOpinion){
    this.id = idopinion
    this.nombre = nombreopinion
    this.opinion = opinionOpinion
    this.imagen = opinionimagen
    this.tiempo = opiniontiempo
}
}

const mostrarOpiniones = async () => {
    const respOp = await fetch('opiniones.json')
    const data = await respOp.json()

    for(let opiniones of data){
        let nuevoOpinion = document.createElement("div")
        nuevoOpinion.innerHTML =`
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="img/${opiniones.opinionimagen}" id="fotito-comentario" class="img-fluid rounded-start" alt="foto-comentario">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${opiniones.nombreopinion}</h5>
              <p id="texto-card-comentarios" class="card-text">${opiniones.opinionOpinion}</p>
              <p class="card-text"><small class="text-muted">${opiniones.opiniontiempo}</small></p>
            </div>
          </div>
        </div>
      </div>
      `
      contenedorPeticion.appendChild(nuevoOpinion)
    }
    }
mostrarOpiniones()

