import { createContext, useEffect, useState } from "react";
import AddedToCart from "../components/AddedToCart";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const addProductToCart = (product) => {
    if (cart.hasOwnProperty(product.id)) {
      if(product.quantity >= product.stock) return

      setCart({
        ...cart,
        [product.id]: {
          ...product,
          quantity: product.quantity + 1,
        },
      });
      return;
    }

    setCart({
      ...cart,
      [product.id]: {
        ...product,
        quantity: 1,
      },
    });
  };

  const removeProductFromCart = (product, definitive) => {
    if (
      cart.hasOwnProperty(product.id) &&
      cart[product.id].quantity - 1 > 0 &&
      !definitive
    ) {
      setCart({
        ...cart,
        [product.id]: {
          ...product,
          quantity: product.quantity - 1,
        },
      });
      return;
    }

    delete cart[product.id];
    setCart({
      ...cart,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addProductToCart,
        removeProductFromCart,
        showCart,
        setShowCart,
        showMessage,
        setShowMessage,
      }}
    >
      {showMessage && <AddedToCart />}
      {children}
    </CartContext.Provider>
  );
}
