import { useState } from "react";
import Link from "../Link"
import NavBar from "../NavBar";
import styles from "./header.module.css";
import HamburgerMenu from "../HamburgerMenu"
import CartSummary from "../CartSummary";
import {BsPersonCircle } from "react-icons/bs";
import SetColorMode from "../SetColorMode"
// import { Drawer } from 'antd';
import {RxHamburgerMenu} from "react-icons/rx";
// import {IoClose} from "react-icons/io";

import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
const { Option } = Select;

export default function Header({ title, slogan }) {
    const [isOnTouch, setIsOnTouch] = useState(false);

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerWwrap}>
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
                                backgroundColor:"#FCF3F6",
                            }}
                            extra={
                                <Space>
                                    <Button type="Text" onClick={onClose}></Button>
                                    <img src="/images/logo3.png" className={styles.dlogo} ></img>
                                </Space>
                            }
      >
                            <Link to="/">
               <div className={styles.nav}>首頁</div>
                            </Link>
                            <Link to="/">
                <div className={styles.nav}>最新消息</div>
                            </Link>
                            <Link to="/albums">
                 <div className={styles.nav}>商品一覽</div>
                            </Link>
                            <Link to="/">
                <div className={styles.nav}>預購專區</div>
                            </Link> 
                            <Link to="/">
                <div className={styles.nav}>單曲排行</div>
                            </Link>
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
                <div className={styles.lefttop}>
                  <input className={styles.input} type="search" name="欄位名稱"/>
                  <BsPersonCircle className={styles.icon}/>
                  <CartSummary/>
                </div>                
            </div>

        </div>

    );
   
}

