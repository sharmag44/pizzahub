import { create } from 'zustand';

export const addToCart = create((set) => ({
    items: [],
    addItem: (item) => {
        try {
            if (!item.name || !item.img || !item.price) {
                throw new Error('Invalid item properties: name, img, and price are required.');
            }
            set((state) => ({ items: [...state.items, item] }));
        } catch (error) {
            console.error('Error adding item:', error);
        }
    },
}));