import { useContext, useState } from "react";
import ProductList from "./components/ProductList";
import Nav from "./components/Nav";
import { FilterContext } from "./contexts/FilterContext";
import { IoCartOutline } from "react-icons/io5";
import Cart from "./components/Cart";
import { CartContext } from "./contexts/CartContext";
import { FaArrowDown } from "react-icons/fa6";

const App = () => {
  const {
    filters,
    category,
    sortBy,
    maxProductsShown,
    showNonStockProducts,
    search,
  } = useContext(FilterContext);
  const { showCart, setShowCart } = useContext(CartContext);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <main className="w-full min-h-screen bg-zinc-800">
      {showCart && <Cart />}
      <section className="py-12 min-h-screen bg-zinc-900 px-12">
        <header>
          <div className="w-full flex justify-between items-center">
            <h1 className="text-5xl font-semibold tracking-wider">Almaco</h1>
            <button
              onClick={() => setShowCart(!showCart)}
              className={`text-3xl px-4 py-1 rounded-lg border-2 lg:z-[99] flex justify-center items-center ${
                showCart
                  ? "border-transparent bg-yellow-400 text-white "
                  : "border-yellow-400 bg-transparent text-yellow-400 hover:bg-yellow-400 hover:border-transparent hover:text-white duration-200"
              }`}
            >
              <IoCartOutline />
            </button>
          </div>
          <p className="text-sm text-zinc-400/40">
            Almacen simple con Google Sheets
          </p>
          <Nav show={showFilters} />
        </header>
        <div className="flex gap-x-2 w-full items-start mt-4">
          <div className="w-full h-[1px] mb-12 bg-zinc-400/50 mt-4"></div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="p-2 rounded-full bg-zinc-400 text-zinc-900 flex items-center justify-center"
          >
            <FaArrowDown className={`${showFilters ? "rotate-180" : "rotate-0"} duration-500`} />
          </button>
          <div className="w-full h-[1px] mb-12 bg-zinc-400/50 mt-4"></div>
        </div>
        <h2 className="text-2xl font-semibold text-zinc-400 mb-4">
          {category.label}
        </h2>
        <ProductList
          filter={filters.categories[category.value]}
          slice={maxProductsShown.value}
          sort={filters.sort[sortBy.value]}
          search={search}
          showNonStock={showNonStockProducts}
        />
      </section>
    </main>
  );
};

export default App;
