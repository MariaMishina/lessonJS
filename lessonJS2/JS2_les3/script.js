"use strict";

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsList {
  constructor(container = '.goods-list') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._getProducts()
      .then(data => {
      this.goods = [...data];
      this.render()
      });
  }
 _getProducts() {
   return fetch(`${API}/catalogData.json`)
     .then(result => result.json())
     .catch(error => {
     console.log(error);
     })
 }
 Sum() {
   return this.allProducts.reduce((accum, item) => accum += item.price, 0);
 }
 render() {
  const block = document.querySelector(this.container);
    for (let product of this.goods) {
    const productObj = new GoodsItem(product);
    this.allProducts.push(productObj);
    block.insertAdjacentHTML('beforeend', productObj.render());
    }

 }
}

class GoodsItem {
  constructor(product, img = 'img/photo.png') {
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id_product;
    this.img = img;
  }
 render() {
    return `<div class="goods-item data-id="${this.id}">
           <img src="${this.img}"> 
            <h3>${this.title}</h3>
            <p>${this.price}</p>
            <button class="goods-button"> Купить </button>
            </div>`; 
 }
}

let list = new GoodsList();

class Basket {
  constructor(container = '.cart_basket') {
    this.container = container;
    this.goods = [];
    this._clickBasket();
    this._getBasketItem()
        .then(data => {
        this.goods = [...data.contents];
        this.render()
        });
  }

 _getBasketItem() {
    return fetch(`${API}/getBasket.json`)
        .then(result => result.json())
        .catch(error => {
        console.log(error);
        })
 }

 render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
    const productObj = new BasketItem();
    block.insertAdjacentHTML('beforeend', productObj.render(product));
    }
 }

 _clickBasket() {
    document.querySelector(".cart-button").addEventListener('click', () => {
    document.querySelector(this.container).classList.toggle('invisible');
    });
 }
}

class BasketItem {
  render(product) {
    return `<div class="basket_box" data-id="${product.id_product}">
            <div class="product_img">
            <img src="${product.img}" alt="image">
            <div class="product_info">
            <p class="product_title">${product.product_name}</p>
            <p class="product_quantity">Quantity: ${product.quantity}</p>
            <p class="product_one_price">$${product.price} each</p>
            </div>
            </div>
            <div class="right_box">
            <p class="product_price">$${product.quantity * product.price}</p>
            <button class="del_button" data-id="${product.id_product}">&times;</button>
            </div>
        </div>`
  }
}

let bask = new Basket();