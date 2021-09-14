document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
  
          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);
  
          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
});

//Make navbar dropdown activation only clickable if window is less than 1024px
$('.has-dropdown').on('click', function(event) {
  event.stopPropagation();

  var windowWidth = window.innerWidth;
  
  if (windowWidth < 1024) {
    $(this).toggleClass('is-active')
    $('.navbar-dropdown').toggleClass('display-none')
  }
})