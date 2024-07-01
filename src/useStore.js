import { create } from 'zustand';

// Utility functions to interact with localStorage
const loadState = (key, defaultValue) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : defaultValue;
};

const saveState = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const useStore = create((set) => ({
  data: loadState('data', []),
  cred: loadState('cred', true),
  name: loadState('name', ''),
  email: loadState('email', ''),
  password: loadState('password', ''),

  // Function to set data ensuring no duplicates
  setData: (newData) => set((state) => {
    // Combine current data and new data
    const combinedData = Array.isArray(newData) ? [...state.data, ...newData] : [...state.data, newData];

    // Filter out duplicates based on the unique items
    const uniqueData = combinedData.filter((item, index, self) => 
      index === self.indexOf(item)
    );

    saveState('data', uniqueData); // Save to local storage
    return { data: uniqueData };
  }),

  setCred: (newCred) => set(() => {
    saveState('cred', newCred); // Save to local storage
    return { cred: newCred };
  }),

  setName: (name) => set(() => {
    saveState('name', name); // Save to local storage
    return { name };
  }),

  setEmail: (email) => set(() => {
    saveState('email', email); // Save to local storage
    return { email };
  }),

  setPassword: (password) => set(() => {
    saveState('password', password); // Save to local storage
    return { password };
  }),
}));

export default useStore;