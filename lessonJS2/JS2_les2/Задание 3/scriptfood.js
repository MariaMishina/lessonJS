"use strict";

document.querySelector('.result').onclick = getResult;

function getResult() {
    const menu = document.getElementsByClassName('menu');
    let price = 0;
    let kkal = 0;
    for(let i = 0;i < menu.length;i++){
        if(menu[i].checked){
            price += parseFloat(menu[i].getAttribute('date-cost'));
            kkal += parseFloat(menu[i].getAttribute('date-kkal'));
        }
    }
    document.querySelector('.price').innerHTML = price;
    document.querySelector('.kkal').innerHTML = kkal;
}