import { atom } from 'recoil/dist/recoil.production'

const cartAtom = atom({
    key: 'cart',
    default: [{id:1, item:'Blue T-Shirt', count: 1}]
})

export default cartAtom