import { create } from 'zustand';

const useStore = create((set) => ({
  data: [],
  
  // Function to set data ensuring no duplicates
  setData: (newData) => set((state) => {
    // Combine current data and new data
    const combinedData = Array.isArray(newData) ? [...state.data, ...newData] : [...state.data, newData];

    // Filter out duplicates based on the unique items
    const uniqueData = combinedData.filter((item, index, self) => 
      index === self.indexOf(item)
    );

    return { data: uniqueData };
  }),
  deleteData: (identifier) => set((state) => {
    const filteredData = state.data.filter(item => item !== identifier);
    return { data: filteredData };
  }),

  resetData: () => set({ data: 0 }),


  cred: true,
  setCred: (newCred) => set({ cred: newCred }),


  name:'',
  email: '',
  password: '',
  setName: (name) => localStorage.setItem(set({ name })),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
}));

export default useStore;