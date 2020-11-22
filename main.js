var app = new Vue({
    el : '#app' ,
    data: {
        product : 'Socks' ,
        color: 'blue',
        image: 'img/green-sock.png' ,
        link: 'vue2.html' ,
        onSale : true ,
        details : ['80% cotton' , '20% polyester' , 'Gender-neutral'],
        variants : [
            {
                variantId : 100,
                variantColor: 'blue',
                variantImage: 'img/blue-sock.png'
            },
            {
                variantId : 101,
                variantColor: 'green',
                variantImage: 'img/green-sock.png'
            }
            
        ],

        sizes: ['small','Large', 'XL' , 'XXL'],
        cart : 0,
    },
    methods: {
        addToCart : function() {
              this.cart ++
        },

        removeFromCart : function(){
            if(this.cart !== 0){
                this.cart --
            }
        },
        updateProductImage: function (variantImage) {
            this.image = variantImage
        }
    }
})