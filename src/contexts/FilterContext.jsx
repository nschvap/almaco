import { createContext, useState } from "react";

export const FilterContext = createContext();

export default function FilterContextProvider({ children }) {
  const [showNonStockProducts, setShowNonStockProducts] = useState(true);
  const [category, setCategory] = useState({
    value: "recommended",
    label: "Recomendado",
  });
  const [sortBy, setSortBy] = useState("name");
  const [maxProductsShown, setMaxProductsShown] = useState({
    value: [0, 8],
  });
  const [search, setSearch] = useState("");
  const filters = {
    categories: {
      all: () => true,
      recommended: (prod) =>
        prod.rating > 4,
      technology: (prod) =>
        prod.category == "Tecnologia",
      housing: (prod) =>
        prod.category == "Hogar",
      clothing: (prod) =>
        prod.category == "Moda",
      reading: (prod) =>
        prod.category == "Lectura",
      toys: (prod) =>
        prod.category == "Jugueteria",
      vehicles: (prod) =>
        prod.category == "Vehiculos",
    },
    sort: {
      priceAsc: (a, b) => a.price - b.price,
      ratingAsc: (a, b) => a.rating - b.rating,
      priceDes: (a, b) => a.price + b.price,
      ratingDes: (a, b) => a.rating + b.rating,
      name: (a, b) => a.name.localeCompare(b.name),
      random: () => Math.random() - 0.5,
    },
  };

  return (
    <FilterContext.Provider
      value={{
        filters,
        category,
        setCategory,
        sortBy,
        setSortBy,
        maxProductsShown,
        setMaxProductsShown,
        showNonStockProducts,
        setShowNonStockProducts,
        search,
        setSearch
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
