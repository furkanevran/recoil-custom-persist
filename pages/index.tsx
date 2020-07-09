import { useRecoilState } from 'recoil/dist/recoil.production'
import Link from 'next/link'
import cartAtom from '../atoms/cart'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Home() {
  const [items, setItems] = useState(null)

  const [cart, setCart] = useRecoilState(cartAtom)

  const addToCart = (item) => {
    setCart(cart.some(x => x.id === item.id) ?  cart.map(x => {
        if(x.id === item.id) {
          return {...x, count: x.count+1}
        }

        return x
    })
    : 
    [...cart, {...item, count: 1}])
  }

  useEffect(() => {
    axios.get('/api/items').then(r => setItems(r.data))
  }, [])

  return (
    <div>
      <Link href="/cart"><a>Go to cart</a></Link>
      <br></br>
      {items ? items.map(x => (
        <div key={x.id}>
          <button onClick={() => addToCart(x)}>{x.item}</button>
          <br></br>
        </div>
      )) : <div>Loading...</div>}
      
    </div>
  )
}
