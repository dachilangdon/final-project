const totalPriceFromStorage = localStorage.getItem('totalPrice') || '0.00';

// Update the total price div
const totalPriceDiv = document.getElementById('total-price');
totalPriceDiv.textContent = `Total Price = $${totalPriceFromStorage}`;