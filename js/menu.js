document.addEventListener("DOMContentLoaded", function() {
   var menuItems = document.querySelectorAll('.menu a');

   menuItems.forEach(function(item) {
       item.addEventListener('click', function() {
           var sideMenu = document.getElementById('side-menu');
           sideMenu.checked = false; // Cierra el menú al hacer clic en un enlace
       });
   });
});
    