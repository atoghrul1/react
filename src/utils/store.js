// src/store.js
import {create} from 'zustand'

const useStore = create(set => ({
  products: [],
  count: 0,  // Add a count state
  addProduct: (product) => set(state => ({ 
    products: [...state.products, product],
    count: state.count + 1  // Increment count when adding a product
  })),
  removeProduct: (id) => set(state => ({
    products: state.products.filter(p => p.id !== id),
    count: state.count - 1  // Decrement count when removing a product
  })),
  isOffcanvasOpen: true,  // State to track if the modal is open
  openOffcanvas: () => set({ isOffcanvasOpen: true }),
  closeOffcanvas: () => set({ isOffcanvasOpen: false }),
}));

export default useStore;
