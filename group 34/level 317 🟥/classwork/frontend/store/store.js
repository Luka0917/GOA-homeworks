import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const userData = set => ({
    user: null,
    setUser: user => set({ user })
});

export const useStore = create(
    persist(
        set => ({
            ...userData(set)
        }),
        { name: 'todo-list-data' } 
    )
);