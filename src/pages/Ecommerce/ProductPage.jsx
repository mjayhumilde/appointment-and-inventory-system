import useProductsStore from "@/store/useProductStore";
import ProductCard from "@/components/ProductCard";

const ProductPage = () => {
  const products = useProductsStore((state) => state.products);

  return (
    <section className="bg-gray-bgmain">
      <div className="container grid grid-cols-5 gap-3 p-4 px-6 mx-auto">
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

export default ProductPage;
