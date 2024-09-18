import { Product } from "../types";

const itemsNumber = (cartItems: Product[]) => {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.quantity ?? 0;
  });
  return total;
};

const handleAddToCart = (
  id: number,
  prod: Product,
  cartItems: Product[],
  setCartItems: (cartItems: Product[]) => void
) => {
  const newItem = prod;
  if (!newItem) return;

  const itemAlreadyInCart = cartItems.find((item) => item.id === newItem.id);
  if (!itemAlreadyInCart) {
    setCartItems([...cartItems, { ...newItem, quantity: 1 }]);
  } else {
    const newCartItems = cartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: (item.quantity ?? 0) + 1 } : item
    );
    setCartItems(newCartItems);
  }
};

const remove = (id: number, cartItems: Product[], setCartItems: (cartItems: Product[]) => void) => {
  const itemsRemaining = cartItems.filter((item) => item.id !== id);

  setCartItems(itemsRemaining);
};

const addQuantity = (
  id: number,
  cartItems: Product[],
  setCartItems: (cartItems: Product[]) => void,
  setCartItemsNumber: (total: number) => void
) => {
  const item = cartItems.find((item) => item.id === id);
  if (!item) return;

  item.quantity = (item.quantity ?? 0) + 1;
  setCartItems([...cartItems]);
  setCartItemsNumber(itemsNumber(cartItems));
};

const subQuantity = (
  id: number,
  cartItems: Product[],
  setCartItems: (cartItems: Product[]) => void,
  setCartItemsNumber: (total: number) => void
) => {
  const item = cartItems.find((item) => item.id === id);
  if (!item) return;

  if (item.quantity === 1 || item.quantity === 0) {
    remove(id, cartItems, setCartItems);
  } else {
    item.quantity = (item.quantity ?? 0) - 1;
    setCartItems([...cartItems]);
  }
  setCartItemsNumber(itemsNumber(cartItems));
};
const handleEscape = (setShowCart: (showCart: boolean) => void) => {
  //const setShowCart = useCartItems.getState().setShowCart;

  const handleEscapePress = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setShowCart(false);
      /*  document.removeEventListener("keydown", handleEscapePress); */
    }
  };
  document.addEventListener("keydown", handleEscapePress);
  return () => document.removeEventListener("keydown", handleEscapePress);
};

const updateTotal = (cartItems: Product[], setTotal: (total: number) => void) => {
  setTotal(cartItems.reduce((acc, item) => acc + item.price * (item.quantity ?? 1), 0));
};

export { itemsNumber, handleAddToCart, remove, addQuantity, subQuantity, handleEscape, updateTotal };
