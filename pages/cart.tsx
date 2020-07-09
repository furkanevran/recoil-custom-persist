import { useRecoilState } from 'recoil/dist/recoil.production'
import Link from 'next/link'
import cartAtom from '../atoms/cart'

export default function Cart() {
  const [cart, setCart] = useRecoilState(cartAtom)

  const deleteOne = (id) => {
    setCart(cart.map(x => {
        if(x.id === id) {
            return {...x, count: x.count - 1}
        }

        return x
    }).filter(x => x.count > 0))
}

  const deleteAll = (id) => {
      setCart(cart.filter(x => {
          if(x.id === id) return false

          return true
      }))
  }

  const addOne = (id) => {
      setCart(cart.map(x => {
          if(x.id === id) {
            return {...x, count: x.count + 1}
          }

          return x
      }))
  }

  return (
    <div>
        <Link href="/"><a>Homepage</a></Link>
      {cart.map(x => (
          <div key={x.item}>
              <span>Id: {x.id}</span>
              <br></br>
              <span>Name: {x.item}</span>
              <br></br>
              <span>Count: {x.count}</span>
              <br></br>
              <button onClick={() => deleteOne(x.id)}>-</button>
              <button onClick={() => addOne(x.id)}>+</button>
              <button onClick={() => deleteAll(x.id)}>Remove</button>
          </div>
      ))}

      <style jsx>{`
      div {
          margin-bottom: 20px;
      }
      `}</style>
    </div>
  )
}
