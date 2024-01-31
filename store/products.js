import { defineStore } from "pinia";
import { apiLoadProducts } from '../server/api/products'

export const useProductStore = defineStore('products', {
  state: () => {
    return {
      products: {},
      //ids: [],
    };
  },
  getters: {
    // list(){
    //   return this.ids.map(i => this.products[i])
    // },
    // loaded(){
    //   return this.ids.length > 0
    // }
  },
  actions: {
    async loadProducts() {
      if (this.loaded) return
      try {
        this.loading = true
        this.products = await apiLoadProducts()
        this.loading = false
      } catch(error) {
        console.error('Error fetching tasks:', error);
      }
    }
  }
})