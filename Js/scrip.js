var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName('slider-item');
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }

    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2500); 
  }






function accion(){
    console.log('esta funcionando mi boton')
    var ancla = document.getElementsByClassName('nav-enlace');
    for (var i = 0; i < ancla.length; i++) { ancla[i].classList.toggle('desaparece')}
    
    } 



    function toggleProvincia(provinciaId) {
      // Obtiene el elemento de la provincia clicada
      var provinciaEspecifica = document.getElementById(provinciaId);
      if (provinciaEspecifica) {
          // Obtiene todos los elementos secundarios de la provincia
          var elementosSecundarios = provinciaEspecifica.children;
  
          // Recorre los elementos secundarios y oculta o muestra cada uno
          for (var i = 0; i < elementosSecundarios.length; i++) {
              // Excluye el título (h3) de la ocultación o visualización
              if (elementosSecundarios[i].tagName.toLowerCase() !== 'h3') {
                  var displayValue = elementosSecundarios[i].style.display;
                  elementosSecundarios[i].style.display = displayValue === 'none' || displayValue === '' ? 'block' : 'none';
              }
          }
      }
  }

  
  // Obtén la referencia al elemento del header
var header = document.querySelector('.header');

// Obtén la posición inicial del scroll
var scrollPosition = window.scrollY;

// Agrega un evento de escucha al evento de scroll
window.addEventListener('scroll', function() {
    // Actualiza la posición del scroll
    var currentScroll = window.scrollY;

    // Comprueba si el scroll hacia abajo
    if (currentScroll > scrollPosition) {
        // Si estás haciendo scroll hacia abajo, oculta el header
        header.classList.add('header-scrolled');
    //}else if (currentScroll < scrollPosition) {
     // header.classList.remove('header-scrolled');
  }

    // Actualiza la posición inicial del scroll
    scrollPosition = currentScroll;
});
