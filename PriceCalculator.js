// window.addEventListener('DOMContentLoaded', function() {
//     const quantityInput = document.getElementById('quantity');
//     const priceInput = document.getElementById('price');
//     const totalElement = document.getElementById('total');
//     const calculateBtn = document.getElementById('calculate-btn');
//     const payBtn = document.getElementById('pay-btn');
  
//     calculateBtn.addEventListener('click', function() {
//       const quantity = parseInt(quantityInput.value);
//       const price = parseFloat(priceInput.value);
//       const total = (quantity * price).toFixed(2);
//       totalElement.textContent = total;
//     });
  
//     payBtn.addEventListener('click', function() {
//       const total = parseFloat(totalElement.textContent);
//       // Add payment processing logic here
//       alert('Payment processed successfully. Total amount: $' + total);
//     });
//   });
function calculateTotal() {
    // Get the quantity and price from the input fields
    var quantity = document.getElementById("quantity").value;
    var price = document.getElementById("price").value;
  
    // Calculate the total price
    var total = quantity * price;
  
    // Set the total price in the output field
    document.getElementById("total").innerHTML = total.toFixed(2);
  }
  
  // Attach the calculateTotal() function to the calculate button
  document.getElementById("calculate-btn").addEventListener("click", calculateTotal);
  