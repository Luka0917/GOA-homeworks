import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const themeSlice = set => ({
    theme: "dark",
    toggleTheme: () => set(s => ({ theme: s.theme === 'light' ? 'dark' : 'light' }))
})

const languageSlice = set => ({
    lang: "GEO",
    toggleLang: () => set(s => ({ lang: s.lang === 'GEO' ? 'ENG' : 'GEO' }))
})

export const useStore = create(
    set => ({
        ...themeSlice(set),
        ...languageSlice(set)
    })
)