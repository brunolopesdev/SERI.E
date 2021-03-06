import "./index.scss";
import { newProductData } from "../../data/newProductData";
import { ProductCard } from "../ProductCard";

export const NewProducts = () => {
  return (
    <section className="mainContainer">
      <h1 className="title">NOVIDADES</h1>
      <div className="mainWrapper">
        {newProductData.map((item) => (
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
