
 botonCatalogo = document.getElementById("botonCatalogo");
let catalogo = document.getElementById("catalogo");

botonCatalogo.addEventListener("click", function() {

    if (catalogo.style.display === "block") {

        catalogo.style.display = "none";
        botonCatalogo.textContent = "Ver catálogo de pianos";

    } else {

        catalogo.style.display = "block";
        botonCatalogo.textContent = "Ocultar catálogo";

    }

});


