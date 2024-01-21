import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { cart, setShowCart } = useContext(CartContext);

  return (
    <section
      onClick={() => setShowCart(false)}
      className="w-full min-h-screen bg-black/20 fixed left-0 top-0 z-[80] backdrop-blur-sm duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-1/4 h-screen bg-zinc-800 shadow-lg shadow-white/20 animate-fade-right animate-duration-200 flex flex-col"
      >
        <h2 className="text-center font-semibold text-3xl mt-8">
          Carrito ({Object.keys(cart).length})
        </h2>
        <button className="px-4 py-2 rounded-lg text-green-500 font-semibold text-lg border-2 border-green-500 w-fit mt-2 mx-auto hover:bg-green-500 hover:text-white duration-200 hover:border-transparent disabled:border-red-500 disabled:text-red-500 focus:animate-shake" disabled={Object.keys(cart) == 0}>
          Finalizar Compra
        </button>
        <div className="flex flex-col items-center mt-8">
          {Object.keys(cart).map((x, i) => (
            <CartProduct key={i} product={cart[x]} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cart;
