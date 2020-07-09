import { useRecoilValue } from "recoil/dist/recoil.production"
import cartCountSelector from '../atoms/selectors/cartCountSelector'

function Header() {
    const cartCount = useRecoilValue(cartCountSelector)
    
    return (
        <header>
            {cartCount}
        </header>
    )
}

export default Header