

const formulario = document.getElementById("formulario");
const texto = document.getElementById("texto");
const contenido = document.getElementById("contenido");
const contador = document.getElementById("contador");

let datos = JSON.parse(localStorage.getItem("datos")) || [];


function guardarDatos() {
    localStorage.setItem("datos", JSON.stringify(datos));
}


function mostrarDatos() {


    datos.sort((a, b) =>
        a.localeCompare(b, "es", { numeric: true })
    );


    contador.textContent = datos.length;


    contenido.innerHTML = "";


    if (datos.length === 0) {

        const mensaje = document.createElement("p");
        mensaje.className = "vacio";
        mensaje.textContent = "Aún no hay información guardada.";

        contenido.appendChild(mensaje);

        return;
    }


    datos.forEach(function (d) {

        const tarjeta = document.createElement("article");

        tarjeta.className = "tarjeta";
        tarjeta.textContent = d;

        contenido.appendChild(tarjeta);

    });

}


formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nuevaInformacion = texto.value.trim();

    if (nuevaInformacion !== "") {

        datos.push(nuevaInformacion);

        guardarDatos();

        mostrarDatos();


        texto.value = "";

        texto.focus();

    }

});

mostrarDatos();
