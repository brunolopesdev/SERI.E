import "./index.scss";
import footerLogo from "../../assets/footerLogo.png";
import serieLogo from "../../assets/serieLogo.png";
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

export const Footer = () => {
  const petstoreLinks = [
    {
      name: "Quem Somos",
      link: "www.google.com",
    },
    {
      name: "Como Comprar",
      link: "www.google.com",
    },
    {
      name: "Trocas e Devoluções",
      link: "www.google.com",
    },
    {
      name: "Frete e Entregas",
      link: "www.google.com",
    },
  ];
  const paymentImages = [
    {
      alt: "Visa",
      img: "src/assets/visa.png",
    },
    {
      alt: "MasterCard",
      img: "src/assets/mastercard.png",
    },
    {
      alt: "American Express",
      img: "src/assets/american.png",
    },
    {
      alt: "Diners Club",
      img: "src/assets/dinersclub.png",
    },
    {
      alt: "HiperCard",
      img: "src/assets/hipercard.png",
    },
    {
      alt: "Aura",
      img: "src/assets/aura.png",
    },
    {
      alt: "Elo",
      img: "src/assets/elo.png",
    },
    {
      alt: "Boleto",
      img: "src/assets/boleto.png",
    },
  ];
  return (
    <footer className="footerContainer">
      <div className="footerWrapper">
        <div className="footerContent">
          <div className="socialWrapper">
            <img src={footerLogo} alt="Pet Store Logo Footer" />
            <div className="socialIcons">
              <FaFacebook />
              <FaInstagramSquare />
              <FaTwitterSquare />
            </div>
            <p>
              2019 - CNPJ 00.000.000/0000-00 <br /> Rua Tal de Tal, 123 - São
              Paulo, SP
            </p>
          </div>
          <ul className="petstoreLinks">
            <h4>Pet store</h4>
            {petstoreLinks.map((linkItem) => (
              <li className="linkItem" key={linkItem.name}>
                <a href={linkItem.link}>{linkItem.name}</a>
              </li>
            ))}
          </ul>
          <div className="contact">
            <h4>Contato</h4>
            <p>(99) 9999-9999</p>
            <p>(99) 9999-9999</p>
            <p>petstore@petstore.com.br</p>
          </div>
          <div className="paymentInfo">
            <h4>Pagamento</h4>
            <div className="images">
              {paymentImages.map((paymentItem) => (
                <img
                  key={paymentItem.alt}
                  src={paymentItem.img}
                  alt={paymentItem.alt}
                />
              ))}
            </div>
          </div>
        </div>
        <hr />
        <div className="bottomInfo">
          <p>Tecnologia e Desenvolvimento</p>
          <img src={serieLogo} alt="Logo Seri.e Design" />
        </div>
      </div>
    </footer>
  );
};
