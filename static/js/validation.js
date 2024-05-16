document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contactForm");
    form.addEventListener("submit", function(event) {
        var nombre = document.getElementById("nombre").value;
        var email = document.getElementById("email").value;
        var mensaje = document.getElementById("mensaje").value;
        var motivo = document.getElementById("motivo").value;
        
        if (nombre === "" || email === "" || mensaje === "" || motivo === "" ) {
            alert("Por favor completa todos los campos obligatorios.");
            event.preventDefault();
        } else {
            form.submit();
            //alert("Gracias");
            window.open("127.0.0.1:5500/index.html", "_self");
        }
    });
});
