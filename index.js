// from idnex to details + fetch +popular
document.addEventListener('DOMContentLoaded', function () {
    // Make a request to get the products
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            // Sort the products by popularity or sales (choose your metric)
            const sortedProducts = data.sort((a, b) => b.popularity - a.popularity || b.rating.count - a.rating.count);

            // Take the first 6 products (most popular/most sold)
            const topProducts = sortedProducts.slice(0, 6);

            // Display the products in the grid
            const gridContainer = document.getElementById('gridContainer');
            topProducts.forEach(product => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('item');
                itemElement.innerHTML = `
                    <div>
                        <img src="${product.image}" alt="${product.title}" style="max-width: 100%; height: auto;">
                        <p>${product.title}</p>
                        <p>Price: $${product.price}</p>
                        <p>Sold: ${product.rating.count}</p>
                        <button style="cursor: pointer; transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out; background-color: #3498db; color: #fff;" onclick="redirectToDescriptionPage(${product.id})">See Details</button>
                        <button style="cursor: pointer; transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out; background-color: #3498db; color: #fff;" onclick="redirectToDescriptionPage(${product.id})">Add to Cart</button>
                    </div>
                `;
                gridContainer.appendChild(itemElement);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

function redirectToDescriptionPage(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
}
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
//fetch + newest items
        // Your JavaScript code to fetch and display the newest items
        document.addEventListener('DOMContentLoaded', function () {
            fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                .then(data => {
                    // Sort the products by date
                    const newestProducts = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 6);

                    // Display the newest products
                    const gridContainer2 = document.getElementById('gridContainer2');
                    newestProducts.forEach(product => {
                        const itemElement = document.createElement('div');
                        itemElement.classList.add('item');
                        itemElement.innerHTML = `
                            <>
                            <div>
                            <img src="${product.image}" alt="${product.title}" style="max-width: 100%; height: auto;">
                            <p>${product.title}</p>
                            <p>Price: $${product.price}</p>
                            <p>Sold: ${product.rating.count}</p>
                            <button style="cursor: pointer; transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out; background-color: #3498db; color: #fff;" onclick="redirectToDescriptionPage(${product.id})">See Details</button>
                            <button style="cursor: pointer; transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out; background-color: #3498db; color: #fff;" onclick="redirectToDescriptionPage(${product.id})">Add to Cart</button>
                        </div>
                        `;
                        gridContainer2.appendChild(itemElement);
                    });
                })
                .catch(error => console.error('Error fetching data:', error));
        });
// scroll to about us
        function redirectToDescriptionPage(productId) {
            window.location.href = `product-detail.html?id=${productId}`;
        }
        document.addEventListener('DOMContentLoaded', function() {
            const scrollLinks = document.querySelectorAll('.scroll-link');
        
            scrollLinks.forEach(function(link) {
              link.addEventListener('click', function(e) {
                e.preventDefault();
        
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
        
                window.scrollTo({
                  top: targetElement.offsetTop - document.getElementById('header').offsetHeight,
                  behavior: 'smooth'
                });
              });
            });
          });
//   scroll to up
          document.addEventListener('DOMContentLoaded', function() {
            const scrollToTopBtn = document.getElementById('scrollToTopBtn');
        
            window.addEventListener('scroll', function() {
              if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = 'block';
              } else {
                scrollToTopBtn.style.display = 'none';
              }
            });
        
            scrollToTopBtn.addEventListener('click', function() {
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            });
          });