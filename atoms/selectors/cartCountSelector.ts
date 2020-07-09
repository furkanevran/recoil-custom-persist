import { selector } from "recoil/dist/recoil.production";
import cartAtom from "../cart";

const cartCountSelector = selector({
    key: 'cartCountSelector',
    get: ({get}) => {
      const cart = get(cartAtom);

      return cart.reduce((total, curr) => total + curr.count, 0);
    },
});

export default cartCountSelector