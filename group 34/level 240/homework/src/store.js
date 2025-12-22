import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const words = set => ({
    wordsArr: [],
    addWord: newWord => set(s => ({ wordsArr: [...s.wordsArr, newWord] }))
})

const counter = set => ({
    count: 0,
    inc: () => set(s => ({ count: s.count += 1 })),
    dec: () => set(s => ({ count: s.count -= 1 })),
    res: () => set(s => ({ count: s.count = 0 }))
})

const themeChange = set => ({
    theme: 'light',
    toggle: () => set(s => ({ theme: s.theme === 'light' ? 'dark' : 'light' }))
})

const shoppingCart = set => ({
    cart: [],
    priceCount: 0,
    add: item => set(s => ({ cart: [...s.cart, item], priceCount: s.priceCount + item.price })),
    remove: index => set(s => ({ cart: s.cart.filter((_, i) => i !== index), priceCount: s.priceCount - s.cart[index].price })),
})

const noteApp = set => ({
    notes: [],
    addNote: note => set(s => {
        const date = new Date();
        const month = date.getMonth() + 1;
        const day = date.getDay();
        const year = date.getFullYear();
        const hour = date.getHours();
        const minute = date.getMinutes();
        return {
            notes: [...s.notes, { note, date: `${month}/${day}/${year} --- ${hour}:${minute}` }]
        }
    }),
    removeNote: index => set(s => ({ notes: s.notes.filter((_, i) => i !== index) }))
})

export const useStore = create(
    persist(
        set => ({
            ...words(set),
            ...counter(set),
            ...themeChange(set),
            ...shoppingCart(set),
            ...noteApp(set)
        })
    ), {name: 'data'}
)