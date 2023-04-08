import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
            <div class="navContent">
                <div class="navContentRight">
                    <div class="hamber">
                        <img src="./image/hamber.png"/>
                    </div>
                    <img src="./image/logo3.png" class="logo"/>
                </div>       
                <div class="navContentLeft">
                    <div class="navContentLeftTop">
                        <form>
                            <input type="text" name="欄位名稱"/>
                        </form>
                        <a href="#" ><img src="./image/login.png"/></a>
                        <a href="#" ><img src="./image/headerShoppingCart.png"/></a>
                    </div>
                    <nav>
                        <ul >
                            <a href="#">最新消息</a>
                            <a href="#">商品分類</a>
                            <a href="#">預購專區</a>
                            <a href="#">熱銷排行</a>
                            <a href="#">單曲排行</a>
                            
                        </ul>
                    </nav>
                </div>
            </div> 
            <img src="./image/separtionBar.png" class="separationBar"/>
        </header>
        <article>
            <div class="separationButton">
                <ul>
                    <li>最新上架</li>
                    <li>男歌手</li>
                    <li>女歌手</li>
                    <li>團體</li>
                    <li>樂團</li>
                    <li>原聲帶OST</li>
                    <li>LP黑膠/彩膠</li>
                </ul>
            </div>
            <div>{/* 大框架:橫排處裡*/}
                <div></div>{/* 首頁>>商品分類>>最新上架*/}
                <div></div>{/*選擇顯示模式放這裡(最新上架)*/ } 
            </div>
            <div class="main">
                <div class="mainWrapper">
                    <a href="./page3.html" ><img src="./image/naPic3.png" class="mainPic"/></a>
                    <a href="./page3.html" class="mainTitle">Eve -ぼくらの【初回生產限定盤CD+Blu-ray Disc】</a>
                    <div class="mainContext">
                        <p class="mainPrice">NT$895</p>
                        <div>
                            <a href="#" ><img src="./image/heart.png"/></a>
                            <a href="./page3.html"><img src="./image/shoppingCart.png"/></a>
                        </div>
                    </div>  
                </div>
            </div>
            <div>
                {/*翻下一頁放這裡*/}
            </div>
        </article>
        <footer>
            <div class="footerInfo">
                <p>關於我們</p>
                <div class="departLineShort"></div>
                <p>購物說明</p>
                <div class="departLineShort"></div>
                <p>客服資訊</p>
            </div>
            
            <div class="footerContext">
                <div class="icons"></div>
                <div class="footerNumber">
                    <p>服務電話：0800-666-798／+886-2-8789-8921</p>
                    <p>Copyright © since 2023 jpcd.com.tw All Rights Reserved</p>
                </div>
                <div class="icons">
                    <img src="./image/fbIcon.png" class="footerIcon"/>                    
                    <img src="./image/igIcon.png" class="footerIcon"/>
                    <img src="./image/lineIcon.png" class="footerIcon"/>
                </div>
            </div>
            
        </footer>
    </div>
  )
}

export default App
