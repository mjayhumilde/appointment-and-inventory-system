import useProductsStore from "@/store/useProductStore";
import ProductCard from "@/components/ProductCard";

const Homepage = () => {
  const products = useProductsStore((state) => state.products);

  console.log(products);

  return (
    <section className="">
      <div className="container grid grid-cols-5 gap-2 p-4 mx-auto">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard
              image={product.image}
              name={product.title}
              brand={product.brand}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Homepage;
