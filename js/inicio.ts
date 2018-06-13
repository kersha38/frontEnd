class  Usuario {
    constructor(public nombre:string, public apellido:string,
                public urlImangen:string, public clase:string ){}

}

const carlos= new Usuario('carlos','gutierrez','https://ep01.epimg.net/elcomidista/imagenes/2017/02/22/articulo/1487804099_363696_1487804800_sumario_normal.jpg','borde-cafe');
console.log(carlos);

function cambiarImagen() {
    const etiquetaImagen:any = document.getElementById("imagen");
    etiquetaImagen.src = carlos.urlImangen;
}

function cambiarClase() {
    const etiquetaClase : any = document.getElementById("clase");
    etiquetaClase.className = carlos.clase;
}

function crearContenido() {
    const etiquetaContenedora = document.getElementById('contenido');
    const parrafo = document.createElement("p");
    parrafo.innerHTML="hola gente";

    const imagen = document.createElement("img");
    imagen.src = carlos.urlImangen;

    etiquetaContenedora.appendChild(parrafo);
    etiquetaContenedora.appendChild(imagen);

}