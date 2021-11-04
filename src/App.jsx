import "./utils/global.scss";
import { Header } from "./components/Header";
import { NewProducts } from "./components/NewProducts";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { CenterBanners } from "./components/CenterBanners";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <NewProducts />
      <CenterBanners />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
