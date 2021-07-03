var product = new Vue ({
    el: '#app', 
    data: {
        product: 'Socks',
        image: '../image/vmSocks-blue-onWhite.jpg',
        inStock: false,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: '../image/vmSocks-green-onWhite.jpg',
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: '../image/vmSocks-blue-onWhite.jpg'
            }
        ],
    cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
    
})
