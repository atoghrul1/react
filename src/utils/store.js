// src/store.js
import {create} from 'zustand'

const useStore = create(set => ({
  products: [],
  count: 0,  // Add a count state
  addProduct: (newProduct) => set(state => {
    const existingProductIndex = state.products.findIndex(p => p.id === newProduct.id);
    if (existingProductIndex >= 0) {
      // Product exists, increase quantity
      const updatedProducts = state.products.map((product, index) => {
        if (index === existingProductIndex) {
          return { ...product, qty: product.qty + newProduct.qty };
        }
        return product;
      });
      return { products: updatedProducts };
    } else {
      // Product does not exist, add new
      return { products: [...state.products, { ...newProduct, qty: newProduct.qty || 1 }] };
    }
  }),
  increaseQuantity: (id, amount = 1) => set(state => ({
    products: state.products.map(product => product.id === id ? { ...product, qty: product.qty + amount } : product)
  })),
  decreaseQuantity: (id, amount = 1) => set(state => ({
    products: state.products.reduce((acc, product) => {
      if (product.id === id) {
        const newQty = product.qty - amount;
        if (newQty > 0) {
          acc.push({ ...product, qty: newQty });
        }
      } else {
        acc.push(product);
      }
      return acc;
    }, [])
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
