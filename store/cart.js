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
    isProductInCart: (state) => (productId) => {
      return !!state.cart[productId];
    },
    // isProductInCart: (state) => {
    //   //return Object.keys(state.cart).includes(productId);
    //   return (productId) => Object.keys(state.cart).includes(productId)
    // },
    total(){
      const productsStore = useProductStore()
      // return Object.keys(this.cart).reduce((acc, id) => {
      //   return acc + productsStore.products[id].price * this.cart[id].quantity
      // }, 0)
      const totalPrice = Object.keys(this.cart).reduce((acc, id) => {
        //const product = productsStore.products.find((p) => p.id === id);
        return acc + productsStore.products[id].price * this.cart[id].quantity;
      }, 0);
      //Number.parseFloat(x).toFixed(2);
      // const formatter = new Intl.NumberFormat('en-US', {
      //   style: 'currency',
      //   currency: 'USD',
      //   minimumFractionDigits: 2,
      // });
      //return formatter.format(totalPrice);
      return formatPrice(totalPrice)
      //return Number.parseFloat(totalPrice).toFixed(2);
    },
    productsTotal() {
      return this.formattedCart.length
      // return Object.keys(this.cart).reduce((acc, id) => {
      //   return acc + this.cart[id].quantity;
      // }, 0);
    },
    formattedCart(){
      const productsStore = useProductStore()
      //if (!productsStore.loaded) return []
      if (!productsStore.products || !productsStore.products.length) {
        return [];
      }
      
      // return Object.keys(this.cart).map((productId) => {
      //   const product = this.cart[productId]

      //   return {
      //     id: product.productId,
      //     image: productsStore.products.find((p) => p.id === product.productId).image,
      //     title: productsStore.products.find((p) => p.id === product.productId).title,
      //     price: productsStore.products.find((p) => p.id === product.productId).price,
      //     quantity: product.quantity,
      //     cost:
      //       product.quantity *
      //       productsStore.products.find((p) => p.id === product.productId).price,
      //   }
      // })
      return Object.keys(this.cart).map((productId) => {
        const product = this.cart[productId];
        const foundProduct = productsStore.products.find((p) => p.id === product.productId);
  
        if (!foundProduct) {
          return null; // or handle missing product data appropriately
        }
  
        return {
          id: foundProduct.id,
          image: foundProduct.image,
          title: foundProduct.title,
          price: foundProduct.price,
          quantity: product.quantity,
          cost: product.quantity * foundProduct.price,
        };
      }); 
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