// Sample menu categories and items
const categories = {
    "Chicken": ["Chicken Tenders", "Grilled Chicken Breast", "Chicken Wings"],
    "Beef": ["Beef Burger", "Steak", "Beef Tacos"],
    "Sushi": ["California Roll", "Tuna Sashimi", "Salmon Roll"]
};

let currentCategory = '';

document.addEventListener("DOMContentLoaded", function () {
    // Load the home page with category tiles
    loadCategoryTiles();

    // Handle Specials link click
    const specialsLink = document.getElementById("specials-link");
    specialsLink.addEventListener("click", function (e) {
        e.preventDefault();
        showCategorySection("Specials");
    });
});

function loadCategoryTiles() {
    const tilesContainer = document.querySelector('.tiles');
    for (let category in categories) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.textContent = category;
        tile.addEventListener('click', function () {
            showCategorySection(category);
        });
        tilesContainer.appendChild(tile);
    }
}

function showCategorySection(category) {
    if (categories[category]) {
        currentCategory = category;
        // Hide home section and show category section
        document.getElementById('home-section').style.display = 'none';
        const categorySection = document.getElementById('category-section');
        categorySection.style.display = 'block';

        // Set category name
        document.getElementById('category-name').textContent = category;

        // Clear and load menu items
        const menuItemsList = document.getElementById('menu-items-list');
        menuItemsList.innerHTML = '';  // Clear existing items
        categories[category].forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            menuItemsList.appendChild(listItem);
        });
    }
}
