import { useState } from "react";
import { NavLink } from 'react-router-dom';
import Link from "../Link"
import NavBar from "../NavBar";
import styles from "./header.module.css";
import HamburgerMenu from "../HamburgerMenu"
import CartSummary from "../CartSummary";
import {BsPersonCircle } from "react-icons/bs";
import SetColorMode from "../SetColorMode"
// import { Drawer } from 'antd';
import {RxHamburgerMenu} from "react-icons/rx";
import UserInfo from "../UserInfo";
// import {IoClose} from "react-icons/io";
import 'animate.css';
import {AlertButton,AlertButton2,AlertButton3,AlertButton4,AlertButton5} from "../BounceInButton";

import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space,Dropdown,Menu } from 'antd';
const { Option } = Select;

function getItem(label, key,  children) {
    return {
      key,
      children,
      label,
    };
  }



export default function Header({ title, slogan }) {
    const [isOnTouch, setIsOnTouch] = useState(false);

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };


    const items = [
        getItem(<NavLink to="/">首頁</NavLink>, '1'),
        getItem('最新消息', '2'),
        getItem('商品一覽', 'sub1', [
            getItem(<NavLink to="/products/category/最新上架">最新上架</NavLink>,'4'),
            getItem(<NavLink to="/products/category/男歌手">男歌手</NavLink>,'5'),
            getItem(<NavLink to="/products/category/女歌手">女歌手</NavLink>,'6'),
            getItem(<NavLink to="/products/category/團體">團體</NavLink>,'7'),
            getItem(<NavLink to="/products/category/樂團">樂團</NavLink>,'8'),
            getItem(<NavLink to="/products/category/原聲帶OST">原聲帶OST</NavLink>,'9'),
            getItem(<NavLink to="/products/category/LP黑膠彩膠">LP黑膠彩膠</NavLink>,'10'),
        ]),
        getItem(<NavLink to="/">預購專區</NavLink>, '11'),
        getItem(<NavLink to="/">單曲排行</NavLink>, '12'),
    ];

    const NavBarContent = () => (
        <>
            <NavLink to="/"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                首頁
            </NavLink>
            <NavLink to="/"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                最新消息
            </NavLink>
            <NavLink to="/albums"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                                <Dropdown
                    menu={{
                        items:dropdownItems,
                    }}
                    trigger={['hover']}
                    placement="bottomLeft"
                >
                    <a className={styles.color}onClick={(e) => e.preventDefault()}>
                        商品一覽
                    </a>
                </Dropdown>
            </NavLink>
            <NavLink to="/"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                預購專區
            </NavLink>
            <NavLink to="/"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                單曲排行
            </NavLink>
        </>
    )


    const [mode, setMode] = useState('inline');
    const [theme, setTheme] = useState('light');
    const dropdownItems = items.find(item => item.key === 'sub1').children; // 提取 sub1 的內容
    const [selectedKeys, setSelectedKeys] = useState(); 
    const handleMenuClick = (e) => {
        setSelectedKeys([e.key]); // 更新选中的菜单项
        };


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerWrap}>
                    <div className={styles.Drawer}>
                        {/* <Button type="Text" onClick={showDrawer} icon={<RxHamburgerMenu/>}></Button> */}
                        <RxHamburgerMenu className={styles.Drawericon} onClick={showDrawer}/>
                        <Drawer
                            className={styles.Drawer}
                            width={317}
                            onClose={onClose}
                            placement={"left"}
                            open={open}
                            bodyStyle={{
                                paddingBottom: 80,
                                backgroundColor:"#FFFFFF",
                            }}
                            extra={
                                <Space>
                                    <Button type="Text" onClick={onClose}></Button>
                                    <img src="/images/logo3.png" className={styles.dlogo} ></img>
                                </Space>
                            }
      >                  
                            {/* <UserInfo/> */}
                            {/* <NavBarContent /> */}
                            <Menu
                                // style={{
                                //     width:300,
                                //     }}
                                // defaultSelectedKeys={['1']}
                                // selectedKeys={selectedKeys} // 使用选中的菜单项
                                // onClick={handleMenuClick} // 设置菜单项点击事件
                                mode={mode}
                                theme={theme}
                                items={items} // Replace `children` with `items`
                             />

                        </Drawer>
                    </div>
                    {/* <HamburgerMenu
                        onClick={() => setIsOnTouch(!isOnTouch)}
                        isOnTouch={isOnTouch}
                    /> */}
                    <Link to="/">
                        <img src="/images/logo3.png" className={styles.logo}></img>
                    </Link>
                </div>
                <div className={styles.iconWrap}>
                    <div className={styles.lefttop}>
                        <input className={styles.input} type="search" name="欄位名稱" placeholder="搜尋..." />
                        <SetColorMode className={styles.coloricon} size={50}/>
                        <UserInfo className={styles.UserInfo}/>
                        {/* <BsPersonCircle className={styles.icon}/> */}
                        <CartSummary/>
                    </div>
                    
                    <div className={styles.navContentLeft}>
                        <Link to="/">
                            <div className={styles.navItems}>
                                <AlertButton/>
                            </div>
                        </Link>
                        <Link to="/">
                            <div className={styles.navItems}>
                                <AlertButton2/>
                            </div>
                        </Link>
                        <Link to="/albums">
                            <div className={styles.navItems}>
                            <AlertButton3/>
                            </div>
                        </Link>
                        <Link to="/">
                            <div className={styles.navItems}>
                                <AlertButton4/>
                            </div>
                        </Link> 
                        <Link to="/">
                            <div className={styles.navItems}>
                            <AlertButton5/>
                            </div>
                        </Link>
                    </div> 
                    {/* <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} /> */}
                    
                </div>
            </div>
            
            <img src="/images/separtionBar.png" className={styles.line}></img>

        </div>

    );
   
}

