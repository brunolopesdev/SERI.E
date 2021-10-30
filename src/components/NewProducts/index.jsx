import "./index.scss";
import { productData } from "../../data/productData";
import { ProductCard } from "../ProductCard";
import { useState } from "react";

export const NewProducts = () => {
  console.log(productData);
  return (
    <section className="mainContainer">
      <h1 className="title">NOVIDADES</h1>
      <div className="mainWrapper">
        {productData.map((item) => (
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
