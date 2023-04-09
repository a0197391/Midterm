import { useState } from "react";
import Link from "../Link"
import NavBar from "../NavBar";
import styles from "./header.module.css";
import HamburgerMenu from "../HamburgerMenu"
import CartSummary from "../CartSummary";
import SetColorMode from "../SetColorMode"
import { Drawer } from 'antd';

export default function Header({ title, slogan }) {
    const [isOnTouch, setIsOnTouch] = useState(false);
    
    return (
        <div className="container">
            <div className={styles.header}>
                <div className={styles.headerWwrap}>
                    <HamburgerMenu
                        onClick={() => setIsOnTouch(!isOnTouch)}
                        isOnTouch={isOnTouch}
                    />
                    <Link to="/">
                        <img src="/images/logo3.png" className={styles.logo}></img>
                    </Link>
                </div>

                <div className={styles.navContentLeft}>
                        <Link to="/">
                            <div className={styles.navItems}>首頁</div>
                        </Link>
                        <Link to="/">
                            <div className={styles.navItems}>最新消息</div>
                        </Link>
                        <Link to="/albums">
                            <div className={styles.navItems}>商品一覽</div>
                        </Link>
                        <Link to="/">
                            <div className={styles.navItems}>預購專區</div>
                        </Link> 
                        <Link to="/">
                           <div className={styles.navItems}>單曲排行</div>
                        </Link>
                 </div> 
              
                {/* <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} /> */}
            </div>

            <img src="/images/separtionBar.png" className={styles.line}></img>

            <div className={styles.iconWrap}>
                {/* <SetColorMode/> */}
                <CartSummary/>                
            </div>

        </div>

    );

}

