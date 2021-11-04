import "./index.scss";
import pawIcon from "../../assets/pawIcon.png";

export const Newsletter = () => {
  return (
    <section className="preFooterContainer">
      <div className="preFooterInfo">
        <div className="infoWrapper">
          <div className="entrega">
            <img src={pawIcon} alt="Icone de pata em coração" />
            <p>
              <strong>Entrega gratuita</strong> a partir de R$99
            </p>
          </div>
          <div className="parcelamento">
            <img src={pawIcon} alt="Icone de pata em coração" />
            <p>
              <strong>Parcelamento</strong> sem juros
            </p>
          </div>
          <div className="cadastro">
            <img src={pawIcon} alt="Icone de pata em coração" />
            <p>
              <strong>Cadastre-se</strong> e ganhe desconto
            </p>
          </div>
        </div>
        <hr />
        <div className="newsletterWrapper">
          <h1>Assine a nossa newsletter</h1>
          <p>
            Cadastre-se para receber nossas novidades e descontos exclusivos!
          </p>

          <div className="inputContainer">
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="E-mail" />
            <button type="submit">Enviar</button>
          </div>
        </div>
      </div>
    </section>
  );
};
