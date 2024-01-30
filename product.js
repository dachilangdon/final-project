async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching product data:', error);
    }
}

function renderProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.title;

        const productDetails = document.createElement('div');
        productDetails.classList.add('product-details');

        const productName = document.createElement('h3');
        productName.textContent = product.title;

        const productPrice = document.createElement('p');
        productPrice.textContent = `$${product.price.toFixed(2)}`;

        // Append elements to the product details div
        productDetails.appendChild(productName);
        productDetails.appendChild(productPrice);

        // Append elements to the product card
        productCard.appendChild(productImage);
        productCard.appendChild(productDetails);

        // Add "Buy Now" button
        const buyButton = document.createElement('button');
        buyButton.classList.add('buy-button');
        buyButton.textContent = 'Buy Now';
        productCard.appendChild(buyButton);

        // Append the product card to the product list
        productList.appendChild(productCard);


        // Add click event to "Buy Now" button
        buyButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the click event from propagating to the product card
            showBuyWidget(product.price);
        });
    });
}

function createBuyWidget() {
    let totalPrice = 0;

    function showBuyWidget(price,) {
        const buyWidget = document.getElementById('buyWidget');
        const totalPriceSpan = document.getElementById('totalPrice');
        const checkoutButton = document.getElementById('checkoutButton');

        // Accumulate the prices
        totalPrice += price;

        buyWidget.style.display = 'block';
        totalPriceSpan.textContent = totalPrice.toFixed(2);
        checkoutButton.style.display = 'block';

        
        console.log('Total Price:', totalPrice.toFixed(2));
        localStorage.setItem('totalPrice', totalPrice.toFixed(2));
    }
    return showBuyWidget;
}
const showBuyWidget = createBuyWidget();

// Handle search button click
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', async () => {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();

    const products = await fetchProducts();

    if (products) {
        const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );

        renderProducts(filteredProducts);
    }
});

// fetch and render
(async function () {
    const products = await fetchProducts();
    if (products) {
        renderProducts(products);
    }
})();

document.getElementById('checkoutButton').addEventListener('click', function() {
    // Navigate to the checkout.html
    window.location.href = 'checkout.html'
})

