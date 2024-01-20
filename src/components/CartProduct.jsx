import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const CartProduct = ({ product }) => {
  const { addProductToCart, removeProductFromCart } = useContext(CartContext);

  return (
    <div className="w-full flex items-center px-10 gap-x-8 bg-zinc-900 py-4 group hover:bg-zinc-900/80">
      <div>
        <img
          src={product.image}
          className="w-28 aspect-[1/1] object-contain rounded-lg bg-white"
        ></img>
      </div>
      <div className="flex flex-col items-start justify-start gap-y-3">
        <p className="text-xl font-semibold line-clamp-1 group-hover:scale-105 duration-200">
          {product.name}
        </p>
        <div>
          <span className="font-semibold text-zinc-400">Cantidad</span>
          <div className="flex">
            <button
              disabled={product.quantity == 0}
              onClick={() => removeProductFromCart(product)}
              className="w-8 h-8 flex items-center justify-center bg-red-500 font-black text-white text-2xl rounded-l-lg disabled:brightness-50"
            >
              -
            </button>
            <span className="w-8 h-8 flex items-center justify-center bg-white font-black text-black">
              {product.quantity}
            </span>
            <button
              disabled={product.quantity == product.stock}
              onClick={() => addProductToCart(product)}
              className="w-8 h-8 flex items-center justify-center bg-green-400 font-black text-white text-2xl rounded-r-lg disabled:brightness-50"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
