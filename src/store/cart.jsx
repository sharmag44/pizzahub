import { create } from 'zustand';

export const addToCard = create((set) => ({
    items: [],
    addItem: (item) => set((state) => ({ items: [...state.items, item] })),
}))


