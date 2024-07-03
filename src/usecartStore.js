import { create } from 'zustand';

const usecartStore = create((set, get) => ({
  data: Math.floor(0), // Initialize with a default value of 0

  // Function to add an item by the same price data
  addItemByPriceData: (priceData) => set((state) => ({
    data: Math.floor(Math.floor(state.data) + Math.floor( priceData))
  })),

  // Function to remove an item by the same price data
  removeItemByPriceData: (priceData) => set((state) => ({
    data: Math.floor(Math.floor(state.data) - Math.floor(priceData))
  })),

  // Computed property to get the total value (same as data in this case)
  getTotalValue: () => get().data,
}));

export default usecartStore;

  
  



