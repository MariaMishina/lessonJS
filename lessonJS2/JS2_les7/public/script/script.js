const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const LOCALHOST_API = 'http://localhost:3000';

let app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalog.json',
        products: [],
        imgCatalog: '/catalog.json',
        cartShown: false,
        userSearch: '',
        filtered: []
    },
    components: {cart, products, filter_el},
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
        },
        addProduct(product){
            console.log(product.id_product);
        },
        
    },
    mounted(){
        console.log (this)
    }
})

