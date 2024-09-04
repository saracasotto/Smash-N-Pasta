document.addEventListener("DOMContentLoaded", function () {
  const userLang = navigator.language || navigator.userLanguage;
  const lang = userLang.startsWith("es") ? "es" : userLang.startsWith("it") ? "it" : "en";
  const navJsonFile = `./data/${lang}.json`;
  const menuJsonFile = `./data/menu-${lang}.json`;

  Promise.all([
      fetch(navJsonFile).then(response => response.json()),
      fetch(menuJsonFile).then(response => response.json())
  ])
  .then(([navData, menuData]) => {
      const navItems = document.querySelectorAll(".nav-link");
      navItems[0].textContent = navData.navHome;

      generateMenu(menuData);
  })
  .catch(error => console.error('Error loading data:', error));
});

function generateMenu(menu) {
  const menuContainer = document.getElementById('menu');
  const menuListContainer = document.getElementById('menu-list');

  menuListContainer.innerHTML = ''; // Pulire la lista dei pulsanti

  for (const category in menu) {
    // Aggiungere pulsanti di navigazione
    menuListContainer.innerHTML += `<a href="#${category}"><button class="m-3">${category}</button></a>`;
      let categoryHTML = `<div id="${category}" class="category">
                            <h3>${category}</h3>`;
      
      menu[category].forEach(product => {
          categoryHTML += `
            <div class="d-flex position-relative mt-3">
              
               <!-- <img src="./assets/${product.id}.jpg" class="flex-shrink-0 me-3" alt="${product.product_name}"> -->

              <div>
                <h5 class="product-name mt-0">${product.product_name}</h5>
                <p class="product-description">${product.description}</p>
                <p class="product-price">${product.price}</p>
                <p class="product-price">${product.price2}</p>
                <p class="allergens">${product.allergens.join(', ')}</p>
              </div>
            </div>`;
      });

      categoryHTML += `</div>`;
      menuContainer.innerHTML += categoryHTML;
  }
}
