import "./index.scss";
import bannerGatos from "../../assets/bannerGatos.png";
import bannerCachorros from "../../assets/bannerCachorros.png";

export const CenterBanners = () => {
  const centerBanners = [
    {
      id: 1,
      img: bannerGatos,
      alt: "Para Gatos",
    },
    {
      id: 2,
      img: bannerCachorros,
      alt: "Para Cachorros",
    },
  ];
  return (
    <section className="bannerContainer">
      <div className="bannerWrapper">
        {centerBanners.map((item) => (
          <div className="banners" key={item.id}>
            <img src={item.img} alt={item.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};
