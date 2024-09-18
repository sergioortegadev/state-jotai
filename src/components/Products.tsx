import { useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
import Card from "./Card";
import Cart from "./Cart";
import {
  itemsNumber,
  handleAddToCart,
  remove,
  addQuantity,
  subQuantity,
  handleEscape,
  updateTotal,
} from "../utils/cartManager";
import { useAtom } from "jotai";
import { prodsAtom, cartItemsAtom, totalAtom, cartItemsNumberAtom, showCartAtom } from "../store/cartItems";
import { fetchProds } from "../utils/fetchData";

const Products = () => {
  const [prods, setProds] = useAtom(prodsAtom);
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);
  const [cartItemsNumber, setCartItemsNumber] = useAtom(cartItemsNumberAtom);
  const [showCart, setShowCart] = useAtom(showCartAtom);
  const [total, setTotal] = useAtom(totalAtom);

  useEffect(() => {
    setCartItemsNumber(itemsNumber(cartItems));
    updateTotal(cartItems, setTotal);
  }, [cartItems]);

  useEffect(() => {
    handleEscape(setShowCart);
  }, [showCart]);

  useEffect(() => {
    (async () => setProds(await fetchProds()))();
  }, []);

  return (
    <main>
      <h1 className="title main">Mini e-commerce</h1>
      <div className="title-sec-logo">
        <img className="logo-state-manager" src="./src/assets/ji-logo.png" alt="State manager logo" />
        <h2 className="title secondary">
          <a href="https://github.com/sergioortegadev/state-zustand" target="_blank" rel="noreferrer noopener">
            Jōtai
          </a>{" "}
          Version
        </h2>
      </div>
      <div className="cart-icon" onClick={() => setShowCart(!showCart)}>
        <IoCartOutline />
        {cartItems.length === 0 ? "" : <p className="cart-quantity">{cartItemsNumber}</p>}
      </div>
      <Cart showCart={showCart} addQuantity={addQuantity} subQuantity={subQuantity} remove={remove} total={total} />
      <div className="cards">
        {prods?.map((prod) => (
          <Card key={prod.id} prod={prod} addToCart={() => handleAddToCart(prod.id, prod, cartItems, setCartItems)} />
        ))}
      </div>
    </main>
  );
};

export default Products;
