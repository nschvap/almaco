import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Rating from "./Rating";

const Product = ({ product }) => {
  const { cart, addProductToCart, removeProductFromCart, setShowMessage } =
    useContext(CartContext);

  return (
    <div
      key={product.id}
      className="flex flex-col max-w-sm rounded-lg px-6 py-8 bg-black/40 hover:shadow-white/20 hover:shadow-lg duration-200 relative group h-full"
    >
      {/* <div className="w-full h-full bg-green-400 absolute left-0 top-0 z-[60] opacity-0 group-hover:opacity-100 duration-200 group-hover:flex items-center justify-center">
          <p className="text-white text-5xl font-black group-hover:opacity-100 opacity-0">${product.price.toLocaleString()}</p>
        </div> */}
      <img
        src={product.image || "https://via.placeholder.com/300x150/"}
        className="rounded-lg aspect-video object-contain bg-white p-5"
      />
      <p className="text-lg font-semibold mt-2">{product.name}</p>
      <p className="text-zinc-400 text-sm md:line-clamp-2 md:h-12">
        {product.description}
      </p>
      <p
        className={`${
          product.stock > 0 ? "text-zinc-500" : "text-red-800"
        } text-sm mt-1`}
      >
        {product.stock > 0 ? `${product.stock} en stock` : `Sin stock`}
      </p>
      <Rating rating={product.rating} />
      {product.stock > 0 && (
        <div className="flex gap-x-4 items-center w-full justify-center mt-auto">
          {cart.hasOwnProperty(product.id) ? (
            <button
              onClick={() => {
                removeProductFromCart(product, true);
              }}
              className="w-full px-2 py-2 rounded-lg border-2 border-red-400 text-red-400 font-semibold bg-transparent hover:bg-red-400 hover:border-transparent hover:text-white hover:scale-110 duration-200 text-sm line-clamp-1"
            >
              Eliminar del carrito
            </button>
          ) : (
            <button
              onClick={() => {
                addProductToCart(product);
                if (!cart.hasOwnProperty(product.id)) setShowMessage(true);
              }}
              className="w-full px-2 py-2 rounded-lg border-2 border-yellow-400 text-yellow-400 font-semibold bg-transparent hover:bg-yellow-400 hover:border-transparent hover:text-white hover:scale-110 duration-200 text-sm"
            >
              Añadir al carrito
            </button>
          )}
          <button className="w-full py-2 rounded-lg border-2 border-transparent bg-green-400 text-white font-semibold hover:border-green-400 hover:text-green-400 hover:bg-transparent hover:scale-110 duration-200 focus:animate-wiggle text-sm">
            Comprar
          </button>
        </div>
      )}
      <span className="w-fit group-hover:scale-125 group-hover:rotate-[15deg] duration-200 z-50 px-4 h-12 rounded-full flex justify-center items-center absolute -top-8 -right-8 bg-green-500 text-white">
        ${product.price.toLocaleString()}
      </span>
    </div>
  );
};

export default Product;
