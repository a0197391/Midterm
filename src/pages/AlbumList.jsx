import { Helmet } from "react-helmet-async"
import { theme } from 'antd';
import Header from "../components/Header"
import Footer from "../components/Footer"
import NavBar from "/Users/88696/OneDrive/桌面/Midterm/src/components/NavBar";
// import ProductList from "../components/ProductList";
// import products from "../json/products.json";
import HomeItems from "../components/HomeItems";
import Albumpage from "/Users/88696/OneDrive/桌面/Midterm/src/components/Albumpage";


function AlbumList() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();
  const title = "首頁";

  return (
    <div className="mainLayout">
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

      {/* <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} /> */}
      <div className="layoutContent container">
        <Albumpage/> 
        
        {/* <ProductList products={products} /> */}
      </div>

      <Footer className="layoutFooter" />
    </div>
  );
}

export default AlbumList;
