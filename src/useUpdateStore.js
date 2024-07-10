import { create } from "zustand";

export const useUpdateStore=create((set)=>({

    dataUp:[],
    setDataUp: (newData) => set((state) => {
        // Combine current data and new data
        const combinedData = Array.isArray(newData) ? [...state.dataUp, ...newData] : [...state.dataUp, newData];
    
        // Filter out duplicates based on the unique items
        const uniqueData = combinedData.filter((item, index, self) => 
          index === self.indexOf(item)
        );
    
        return { dataUp: uniqueData };
      }),   
      deleteDataUp: (identifier) => set((state) => {
        const filteredData = state.dataUp.filter(item => item !== identifier);
        return { dataUp: filteredData };
      }),
      
}))