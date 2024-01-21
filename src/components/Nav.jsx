import { useContext } from "react";
import ReactSelect from "react-select";
import { FilterContext } from "../contexts/FilterContext";

const Nav = () => {
  const {
    category,
    setCategory,
    sortBy,
    setSortBy,
    showNonStockProducts,
    maxProductsShown,
    setMaxProductsShown,
    setShowNonStockProducts,
    search,
    setSearch,
  } = useContext(FilterContext);

  return (
    <nav className="w-full flex justify-between items-center px-4 pt-4 relative z-[70]">
      <div className="flex gap-x-4 items-center">
        <div className="flex gap-x-2 items-center">
          <label htmlFor="orderby">Ordenar por</label>
          <ReactSelect
            id="orderby"
            className="rounded-full bg-zinc-600 w-48 text-black"
            placeholder={sortBy.label}
            options={[
              {
                value: "name",
                label: "Nombre",
              },
              {
                value: "priceAsc",
                label: "Precio Ascendente",
              },
              {
                value: "priceDes",
                label: "Precio Descendente",
              },
              {
                value: "ratingAsc",
                label: "Rating Ascendente",
              },
              {
                value: "ratingDes",
                label: "Rating Descendente",
              },
              {
                value: "random",
                label: "Aleatorio",
              },
            ]}
            onChange={(e) => setSortBy(e)}
          />
        </div>
        <div className="flex gap-x-2 items-center">
          <label htmlFor="category">Categoria</label>
          <ReactSelect
            id="category"
            placeholder="Recomendado"
            className="w-48 text-black"
            options={[
              {
                value: "all",
                label: "Todos",
              },
              {
                value: "recommended",
                label: "Recomendado",
              },
              {
                value: "technology",
                label: "Tecnologia",
              },
              {
                value: "housing",
                label: "Hogar",
              },
              {
                value: "clothing",
                label: "Moda",
              },
              {
                value: "toys",
                label: "Jugueteria",
              },
              {
                value: "reading",
                label: "Lectura",
              },
            ]}
            onChange={(e) => setCategory(e)}
          />
        </div>
        {category.value != "recommended" && (
          <div className="flex gap-x-2 items-center">
            <label htmlFor="maxProducts">Productos Visibles</label>
            <ReactSelect
              id="maxProducts"
              placeholder={maxProductsShown.label}
              className="w-36 rounded-lg px-2 py-1 text-black"
              options={[
                {
                  value: [0, 0],
                  label: "Todos",
                },
                {
                  value: [0, 4],
                  label: "4",
                },
                {
                  value: [0, 8],
                  label: "8",
                },
              ]}
              onChange={(e) => setMaxProductsShown(e)}
            />
          </div>
        )}
        <div className="flex flex-row-reverse gap-x-2 items-center">
          <label htmlFor="maxProducts">Ver productos sin stock</label>
          <input
            type="checkbox"
            id="maxProducts"
            placeholder="Todos"
            checked={showNonStockProducts}
            onChange={(e) => setShowNonStockProducts(e.target.checked)}
          />
        </div>
      </div>
      <div className="">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar"
          className="bg-zinc-600 px-4 py-1 rounded-full outline-none text-zinc-200"
        />
      </div>
    </nav>
  );
};

export default Nav;
