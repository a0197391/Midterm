import { theme } from 'antd';
import styles from './footer.module.css';

export default function Footer() {
    const {
        token: { colorBgFooter, colorTextFooter },
      } = theme.useToken();
    return (
        <div style={{
            backgroundColor: colorBgFooter,
            color: colorTextFooter,}}>

            <div className="container">
                <footer className={styles.footer}>

                   <div className={styles.footerInfo}>
                      <a href="#" className={styles.btn}> <p>關於我們</p> </a>
                      <div class={styles.departLineShort}></div>
                      <a href="#" className={styles.btn}> <p>購物說明</p> </a>
                      <div class={styles.departLineShort}></div>
                      <a href="#" className={styles.btn}> <p>客服資訊</p> </a>
                  </div>

                    <div className={styles.followUS}>
                        <div className={styles.iconsArea}>
                            <a href="#">
                                <img className={styles.icon} src="/images/fbIcon.png" alt="facebook" />
                            </a>
                            <a href="#">
                                <img className={styles.icon} src="/images/igIcon.png" alt="instagram" />
                            </a>
                            <a href="#">
                                <img className={styles.icon} src="/images/lineIcon.png" alt="tiktok" />
                            </a>
                        </div>
                    </div>

                    <div className={styles.content}>
                        
                    </div>

                    <p className={styles.copyRight}>
                        <p style={{ fontWeight: 600 }}>服務電話：0800-666-798／+886-2-8789-8921</p>
                        Copyright © since 2023 jpcd.com.tw All Rights Reserved
                    </p>


                </footer>                
            </div>

        </div>

    );
}