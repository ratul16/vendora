import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    selectedProduct: {},
    myCart: []
  }),
  getters: {
    getSelectedProduct() {
      return this.selectedProduct;
    }
  },
  actions: {
    setProduct(item) {
      this.selectedProduct = item
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
})


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
}