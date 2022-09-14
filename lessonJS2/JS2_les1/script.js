"use strict";


const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
 ];
const renderGoodsItem = (product,img = 'img/photo.png' ) => {
  return `<div class="goods-item">
   <img src="${img}"> 
   <h3>${product.title}</h3>
   <p>${product.price}</p>
   <button class="goods-button"> Купить </button>
  </div>`;
};
const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
}
renderGoodsList(goods);
    