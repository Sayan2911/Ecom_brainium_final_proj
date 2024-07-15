import { create } from 'zustand';


const initialState = {

  userDetails: {
    name: '',
    streetAddress: '',
    floorApartmentNo: '',
    townCity: '',
    phoneNumber: '',
    emailAddress: '',
  },
  paymentDetails: {
    cvc: '',
    expiry: '',
    name: '',
    number: '',
  },
};

// Create the store
export const useInvoice = create((set, get) => ({
  ...initialState,
 
  setUserDetails: (details) => set((state) => ({
    userDetails: { ...state.userDetails, ...details },
  })),
  setPaymentDetails: (details) => set((state) => ({
    paymentDetails: { ...state.paymentDetails, ...details },
  })),
  resetUserDetails: () => set({ userDetails: initialState.userDetails }),
  resetPaymentDetails: () => set({ paymentDetails: initialState.paymentDetails }),
}));
