import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
    persist(
        set => ({
            theme: 'bg-white text-black',
            dark: () => set(s => ({ theme: s.theme = 'bg-black text-white' })),
            light: () => set(s => ({ theme: s.theme = 'bg-white text-black' }))
        }), { name: 'theme' }
    )
)