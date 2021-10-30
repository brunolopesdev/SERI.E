import "./index.scss";

export const ProductCard = ({
  selo,
  name,
  desc,
  price,
  sellingPrice,
  image,
}) => {
  return (
    <div className="cardContainer">
      <div className="imgWrapper">
        <img src={image} alt={name} />
        <button>compra rápida</button>
      </div>
      <div className="cardInfo">
        <p className="name">{name}</p>
        <p className="description">{desc}</p>
        <div className="priceContainer">
          <p
            className="price"
            style={{ textDecoration: sellingPrice ? "line-through" : null }}
          >
            R$ {price}
          </p>
          {sellingPrice ? (
            <p className="sellingPrice">R$ {sellingPrice}</p>
          ) : null}
        </div>
      </div>
      {selo ? <img src={selo} alt={name} className="selo" /> : null}
    </div>
  );
};
