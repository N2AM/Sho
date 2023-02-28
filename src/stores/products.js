import { defineStore } from 'pinia'
import { getProducts } from '../services/http/http.service'


export const useProductsStore = defineStore('products', {
  state: () => ({
    products: []
  }),

  getters: {
    productsList(state) {
      return state.products;
    }
  },

  actions: {
    async getProducts() {
      try {
        this.products = await getProducts();
      } catch (error) {
        console.log(error)
      }
    },
  },
});

