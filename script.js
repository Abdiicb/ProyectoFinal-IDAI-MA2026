var contenedor = document.getElementById.querySelector(".slider");

var btnizquierda = document.getElementById("btn-izquierda");

var btnderecha = document.getElementById("btn-derecha");

btnderecha.addEventListener("click", function() {
    contenedor.scrollLeft += contenedor.offsetWidth;
});
