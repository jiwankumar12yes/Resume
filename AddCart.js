 // JavaScript code to handle button clicks
 const buyButtons = document.querySelectorAll('.buy');
 const cartButtons = document.querySelectorAll('.cart');
 const previewContainers = document.querySelectorAll('.preview');

 buyButtons.forEach((button) => {
   button.addEventListener('click', (event) => {
     // Perform the action when the buy button is clicked
     event.preventDefault();
     const previewContainer = event.target.closest('.preview');
     const productName = previewContainer.getAttribute('data-target');
     console.log(`Buy: ${productName}`);
   });
 });

 cartButtons.forEach((button) => {
   button.addEventListener('click', (event) => {
     // Perform the action when the add to cart button is clicked
     event.preventDefault();
     const previewContainer = event.target.closest('.preview');
     const productName = previewContainer.getAttribute('data-target');
     console.log(`Add to Cart: \u20B9${productName}`);
   });
 });

 previewContainers.forEach((container) => {
   container.addEventListener('click', (event) => {
     // Toggle the active state of the preview container
     const isActive = container.classList.contains('active');
     previewContainers.forEach((preview) => preview.classList.remove('active'));
     if (!isActive) {
       container.classList.add('active');
     }
   });
 });