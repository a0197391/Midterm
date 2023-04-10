import NavLink from '../NavLink';
import { Drawer } from 'antd';

import styles from './navbar.module.css';

export default function NavBar({ open, onClose }) {

    const NavBarContent = () => (
        <>
            <NavLink to="/products/category/最新上架"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                最新上架
            </NavLink> 
            <NavLink to="/products/category/最新上架"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                男歌手
            </NavLink>
            <NavLink to="/products/category/女歌手"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                女歌手
            </NavLink>
            <NavLink to="/products/category/最新上架"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                團體
            </NavLink>
            <NavLink to="/products/category/樂團"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                樂團
            </NavLink>
            <NavLink to="/products/category/最新上架"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                原聲帶OST
            </NavLink>    
            <NavLink to="/products/category/最新上架"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                LP黑膠/彩膠
            </NavLink> 
        </>
    )

    return (
        <>
            <div className={styles.navBar}>
                <NavBarContent />
            </div>
            {/* <Drawer 
                title="CATEGORY" 
                placement="left" 
                onClose={onClose} 
                open={open} 
            >
                <div className={styles.drawer}>
                    <NavBarContent />
                </div>
            </Drawer> */}
        </>

    );
}