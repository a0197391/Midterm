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
import {Select, Space } from 'antd';


const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};



function AlbumList() {
  const [count, setCount] = useState(0)
  const [isOnTouch, setIsOnTouch] = useState(false);//navbar

  const [size, setSize] = useState('middle');
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <div className="container">

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
          <Space
            direction="vertical"
            style={{
              width: '100%',
              marginTop:10,
            }}
          >
            <Select
              size={"large"}
              defaultValue="最新上架"
              onChange={handleChange}
              style={{
                width: 200,
              }}
              options={[
                {
                  value: '最新上架',
                  label: '最新上架',
                },
                {
                  value: '熱銷排行',
                  label: '熱銷排行',
                },
                {
                  value: '價格低到高',
                  label: '價格低到高',
                },
                {
                  value: '價格高到低',
                  label: '價格高到低',
                },
              ]}
            />
          </Space>
        </div>
    </div>
    
    <div className={styles.Newest}><ProductList products={products} /></div>
        
        
    </div>
  )
}

export default AlbumList