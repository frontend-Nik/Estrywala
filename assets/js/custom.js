const header = document.querySelector(".main-header");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

$(function($) {
  let url = window.location.href;
  $('.main-header ul .nav-ac a').each(function() {
    if (this.href === url) {
      $(this).closest('.main-header ul .nav-ac a').addClass('active');
    }
  });
});

// review slider start -----------
$(".review-slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
// review slider end -------------


// form validation start -----------------

(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
  })()


  