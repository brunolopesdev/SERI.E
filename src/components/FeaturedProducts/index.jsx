import "./index.scss";
import { ProductCard } from "../ProductCard";
import { featuredProductsData } from "../../data/featuredProductsData";

export const FeaturedProducts = () => {
  return (
    <section className="featuredContainer">
      <h1 className="title">DESTAQUES</h1>
      <div className="featuredWrapper">
        {featuredProductsData.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            desc={item.desc}
            price={item.price}
            sellingPrice={item.sellingPrice}
            image={item.image}
            selo={item.selo}
          />
        ))}
      </div>
    </section>
  );
};
