window.onload = inicializar;

function inicializar() {


    mostrarCarrito();
    document.getElementById("eliminarCarro").addEventListener("click", eliminarCarro, false);

}

function mostrarCarrito() {
    var carrito = JSON.parse(sessionStorage.getItem("carrito"));
    var total = 0;
    carrito.forEach(zapato => {

        document.getElementById("mostrarCarrito").innerHTML +=
            `<div class="divzapatos card" style=" width: 18rem;">
            
                <img src="${zapato.imagen}" class="car-img-top">
            
            <div class="card-body">
                <h3 class="card-text" >${zapato.nombre}</h3>
                <h4 class="card-text" >${zapato.precio}€</h4>
            </div>
            

        </div>`
        total += Number(zapato.precio);

    });
    document.getElementById("total").innerHTML = "Total : " + total + "€";
}

function eliminarCarro() {
    sessionStorage.clear();
    location.reload();
}