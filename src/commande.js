export default class Commande {
  constructor() {
    let commande = localStorage.getItem('commande');
    if (commande === null) {
      this.commande = [];
    } else {
      this.commande = JSON.parse(commande);
    }
  }

  save() {
    localStorage.setItem('commande', JSON.stringify(this.commande));
  }

  add(product) {
    let foundProduct = this.commande.find((p) => p.id === product.id);
    if (foundProduct !== undefined) {
      foundProduct.quantity++;
    } else {
      product.quantity = 1;
      this.commande.push(product);
    }
    this.save();
  }

  remove(product) {
    this.commande = this.commande.filter((p) => p.id !== product.id);
    this.save();
  }

  changeQuantity(product, quantity) {
    let foundProduct = this.commande.find((p) => p.id === product.id);
    if (foundProduct !== undefined) {
      foundProduct.quantity += quantity;
      if (foundProduct.quantity <= 0) {
        this.remove(foundProduct);
      } else {
        this.save();
      }
    }
  }

  getNumberProduct() {
    let number = 0;
    for (let product of this.commande) {
      number += product.quantity;
    }
    return number;
  }
  getTotalPrice() {
    let total = 0;
    for (let product of this.commande) {
      total += product.quantity * product.price;
    }
    return total;
  }
}
