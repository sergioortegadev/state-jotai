import { Product } from "../types";
import { useAtom } from "jotai";
import { cartItemsAtom, cartItemsNumberAtom } from "../store/cartItems";

const CartRow = ({
  item,
  addQuantity,
  subQuantity,
  remove,
}: {
  item: Product;
  addQuantity: (
    id: number,
    cartItems: Product[],
    setCartItems: (cartItems: Product[]) => void,
    setCartItemsNumber: (total: number) => void
  ) => void;
  subQuantity: (
    id: number,
    cartItems: Product[],
    setCartItems: (cartItems: Product[]) => void,
    setCartItemsNumber: (total: number) => void
  ) => void;
  remove: (id: number, cartItems: Product[], setCartItems: (cartItems: Product[]) => void) => void;
}) => {
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);
  const [, setCartItemsNumber] = useAtom(cartItemsNumberAtom);

  return (
    <div className="cart-row">
      <p className="cart-row-title">{item.title}</p>
      <p className="cart-row-price">$ {item.price}</p>
      <div className="cart-row-quantity">
        <button onClick={() => addQuantity(item.id, cartItems, setCartItems, setCartItemsNumber)}>➕</button>
        <p>{item.quantity}</p>
        <button onClick={() => subQuantity(item.id, cartItems, setCartItems, setCartItemsNumber)}>➖</button>
      </div>

      <p className="cart-row-total">$ {(item.price * (item.quantity ?? 1)).toFixed(2)}</p>
      <button onClick={() => remove(item.id, cartItems, setCartItems)}>❌</button>
    </div>
  );
};

export default CartRow;
