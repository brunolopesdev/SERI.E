import "./index.scss";
import Logo from "../../assets/logo.png";
import bannerFull from "../../assets/bannerFull.png";
import bannerRacoes from "../../assets/racoes.png";
import bannerBrinquedos from "../../assets/brinquedos.png";
import bannerAcessorios from "../../assets/acessorios.png";
import {
  MdAccountCircle,
  MdShoppingCart,
  MdSearch,
  MdViewHeadline,
} from "react-icons/md";

export const Header = () => {
  return (
    <header className="headerContainer">
      <div className="preHeader">
        <div className="searchBox">
          <input type="text" placeholder="Pesquisar..." />
          <MdSearch />
        </div>
        <div className="logo">
          <img src={Logo} alt="Pet Store Logo" />
        </div>
        <div className="leftIcons">
          <MdAccountCircle />
          <MdShoppingCart />
          <p className="count">22</p>
        </div>
      </div>
      <nav className="navbarContainer">
        <div className="navWrapper">
          <ul className="navLinks">
            <li className="navItem">Categoria</li>
            <li className="navItem">Categoria</li>
            <li className="navItem">Categoria</li>
            <li className="navItem">Categoria</li>
            <li className="navItem">Categoria</li>
            <li className="navItem">Categoria</li>
            <li className="navItem">Categoria</li>
            <li className="navItem">
              <MdViewHeadline />
            </li>
          </ul>
        </div>
      </nav>
      <div className="mainBanner">
        <img src={bannerFull} alt="Banner Principal" className="bannerFull" />
      </div>
      <div className="miniBanners">
        <div className="miniBanners-wrapper">
          <div className="bannerOne">
            <img src={bannerRacoes} alt="Banner Rações" />
          </div>
          <div className="bannerTwo">
            <img src={bannerBrinquedos} alt="Banner Brinquedos" />
          </div>
          <div className="bannerThree">
            <img src={bannerAcessorios} alt="Banner Acessórios" />
          </div>
        </div>
      </div>
    </header>
  );
};
