var Usuario = /** @class */ (function () {
    function Usuario(nombre, apellido, urlImangen, clase) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.urlImangen = urlImangen;
        this.clase = clase;
    }
    return Usuario;
}());
var carlos = new Usuario('carlos', 'gutierrez', 'https://ep01.epimg.net/elcomidista/imagenes/2017/02/22/articulo/1487804099_363696_1487804800_sumario_normal.jpg', 'borde-cafe');
console.log(carlos);
function cambiarImagen() {
    var etiquetaImagen = document.getElementById("imagen");
    etiquetaImagen.src = carlos.urlImangen;
}
function cambiarClase() {
    var etiquetaClase = document.getElementById("clase");
    etiquetaClase.className = carlos.clase;
}
function crearContenido() {
    var etiquetaContenedora = document.getElementById('contenido');
    var parrafo = document.createElement("p");
    parrafo.innerHTML = "hola gente";
    var imagen = document.createElement("img");
    imagen.src = carlos.urlImangen;
    etiquetaContenedora.appendChild(parrafo);
    etiquetaContenedora.appendChild(imagen);
}
