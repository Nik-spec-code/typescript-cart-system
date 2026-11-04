import ProductCard from "@/components/ProductCard";
import { products } from "@/dummy_data/productList";

const Home = () => {
  return (
    <section className="bg-background w-full px-14 py-8 grid grid-cols-4 gap-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Home;
