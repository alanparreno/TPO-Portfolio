//document.addEventListener('DOMContentLoaded', function() {
//    var contenedorProyectos = document.querySelector('.contenedor-proyectos');
//    var Visible = false;

//    var observer = new IntersectionObserver(function(entries) {
//        entries.forEach(function(entry) {
//            if (entry.isIntersecting) {
//                Visible = true;
//                contenedorProyectos.style.opacity = 1;
//                contenedorProyectos.style.transition = 'opacity 0.8s ease';
//            } else if (Visible) {
//                Visible = false;
//                contenedorProyectos.style.opacity = 0;
//            }
//        });
//    }, {
//        threshold: 0.5
//    });

//    observer.observe(contenedorProyectos);
//

document.addEventListener('DOMContentLoaded', function() {
    const cajitas = document.querySelectorAll('.proyecto-cajita');

    cajitas.forEach(cajita => {
        const contenidoAltura = cajita.scrollHeight;
        cajita.style.setProperty('--altura-hover', contenidoAltura + 'px');

        cajita.addEventListener('mouseenter', () => {
            cajita.style.height = 'var(--altura-hover)';
        });

        cajita.addEventListener('mouseleave', () => {
            cajita.style.height = '';
        });
    });
});
