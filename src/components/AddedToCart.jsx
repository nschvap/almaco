import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const AddedToCart = () => {
  const { setShowMessage, setShowCart } = useContext(CartContext);

  return (
    <div
      onClick={() => setShowMessage(false)}
      className="w-screen h-screen fixed left-0 top-0 z-[999] bg-black/40 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="md:max-w-lg mx-4 w-full py-6 md:py-12 px-8 bg-zinc-800 rounded-lg flex items-center justify-center flex-col shadow-lg shadow-white/20 animate-jump-in"
      >
        <h2 className="text-white font-semibold text-xl text-center">
          ¡El producto se añadió correctamente al carrito!
        </h2>
        <div className="mx-auto flex flex-col md:flex-row gap-y-4 gap-x-4 items-center mt-4">
          <button
            onClick={() => {
              setShowMessage(false);
              setShowCart(true);
            }}
            className="px-4 py-2 rounded-lg bg-yellow-400 text-white font-semibold text-lg hover:brightness-75 duration-200 hover:scale-110"
          >
            Ver Carrito
          </button>
          <button
            onClick={() => {
              setShowMessage(false);
            }}
            className="px-4 py-2 rounded-lg bg-green-400 text-white font-semibold text-lg hover:brightness-75 duration-200 hover:scale-110"
          >
            Seguir Comprando
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddedToCart;
