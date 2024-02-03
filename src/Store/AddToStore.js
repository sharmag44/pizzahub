import { create } from 'zustand';

const State = create((set) => ({
    items: [],
    addItem: (item) => {
        set((state) => ({ items: [...state.items, item] }));
    },
    removeItem: (itemId) => {
        set((state) => ({
            items: state.items.filter((item) => item.id !== itemId),
        }));
    },
}));

export default State;