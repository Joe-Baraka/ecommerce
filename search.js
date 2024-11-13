// JavaScript: Search filter functionality

document.getElementById('search-bar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();  // Get search term and convert to lowercase
    const productsContainer = document.getElementById('products-container');
    const products = productsContainer.querySelectorAll('.product-card');

    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase();  // Get product name

        if (productName.includes(searchTerm)) {
            product.style.display = 'block';  // Show product if name matches
        } else {
            product.style.display = 'none';  // Hide product if name doesn't match
        }
    });
});
