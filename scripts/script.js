// Carica il JSON dal file esterno
fetch('./data/menu.json')
  .then(response => response.json())
  .then(menu => {
    generateMenu(menu);
  })
  .catch(error => console.error('Error loading menu:', error));

  function generateMenu(menu) {
    const menuContainer = document.getElementById('menu');
  
    for (const category in menu) {
      let categoryHTML = `<div id="${category}" class="category">
                            <h3>${category}</h3>`;
      
      // Aggiungi i prodotti alla categoria
      menu[category].forEach(product => {
        categoryHTML += `
          <div class="d-flex position-relative mt-3">
            <img src="./assets/${product.id}.jpg" class="flex-shrink-0 me-3" alt="${product.product_name}">
            <div>
              <h5 class="product-name mt-0">${product.product_name}</h5>
              <p class="product-description">${product.description}</p>
              <p class="product-price">${product.price}</p>
              <p class="product-price">${product.price2}</p>
              <p class="allergens">${product.allergens.join(', ')}</p>
            </div>
          </div>`;
      });
  
      // Chiudi il div della categoria
      categoryHTML += `</div>`;
  
      // Aggiungi il contenuto della categoria al contenitore principale
      menuContainer.innerHTML += categoryHTML;
    }
  }
  
