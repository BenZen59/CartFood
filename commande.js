function saveCommande(commande) {
  localStorage.setItem('commande', JSON.stringify(commande));
}

function getCommande() {
  let commande = localStorage.getItem('commande');
  if (commande === null) {
    return [];
  } else {
    return JSON.parse(commande);
  }
}

function addCommande(product) {
  let commande = getCommande();
  let foundProduct = basket.find((p) => p.id === product.id);
  if (foundProduct !== undefined) {
    foundProduct.quantity++;
  } else {
    product.quantity = 1;
    commande.push(product);
  }
  saveCommande(commande);
}

function removeCommande(product) {
  let commande = getCommande();
  commande = commande.filter((p) => p.id !== product.id);
  saveCommande(commande);
}

function changeQuantity(product, quantity) {
  let commande = getCommande();
  let foundProduct = commande.find((p) => p.id === product.id);
  if (foundProduct !== undefined) {
    foundProduct.quantity += quantity;
    if (foundProduct.quantity <= 0) {
      removeCommande(foundProduct);
    }
  }

  saveCommande(commande);
}
