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
    add: item => set(s => ({ cart: [...s.cart, item] })),
    remove: index => set(s => ({ cart: s.cart.filter((_, i) => i !== index) })),
    priceCount: 0,
    priceInc: index => set(s => ({ priceCount: s.priceCount += s.cart.filter((_, i) => index === i).price })) //! does not Work!
})

export const useStore = create(
    persist(
        set => ({
            ...words(set),
            ...counter(set),
            ...themeChange(set),
            ...shoppingCart(set)
        })
    ), {name: 'data'}
)