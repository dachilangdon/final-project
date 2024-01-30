
    document.addEventListener('DOMContentLoaded', function () {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        if (productId) {
            // Make a request to get the detailed information for the specific product
            fetch(`https://fakestoreapi.com/products/${productId}`)
                .then(response => response.json())
                .then(product => {
                    const productDetailContainer = document.getElementById('productDetail');
                    productDetailContainer.innerHTML = `
                        <img src="${product.image}" alt="${product.title}" style="max-width: 100%; height: auto;">
                        <p>${product.title}</p>
                        <p>Price: $${product.price}</p>
                        <p>Sold: ${product.rating.count}</p>
                        <p>Description: ${product.description}</p>
                    `;
                })
                .catch(error => console.error('Error fetching product detail:', error));
        } else {
            console.error('Product ID not found in URL parameters.');
        }
    });
    function goBack() {
        window.history.back();
    }
