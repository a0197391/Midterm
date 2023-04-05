import { useState } from "react";
import Link from "../Link"
import NavBar from "../NavBar";
import styles from "./header.module.css";
import HamburgerMenu from "../HamburgerMenu"
import CartSummary from "../CartSummary";
import SetColorMode from "../SetColorMode"

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

                <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} />
            </div>

            <img src="/images/separtionBar.png" className={styles.line}></img>

            <div className={styles.iconWrap}>
                <SetColorMode/>
                <CartSummary/>                
            </div>

        </div>

    );
}

