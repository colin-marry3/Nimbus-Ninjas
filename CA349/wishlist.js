document.addEventListener('DOMContentLoaded', function () {
    // Your existing code...

    // Find the wishlist button
    var wishlistButton = document.querySelector('.add-to-wishlist-button');

    // Add a click event listener to the button
    wishlistButton.addEventListener('click', function () {
        // Get product details from data attributes
        var productName = wishlistButton.getAttribute('data-product-name');
        var productImage = wishlistButton.getAttribute('data-product-image');
        var productPrice = wishlistButton.getAttribute('data-product-price');

        // Create an object to represent the product
        var product = {
            name: productName,
            image: productImage,
            price: productPrice
        };

        // Check if there's an existing wishlist in localStorage
        var existingWishlist = localStorage.getItem('wishlist');

        // If the wishlist exists, parse it from JSON
        var wishlist = existingWishlist ? JSON.parse(existingWishlist) : [];

        // Add the product to the wishlist
        wishlist.push(product);

        // Save the updated wishlist back to localStorage
        localStorage.setItem('wishlist', JSON.stringify(wishlist));

        // Alert to indicate successful addition (you can replace this with a more user-friendly notification)
        alert(productName + ' has been added to your wishlist!');
    });
});