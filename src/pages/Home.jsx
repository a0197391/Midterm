import { Helmet } from "react-helmet-async"
import { theme } from 'antd';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";

function Home() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();
  const title = "首頁";

  return (
    <div className="mainLayout">
      <Helmet>    /*控制亮暗模式用*/
        <title>{title}</title>
        <style>{`
            body { 
              background-color: ${colorBgBase}; 
              color: ${colorTextBase}
            }
        `}</style>
      </Helmet>
      
      <Header
        className="layoutHeader"
        // title={title}
        // slogan="An example made by Vite."
      />
      <article>
            <div className="proScreen">
                <ul className="slides">
                    <input type="radio" id="control-1" name="control" checked/>
                    <input type="radio" id="control-2" name="control"/>
                    <input type="radio" id="control-3" name="control"/>
                    <li className="slider"><img src="images/news1.png"/></li>
                    <li className="slider"><img src="images/news2.png"/></li>
                    <li className="slider"><img src="images/news3.png"/></li>
                    <div className="controls-visible">
                        <label for="control-1"></label>
                        <label for="control-2"></label>
                        <label for="control-3"></label>
                    </div>
                </ul>
                <a href="#"><img src="images/buttomLeft.png"/></a>
                <div className="middleDiv"></div>          
                <a href="#"><img src="images/buttomRight.png"/></a>
            </div>
            <div>
                <a href="#" className="artiTitle">音樂趨勢</a>
                <div className="departLine"></div>
                <div className="musicTrend">
                    <div className="mtWrapper">
                        <img src="images/mtPic1.png" className="mtPic"/>
                        <div className="mtContext">
                            <a href="#" className="mtTitle">Vaundy新歌藏「61部漫畫」對白！奇蹟連動全網淚崩 </a>
                            <a href="#">日本新生代歌手Vaundy和日本的反盜版漫畫組織「STOP!海賊版」合作，推出全新單曲〈ありがとう（謝謝）〉，其中......</a>
                            <a href ="#"><img src="images/more.png" className="moreButton"/></a>
                        </div>
                    </div>
                    <div className="mtWrapper">
                        <img src="images/mtPic2.png" className="mtPic" />
                        <div className="mtContext">
                            <a href="#" className="mtTitle">回憶殺！《THE FIRST TAKE 》邀請松本梨香獻唱主題曲，向小智與皮卡丘道別！ </a>
                            <a href="#">
                                寶可夢（神奇寶貝）系列動畫於1997年推出後......</a>
                            <a href ="#"><img src="images/more.png" className="moreButton"/></a>
                        </div>
                    </div>
                    <div className="mtWrapper">
                        <img src="images/mtPic3.png" className="mtPic" />
                        <div className="mtContext">
                            <a href="#" className="mtTitle">日本音樂大師坂本龍一逝世 終年71歲 </a>
                            <a href="#">曾奪得奧斯卡最佳原創音樂獎的著名電影配樂大師坂本龍一，於3月28日在......</a>
                            <a href ="#"><img src="images/more.png" className="moreButton"/></a>
                            
                        </div>
                    </div>
                 </div>   
            </div>
            <div>
                <a href="#" className="artiTitle">單曲排行</a>
                <div className="departLine"></div>
                <div className="songRank">
                    <a href="#"><img src="images/buttomLeft.png" className="srButton"/></a>
                    <div className="srWrapper">
                        <a href="#" className="srRank">NO1.</a>
                        <a href="#" ><img src="images/musicCover.png" className="srPic"/></a>
                            <div className="srContext">
                                <a href="#" className="srTitle">すずめ (feat. 十明)</a>
                                <a href="#" >RADWINPS</a>
                            </div>
                        
                    </div>
                    <div className="srWrapper">
                        <a href="#" className="srRank">NO2.</a>
                        <a href="#" ><img src="images/srPic2.png" className="srPic"/></a>
                            <div className="srContext">
                                <a href="#" className="srTitle">First Love</a>
                                <a href="#" >宇多田光</a>
                            </div>
                        
                    </div>
                    <div className="srWrapper">
                        <a href="#" className="srRank">NO3.</a>
                        <a href="#" ><img src="images/srPic3.png" className="srPic"/></a>
                            <div className="srContext">
                                <a href="#" className="srTitle">NIGHT DANCER</a>
                                <a href="#" >imase</a>
                            </div>
                        
                    </div>
                    <a href="#"><img src="images/buttomRight.png" className="srButton"/></a>
                </div>
            </div>
            <div>
                <a href="#" className="artiTitle">最新上架</a>
                <div className="departLine"></div>
                <div className="newArrival">
                    <div className="naList">
                        <div className="naWrapper">
                            <a href="#" ><img src="images/naPic1.png" className="naPic"/></a>
                            <a href="#" className="naTitle">Yorushika / 音樂畫冊《幻燈》 專輯</a>
                            <div className="naContext">
                                <p className="naPrice">NT$2158</p>
                                <div>
                                    <a href="#" ><img src="images/heart.png"/></a>
                                    <a href="#"><img src="images/shoppingCart.png"/></a>
                                </div>
                            </div>  
                        </div>
                        <div className="naWrapper">
                            <a href="#" ><img src="images/naPic2.png" className="naPic"/></a>
                            <a href="#" className="naTitle">優里 yuuri - 弐 (貳) 專輯 【通常盤】</a>
                            <div className="naContext">
                                <p className="naPrice">NT$795</p>
                                <div>
                                    <a href="#" ><img src="images/heart.png"/></a>
                                    <a href="#"><img src="images/shoppingCart.png"/></a>
                                </div>
                            </div>  
                        </div>
                        <div className="naWrapper">
                            <a href="#" ><img src="images/naPic3.png" className="naPic"/></a>
                            <a href="#" className="naTitle">Eve -ぼくらの【初回生產限定盤CD+Blu-ray Disc】</a>
                            <div className="naContext">
                                <p className="naPrice">NT$895</p>
                                <div>
                                    <a href="#" ><img src="images/heart.png"/></a>
                                    <a href="#"><img src="images/shoppingCart.png"/></a>
                                </div>
                            </div>  
                        </div>
                        <div className="naWrapper">
                            <a href="#" ><img src="images/naPic4.png" className="naPic"/></a>
                            <a href="#" className="naTitle">SIX LOUNGE -キタカゼ 【通常盤】</a>
                            <div className="naContext">
                                <p className="naPrice">NT$520</p>
                                <div>
                                    <a href="#" ><img src="images/heart.png"/></a>
                                    <a href="#"><img src="images/shoppingCart.png"/></a>
                                </div>
                            </div>  
                        </div>
                        <div className="naWrapper">
                            <a href="#" ><img src="images/naPic5.png" className="naPic"/></a>
                            <a href="#" className="naTitle">TREASURE - Here I Stand 【通常盤】</a>
                            <div className="naContext">
                                <p className="naPrice">NT$445</p>
                                <div>
                                    <a href="#" ><img src="images/heart.png"/></a>
                                    <a href="#"><img src="images/shoppingCart.png"/></a>
                                </div>
                            </div>  
                        </div>
                        <div className="naWrapper">
                            <a href="#" ><img src="images/naPic6.png" className="naPic"/></a>
                            <a href="#" className="naTitle">幾田りら YOASOBI - Sketch 【初回生產限定盤】</a>
                            <div className="naContext">
                                <p className="naPrice">NT$1310</p>
                                <div>
                                    <a href="#" ><img src="images/heart.png"/></a>
                                    <a href="#"><img src="images/shoppingCart.png"/></a>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <a href="#"><img src="images/moreLong.png" className="moreLong"/></a>
                </div>
            </div>
      </article>
      <div className="layoutContent container">
        <ProductList products={products} />
      </div>
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Home;
