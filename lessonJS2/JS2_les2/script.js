"use strict";

class GoodsItem {
 constructor(title, price,img) {
 this.title = title;
 this.price = price;
 this.img = img;
}
 render() {
  return `<div class="goods-item">
  <img src="${this.img}"> 
  <h3>${this.title}</h3>
  <p>${this.price}</p>
  <button class="goods-button"> Купить </button>
  </div>`; 
 }
}

class GoodsList {
constructor() {
this.goods = [];
}
 fetchGoods() {
 this.goods = [
  { title: 'Shirt', price: 150, img:'img/photo.png'},
  { title: 'Socks', price: 50, img:'img/photo.png' },
  { title: 'Jacket', price: 350, img:'img/photo.png' },
  { title: 'Shoes', price: 250, img:'img/photo.png' },
 ];
  }

 render() {
  let listHtml = '';
  this.goods.forEach(good => {
  const goodItem = new GoodsItem(good.title, good.price,good.img);
  listHtml += goodItem.render();
 });
 document.querySelector('.goods-list').innerHTML = listHtml;
 }

 getSumBasket() {
  let sum = 0;
  this.goods.forEach(good => {
   sum += good.price; 
  });
  alert(`Итого  ${sum} рублей`);
 }
}
const list = new GoodsList();
list.fetchGoods();
list.render();
list.getSumBasket();

//Класс корзина
class Basket{
  constructor () {
 }

//Метод добавления товара в корзину
addBasketItem() {
  
 }
//Метод удаления товара из корзины
removeBasketItem() {

 }

// Верстка списка всех товаров
render(){

 }
}
// Класс товар корзины
class productBasket {

  //Верстка одного товара
  render() {

  }
}

    