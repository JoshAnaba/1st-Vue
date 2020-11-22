var app = new Vue({
    el : '#app' ,
    data: {
        product : 'Socks' ,
        color: 'blue',
        selectedVariant: 0,
        link: 'vue2.html' ,
        brand: 'Vue Mastery',
        details : ['80% cotton' , '20% polyester' , 'Gender-neutral'],
        variants : [
            {
                variantId : 100,
                variantColor: 'blue',
                variantImage: 'img/blue-sock.png',
                variantQty : 0,
            },
            {
                variantId : 101,
                variantColor: 'green',
                variantImage: 'img/green-sock.png',
                variantQty: 100,
            }
            
        ],

        sizes: ['small','Large', 'XL' , 'XXL'],
        cart : 0,
        checkBackLater: {
            textDecoration: 'line-through',
        }
    },
    methods: {
        addToCart : function() {
              this.cart ++
        },

        removeFromCart (){
            if(this.cart !== 0){
                this.cart --
            }
        },
        updateProductImage(index) {
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        onSale(){
            return this.variants[this.selectedVariant].variantQty
        }
    }
})

