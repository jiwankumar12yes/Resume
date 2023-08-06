 // Get all the product previews
 const previews = document.querySelectorAll('.preview');

 // Add event listeners to each product in the product container
 const products = document.querySelectorAll('.product');
 products.forEach((product) => {
     product.addEventListener('click', (e) => {
         e.preventDefault();

         // Get the target data-name attribute of the clicked product
         const target = product.getAttribute('data-name');

         // Hide all the previews
         previews.forEach((preview) => {
             preview.classList.remove('active');
         });

         // Show the preview with the matching data-target attribute
         const preview = document.querySelector(`.preview[data-target="${target}"]`);
         preview.classList.add('active');
     });
 });

 // Add event listener to close the preview when the close button is clicked
 const closeButtons = document.querySelectorAll('.preview .fa-times');
 closeButtons.forEach((button) => {
     button.addEventListener('click', (e) => {
         e.preventDefault();

         // Hide the parent preview
         const preview = button.closest('.preview');
         preview.classList.remove('active');
     });
 });