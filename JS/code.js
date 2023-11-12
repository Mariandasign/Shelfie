const inputTitulo = document.getElementById("inputTitulo")
const inputLectura = document.getElementById("inputLectura")
const inputCategoria = document.getElementById("inputCategoria")
const inputCalificacion = document.getElementById("inputCalificacion")

let lecturas = []

const agregarLectura = () => {
    const lectura = {
        titulo: inputTitulo.value,
        lectura: inputLectura.value,
        categoria: inputCategoria.value,
        calificacion: inputCalificacion.value,
    };

    lecturas.push(lectura)
    
    localStorage.setItem("Lecturas", JSON.stringify(lecturas));
}