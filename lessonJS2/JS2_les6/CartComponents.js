Vue.component("cart",{
  props: ['cartItems', 'img', 'visibility'],
  tamplate:
    `<div class = 'cart-block' v-show ='visibility'>
        <cart-item v-for="item of cartItems" :key="item.id_product" :img='img' :cart-item = 'item'>
        </cart-item>
    </div>`
});

Vue.component("cart-item",{
    props: [ 'img','cartItems'],
    tamplate:
    `<div class = 'cart-item'> 
       <div class="product-bio">
            <img :src = "imgCart" alt="Some img">
            <div class="product-desc">
                <div class="product-title">{{ item.product_name }}</div>
                <div class="product-quantity">Quantity: {{ item.quantity }}</div>
                <div class="product-single-price">$ {{ item.price }} each</div>
            </div>
        </div>
                <div class="right-block">
                    <div class="product-price">{{item.quantity*item.price}}</div>
                    <button class="del-btn" @click="root.remove(cartItems)>x</button>
                </div>
     </div>`
})

