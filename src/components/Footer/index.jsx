import "./index.scss";
import footerLogo from "../../assets/footerLogo.png";
import serieLogo from "../../assets/serieLogo.png";
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import visa from "../../assets/visa.png";
import mastercard from "../../assets/mastercard.png";
import american from "../../assets/american.png";
import diners from "../../assets/dinersclub.png";
import hiper from "../../assets/hipercard.png";
import aura from "../../assets/aura.png";
import elo from "../../assets/elo.png";
import boleto from "../../assets/boleto.png";

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
              <img src={visa} alt="Visa" />
              <img src={mastercard} alt="MasterCard" />
              <img src={american} alt="american express" />
              <img src={diners} alt="diners club" />
              <img src={hiper} alt="hipercard" />
              <img src={aura} alt="aura" />
              <img src={elo} alt="elo" />
              <img src={boleto} alt="boleto" />
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
