import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const api = 'http://localhost:3002';

const themeChange = set => ({
    theme: 'light',
    themeToggle: () => set(s => ({ theme: s.theme === 'light' ? 'dark' : 'light' }))
});

const userData = set => ({
    user: null,
    setUser: user => set({ user })
});

export const useStore = create(
    persist(
        set => ({
            ...userData(set),
            ...themeChange(set)
        }),
        { name: 'todo-list-data' } 
    )
);