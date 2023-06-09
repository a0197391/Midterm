import { Helmet } from "react-helmet-async"
import { theme } from 'antd';
import Header from "../components/Header"
import Footer from "../components/Footer"
import Albumpage from "../components/Albumpage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from 'react-router-dom';
import ProductList from "../components/ProductList";
import products from "../json/products.json";


function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AlbumList() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();
  const title = "商品一覽";

  const { categoryName } = useParams();
  const _products = !categoryName
      ? products
      : products.filter(
          x => x?.category.toUpperCase() === categoryName.toUpperCase(),

      );
  const _pd = !categoryName
      ? products
      : products.filter(
          x => x?.sku.toUpperCase() === categoryName.toUpperCase(),

      );

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
        <Albumpage/>
        <ProductList products={_products} pd={_pd} />
      </div>
      

      <Footer className="layoutFooter" />
    </div>
  );
}

export default AlbumList;
