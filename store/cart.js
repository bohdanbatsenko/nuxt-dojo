import { defineStore } from 'pinia';
import { useProductStore } from './products'

export const useCartStore = defineStore('cart', {
  state: () => ({
      cart: {},
  }),
  getters: {
    count() {
      return Object.keys(this.cart).reduce((acc, id) => {
        return acc + this.cart[id].quantity
      }, 0)
    },
    total(){
      const productsStore = useProductStore()
      return Object.keys(this.cart).reduce((acc, id) => {
        return acc + productsStore.products[id].price * this.cart[id].quantity
      }, 0)
    },
    productsTotal() {
      return Object.keys(this.cart).reduce((acc, id) => {
        return acc + this.cart[id].quantity;
      }, 0);
    },
    formattedCart(){
      const productsStore = useProductStore()
      //if (!productsStore.loaded) return []
      
      return Object.keys(this.cart).map((productId) => {
        const product = this.cart[productId]
        //const  products = productsStore.products
        console.log(`Product id is ${productId}`);
        return {
          id: product.productId,
          image: productsStore.products.find((p) => p.id === product.productId).image,
          name: productsStore.products.find((p) => p.id === product.productId).name,
          price: productsStore.products.find((p) => p.id === product.productId).price,
          quantity: product.quantity,
          cost:
            product.quantity *
            productsStore.products.find((p) => p.id === product.productId).price,
        }
      })

    }
  },
  actions: {
    addToCart(productId) {
      //this.cart.push({...product, quantity: 1})
      if (this.cart.hasOwnProperty(productId)) {
        this.cart[productId] = {
          productId,
          quantity: this.cart[productId].quantity + 1,
        };
      } else {
        this.cart[productId] = {
          productId,
          quantity: 1,
        };
      }
    },
    remove(product){
      if (!this.cart[product]) return

      this.cart[product].quantity -= 1
      if (this.cart[product].quantity === 0) {
        delete this.cart[product]
      }
    },
    removeProduct(product) {
      delete this.cart[product]
    }
  }
})