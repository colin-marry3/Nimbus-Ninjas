document.addEventListener('DOMContentLoaded', function () {
    var categoriesDropdown = document.getElementById('categories-dropdown');
    var sideNavbar = categoriesDropdown.querySelector('.side-navbar');

    var isMouseOverCategories = false;
    var isMouseOverSideNavbar = false;

    // Show sideNavbar on mouseover
    categoriesDropdown.addEventListener('mouseover', function (event) {
        event.stopPropagation();
        isMouseOverCategories = true;
        sideNavbar.style.display = 'block';
    });

    // Hide sideNavbar on mouseout if not over sideNavbar or categoriesDropdown
    document.addEventListener('mouseout', function (event) {
        if (!isMouseOverSideNavbar && !isMouseOverCategories) {
            sideNavbar.style.display = 'none';
        }
    });

    // Show sideNavbar on mouseover
    sideNavbar.addEventListener('mouseover', function () {
        isMouseOverSideNavbar = true;
    });

    // Hide sideNavbar on mouseout if not over categoriesDropdown
    sideNavbar.addEventListener('mouseout', function (event) {
        if (!isMouseOverCategories) {
            sideNavbar.style.display = 'none';
        }
        isMouseOverSideNavbar = false;
    });

    // Add event listeners to individual categories within the side navbar
    var sideNavbarCategories = sideNavbar.querySelectorAll('ul li');
    sideNavbarCategories.forEach(function (category) {
        category.addEventListener('mouseover', function () {
            isMouseOverSideNavbar = true;
        });

        category.addEventListener('mouseout', function () {
            isMouseOverSideNavbar = false;
        });
    });

    // Logo link to home.html
    var logoLink = document.querySelector('.logo a');
    logoLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'home.html';
    });

    // Search bar functionality
    var searchBar = document.querySelector('.search-bar input');
    searchBar.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    // Language dropdown functionality
    var languageDropdown = document.querySelector('.language-dropdown select');
    languageDropdown.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    // Add event listener to close language dropdown when clicking outside
    document.addEventListener('click', function () {
        var languageSelect = document.getElementById('language-select');
        languageSelect.style.display = 'none';
    });
});

function addToWishlist(productName, productPrice) {
    // You can implement your logic to add the item to the wishlist
    // For now, let's just log the information
    console.log('Added to Wishlist:', productName, productPrice);
}