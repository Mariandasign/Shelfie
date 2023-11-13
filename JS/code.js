const inputTitulo = document.getElementById("inputTitulo")
const inputFormato = document.getElementById("inputFormato")
const inputCategoria = document.getElementById("inputCategoria")
const inputCalificacion = document.getElementById("inputCalificacion")
const tarjetasLecturas = document.getElementById("tarjetasLecturas")

//let lecturas = JSON.parse(localStorage.getItem("lecturas")) || []; //aquí marca error
let lecturas = JSON.parse(localStorage.getItem("lecturas")) || [];  //Mensaje: Uncaught SyntaxError: "undefined" is not valid JSON
                                                                    //  at JSON.parse (<anonymous>)
                                                                    // at code.js:8:21

const agregarLectura = () => {
    const lectura = {
        titulo: inputTitulo.value,
        formato: inputFormato.value,
        categoria: inputCategoria.value,
        calificacion: inputCalificacion.value,
        id: crypto.randomUUID(),
    };

    lecturas.push(lectura)
    
    localStorage.setItem("lecturas", JSON.stringify(lecturas));

    mostrarLecturas();
};

const eliminarLectura = (id) => {
    const lectura = lecturas.find((lectura) => {
        return lectura.id === id;
    });

    const index = lecturas.indexOf(lectura);

    lecturas.splice(index,1);
    mostrarLecturas();
};

const mostrarLecturas = () => {
    //console.log("si muestra");
    tarjetasLecturas.innerHTML = "";
    lecturas.forEach((lectura) => {
        tarjetasLecturas.innerHTML += ` <div id="${lectura.id}">
                                            <div class="card mb-4 mb-sm-1 mt-2">
                                                <div class="card-body">
                                                    <h5 class="card-title">${lectura.titulo}</h5>
                                                    <h6 class="card-subtitle mt-1">Formato:</h6><p class="card-text">${lectura.formato}</p>
                                                    <h6 class="card-subtitle">Categoria:</h6><p class="card-text">${lectura.categoria}</p>
                                                    <h6 class="card-subtitle">Calificación:</h6><p class="card-text">${lectura.calificacion}</p>
                                                    <button type="button" class="btn btn-outline-danger" onclick="eliminarLectura('${lectura.id}')">Eliminar</button> 
                                                    <button type="button" class="btn btn-outline-warning">Editar</button>
                                                </div>
                                            </div>
                                        </div>`;
                                        
   });
};
                                        //No sé si agregúe de forma correcta los botones, o si deban de ir en un div
                                        //Según la estructura de boostrap es así .-.
                                        //<p class="text-body-tertiary">${lectura.id}</p>
window.addEventListener("load", mostrarLecturas);