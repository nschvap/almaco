import { useEffect, useState } from "react";
import Product from "./Product";

const ProductList = ({
  filter = () => true,
  slice = [0, 0],
  sort = () => true,
  search = "",
  showNonStock = false,
}) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function f() {
      const response = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTa7xLRrCcnXFUNgouzbpsKgdkhVGapEOrFr5smaEjqMGMAPD7dFoacg2SVwOdUcGpaUvb_Ao6B_PVp/pub?output=csv"
      );
      const data = await response.text();
      const products = data
        .split("\n")
        .slice(1)
        .map((x) => {
          const [id, name, description, category, price, rating, stock, image] =
            x.split(",");

          return {
            id,
            name,
            description,
            category,
            price: Number(price),
            rating,
            stock,
            image,
          };
        });

      setLoading(false);
      setProducts(products);
    }

    f();
  }, []);

  if (loading) return <h1>Cargando...</h1>;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center gap-y-6 gap-x-8 md:px-4">
      {products
        .filter(filter)
        .filter(
          (prod) =>
            prod.name.toLowerCase().includes(search.toLowerCase()) ||
            prod.description.toLowerCase().includes(search.toLowerCase())
        )
        .filter((prod) => (showNonStock ? true : prod.stock > 0))
        .slice(
          slice[0] != 0 ? slice[0] : 0,
          slice[1] != 0 ? slice[1] : products.length
        )
        .sort(sort)
        .map((product, i) => (
          <Product product={product} />
        ))}
    </section>
  );
};

export default ProductList;
