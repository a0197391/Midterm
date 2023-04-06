import NavLink from '../NavLink';
import { Drawer } from 'antd';

import styles from './navbar.module.css';

export default function NavBar({ open, onClose }) {

    const NavBarContent = () => (
        <>
            <NavLink to="/"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                首頁
            </NavLink>
            {/* <NavLink to="/products/category/cookware"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                最新消息
            </NavLink>
            <NavLink to="/products/category/home-accessories"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                商品分類
            </NavLink>
            <NavLink to="/products/category/lighting"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                預購專區
            </NavLink>
            <NavLink to="/products/category/textile"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                單曲排行
            </NavLink>  */}
        </>
    )

    return (
        <>
            <div className={styles.navBar}>
                <NavBarContent />
            </div>
            <Drawer 
                title="漢堡選單" 
                placement="left" 
                onClose={onClose} 
                open={open} 
            >
                <div className={styles.drawer}>
                    <NavBarContent />
                </div>
            </Drawer>
        </>

    );
}