import "./index.scss";

export const CenterBanners = () => {
  const centerBanners = [
    {
      id: 1,
      img: "src/assets/bannerGatos.png",
      alt: "Para Gatos",
    },
    {
      id: 2,
      img: "src/assets/bannerCachorros.png",
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
