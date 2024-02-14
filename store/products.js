import { defineStore } from "pinia";
import { apiLoadProducts, apiLoadProductsByCategory, sortProductsByTitle } from '../server/api/products'

export const useProductStore = defineStore('products', {
  state: () => {
    return {
      products: {},
      //selectedCategories: [],
    };
  },
  getters: {
    // sortProducts(sortedValue) {
    //   return Object.values(this.products).sort((a, b) => {
    //     if (sortedValue === 'title') {
    //       if (a.title < b.title) {
    //         return -1;
    //       }
    //       if (a.title > b.title) {
    //         return 1;
    //       }
    //       return 0;
    //     }
    //     if (sortedValue === 'price') {
    //       return a.price - b.price;
    //     }
    //     return this.products
    //   });
    // },
    sortByPrice() {
     return Object.values(this.products).sort((a, b) => {
        return (a.price > b.price) ? 1 : -1
      })
    },
    // sortByName() {
    //   return Object.values(this.products).sort((a, b) => {
    //     if (a.title < b.title) {
    //       return -1;
    //     }
    //     if (a.title > b.title) {
    //       return 1;
    //     }
    //     return 0;
    //   });
    // },
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
    },
    async loadProductsByCategory(category) {
      if (this.loaded) return
      try {
        this.loading = true
        this.products = await apiLoadProductsByCategory(category)
        this.loading = false
      } catch(error) {
        console.error('Error fetching tasks:', error);
      }
    },
    // async sortByTitle(){
    //   try {
    //     this.loading = true
    //     this.products = await sortProductsByTitle()
    //     this.loading = false
    //   } catch(error) {
    //     console.error('Error fetching tasks:', error);
    //   }
    // },
    // sortProducts(sortedValue) {
    //   return Object.values(this.products).sort((a, b) => {
    //     if (sortedValue === 'title') {
    //       if (a.title < b.title) {
    //         return -1;
    //       }
    //       if (a.title > b.title) {
    //         return 1;
    //       }
    //       return 0;
    //     }
    //     if (sortedValue === 'price') {
    //       return a.price - b.price;
    //     }
    //     return this.products
    //   });
    // },

    // addSelectedCategory(categoryToAdd){
    //   this.selectedCategories.push(categoryToAdd)
    //   console.log(`The categories state is ${this.selectedCategories}`)
    // }
  }
})