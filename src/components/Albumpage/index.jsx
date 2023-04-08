import { useState } from 'react'
import styles from "../Albumpage/AlbumList.module.css";
import { Carousel, Radio } from 'antd';
import Link from "../Link"
import NavBar from "../NavBar";
import HamburgerMenu from "../HamburgerMenu"
import CartSummary from "../CartSummary";
import SetColorMode from "../SetColorMode"
import { Drawer } from 'antd';
import ProductList from "/Users/88696/OneDrive/桌面/Midterm/src/components/ProductList/";
import products from "/Users/88696/OneDrive/桌面/Midterm/src/json/products.json";

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
        
    <div className={styles.HomeItems}>
       <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} />
    </div>
    
    <div className={styles.Newest}><ProductList products={products} /></div>
        
        
    </div>
  )
}

export default AlbumList