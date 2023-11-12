const inputTitulo = document.getElementById("inputTitulo")
const inputFormato = document.getElementById("inputFormato")
const inputCategoria = document.getElementById("inputCategoria")
const inputCalificacion = document.getElementById("inputCalificacion")

let lecturas = [];

const agregarLectura = () => {
    //console.log("agregarLectura")
    const lectura = {
        titulo: inputTitulo.value,
        formato: inputFormato.value,
        categoria: inputCategoria.value,
        calificacion: inputCalificacion.value,
    };

    lecturas.push(lectura);
    //console.log(lecturas);

    localStorage.setItem("lecturas", JSON.stringify(lecturas));
};

agregarLectura()