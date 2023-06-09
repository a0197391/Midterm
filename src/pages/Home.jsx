import { Helmet } from "react-helmet-async"
import { theme } from 'antd';
import Header from "../components/Header"
import Footer from "../components/Footer"
// import ProductList from "../components/ProductList";
// import products from "../json/products.json";
import HomeItems from "../components/HomeItems";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Home() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();
  const title = "首頁";

  return (
    <div className="mainLayout">
      <ScrollToTopOnMount/>
      <Helmet>    /*控制亮暗模式用*/
        <title>{title}</title>
        <style>{`
            body { 
              background-color: ${colorBgBase}; 
              color: ${colorTextBase}
            }
        `}</style>
      </Helmet>
      
      <Header
        className="layoutHeader"
        // title={title}
        // slogan="An example made by Vite."
      />

       

      <div className="layoutContent container">
        <HomeItems/> 
        {/* <ProductList products={products} /> */}
      </div>

      <Footer className="layoutFooter" />
    </div>
  );
}

export default Home;
