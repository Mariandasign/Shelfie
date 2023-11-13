const inputTitulo = document.getElementById("inputTitulo")
const inputFormato = document.getElementById("inputFormato")
const inputCategoria = document.getElementById("inputCategoria")
const inputCalificacion = document.getElementById("inputCalificacion")
const tarjetasLecturas = document.getElementById("tarjetasLecturas")

let lecturas = JSON.parse(localStorage.getItem("lecturas")) || [];  

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
    //console.log(index);
    lecturas.splice(index,1);
    mostrarLecturas();
};

const editarLectura = (id) => {
    
    const lectura = lecturas.find((lectura) => {
        return lectura.id === id;
    });

    const editLectura = {
        titulo: inputTitulo.value,
        formato: inputFormato.value,
        categoria: inputCategoria.value,
        calificacion: inputCalificacion.value,
        id: crypto.randomUUID(),
    };

    const index = lecturas.indexOf(lectura) 

    if ( inputTitulo.value !== ""){
        lecturas[index] = editLectura
        localStorage.setItem("lecturas", JSON.stringify(lecturas));
        mostrarLecturas();
    } else {
        //alert ("El nombre es un campo requerido")
        inputTitulo.value = lecturas[index].titulo
        inputFormato.value = lecturas[index].formato
        inputCategoria.value = lecturas[index].categoria
        inputCalificacion.value = lecturas[index].calificacion
    };

    document.getElementById("btnAgregar").style.display = "none";
    document.getElementById("btnActualizar").style.display = "block";
    document.querySelector("#btnActualizar").onclick = acualizarLectura();
    
    //console.log(index); 
    //lecturas.splice(index,1);
    //mostrarLecturas();
};

const mostrarLecturas = () => {
    //console.log("si muestra");
    tarjetasLecturas.innerHTML = "";
    lecturas.forEach((lectura) => {
        tarjetasLecturas.innerHTML += ` <div id="${lectura.id}">
                                            <div class="card bg-light-subtle shadow-sm border-0 mb-4 mb-sm-1 mt-2">
                                                <div class="card-body">
                                                    <h5 class="card-title">${lectura.titulo}</h5>
                                                    <h6 class="card-subtitle mt-1">Formato:</h6><p class="card-text">${lectura.formato}</p>
                                                    <h6 class="card-subtitle">Categoria:</h6><p class="card-text">${lectura.categoria}</p>
                                                    <h6 class="card-subtitle">Calificación:</h6><p class="card-text">${lectura.calificacion}</p>
                                                    <button type="button" class="btn btn-outline-danger" onclick="eliminarLectura('${lectura.id}')">Eliminar</button> 
                                                    <button type="button" class="btn btn-outline-warning" onclick="editarLectura('${lectura.id}')">Editar</button>
                                                </div>
                                            </div>
                                        </div>`;
                                        
   });
};
                                        //No sé si agregúe de forma correcta los botones, o si deban de ir en un div
                                        //Según la estructura de boostrap es así .-.
window.addEventListener("load", mostrarLecturas);