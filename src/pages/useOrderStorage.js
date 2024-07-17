import { create } from 'zustand';

export const useOrderStorage = create((set, get) => ({
  orderData: {
    ProductId: [],
    ProductName: [],
    ProductQty: [],
    ProductImg: [],
    ProductPrice: []
  },
  userData: {
    UserName: '',
    UserStreetAddress: '',
    UserFloorNo: '',
    UserCity: '',
    UserPhoneNumber: '',
    UserMail: ''
  },
  setProductId: (value) => set(state => ({
    orderData: {
      ...state.orderData,
      ProductId: [...state.orderData.ProductId, value]
    }
  })),
  setProductName: (value) => set(state => ({
    orderData: {
      ...state.orderData,
      ProductName: [...state.orderData.ProductName, value]
    }
  })),
  setProductQty: (value) => set(state => ({
    orderData: {
      ...state.orderData,
      ProductQty: [ ...state.orderData.ProductQty ,value]
    } 
  })),
  setProductImg: (value) => set(state => ({
    orderData: {
      ...state.orderData,
      ProductImg: [...state.orderData.ProductImg, value]
    }
  })),
  setProductPrice: (value) => set(state => ({
    orderData: {
      ...state.orderData,
      ProductPrice: [...state.orderData.ProductPrice, value]
    }
  })),
  getProductId: () => get().orderData.ProductId,
  getProductName: () => get().orderData.ProductName,
  getProductQty: () => get().orderData.ProductQty,
  getProductImg: () => get().orderData.ProductImg,
  getProductPrice: () => get().orderData.ProductPrice,



  setUserName: (value) => set(state => ({
    userData: {
      ...state.userData,
      UserName: [...state.userData.UserName, value]
    }
  })),
  setUserStreetAddress: (value) => set(state => ({
    userData: {
      ...state.userData,
      UserStreetAddress: [...state.userData.UserStreetAddress, value]
    }
  })),
  setUserFloorNo: (value) => set(state => ({
    userData: {
      ...state.userData,
      UserFloorNo: [...state.userData.UserFloorNo, value]
    }
  })),
  setUserCity: (value) => set(state => ({
    userData: {
      ...state.userData,
      UserCity: [...state.userData.UserCity, value]
    }
  })),
  setUserPhoneNumber: (value) => set(state => ({
    userData: {
      ...state.userData,
      UserPhoneNumber: [...state.userData.UserPhoneNumber, value]
    }
  })),
  setUserMail: (value) => set(state => ({
    userData: {
      ...state.userData,
      UserMail: [...state.userData.UserMail, value]
    }
  })),
  // User Data Getters
  getUserName: () => get().userData.UserName,
  getUserStreetAddress: () => get().userData.UserStreetAddress,
  getUserFloorNo: () => get().userData.UserFloorNo,
  getUserCity: () => get().userData.UserCity,
  getUserPhoneNumber: () => get().userData.UserPhoneNumber,
  getUserMail: () => get().userData.UserMail


}));

// Example usage:
// const { setProductName, getProductName } = useOrderStorage();
// setProductName('New Product');
// const productNames = getProductName();
