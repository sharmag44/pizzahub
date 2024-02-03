import { create } from 'zustand';

export const addToCard = create((set) => ({
    items: [],
    total: 0,
    addItem: (item) => set((state) => ({ items: [...state.items, item] })),

}))


