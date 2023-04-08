import { useState } from 'react'
import styles from "../Albumpage/AlbumList.module.css";
import { Carousel, Radio } from 'antd';
import NavBar from "../NavBar";
import HamburgerMenu from "../HamburgerMenu"
import CartSummary from "../CartSummary";
import SetColorMode from "../SetColorMode"
import { Drawer } from 'antd';
import ProductList from "/Users/88696/OneDrive/桌面/Midterm/src/components/ProductList/";
import products from "/Users/88696/OneDrive/桌面/Midterm/src/json/products.json";
import Link from "../Link"

const contentStyle = {
  height: '525px',
  color: '#fff',
  lineHeight: '530px',
  textAlign: 'center',
  background: '#DB497E',
  marginBottom: '0px',
};


function AlbumList() {
  const [count, setCount] = useState(0)
  const [isOnTouch, setIsOnTouch] = useState(false);//navbar用

  const [dotPosition, setDotPosition] = useState('bottom');
  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };
  return (
    <div className="container">
        <HamburgerMenu
            onClick={() => setIsOnTouch(!isOnTouch)}
            isOnTouch={isOnTouch}
        />

    <div className={styles.HomeItems}>
       <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} />
    </div>

    <div className={styles.p2nav}>
      <div className={styles.pageInfo}>
          <div class={styles.departLineShort}></div>
          <Link to="/" className={styles.btn}> <p>首頁</p> </Link>
          <img className={styles.icon} src="/images/arrow.png"/>
          <Link to="/albums" className={styles.btn}> <p>商品一覽</p> </Link>
       </div>
        <div className={styles.listbtn}>
          <img className={styles.icon2} src="/images/icon1.png"/>
          <img className={styles.icon2} src="/images/icon2.png"/>
        </div>
    </div>
    
    <div className={styles.Newest}><ProductList products={products} /></div>
        
        
    </div>
  )
}

export default AlbumList