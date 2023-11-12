const inputTitulo = document.getElementById("inputTitulo")
const inputClasificacion = document.getElementById("inputClasificacion")
const inputCategoria = document.getElementById("inputCategoria")
const inputCalificacion = document.getElementById("inputCalificacion")
const tarjetasLecturas = document.getElementById("tarjetasLecturas")

let lecturas = JSON.parse(localStorage.getItem("lecturas")) || [];

const agregarLectura = () => {
    const lectura = {
        titulo: inputTitulo.value,
        clasificacion: inputClasificacion.value,
        categoria: inputCategoria.value,
        calificacion: inputCalificacion.value,
    };

    lecturas.push(lectura)
    
    localStorage.setItem("Lecturas", JSON.stringify(lecturas));
};

const mostrarLecturas = () => {
    tarjetasLecturas.innerHTML = "";
    lecturas.forEach((lectura) => {
        tarjetasLecturas.innerHTML += `<div class="card col-sm-6 mb-4 mb-sm-1 mt-2">
                                            <div class="card-body">
                                            <h5 class="card-title">${lectura.titulo}</h5>
                                            <h6 class="card-subtitle mt-1">Clasificación:</h6><p class="card-text">${lectura.clasificacion}</p>
                                            <h6 class="card-subtitle">Categoria:</h6><p class="card-text">${lectura.categoria}</p>
                                            <h6 class="card-subtitle">Calificación:</h6><p class="card-text">${lectura.calificacion}</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>`;
        
    });

}