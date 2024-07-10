import { create } from 'zustand';
import store from "./store.json"

export const  useProductStore=create((set,get)=>({

    productData:[store],
}))