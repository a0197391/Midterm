import { useState } from 'react'
import styles from "../HomeItems/homeItems.module.css";
import { Carousel, Radio,Button} from 'antd';
import HamburgerMenu from "../HamburgerMenu"
import products from "../../json/Home.json";
import HomeList from "../ProductList/";
import Link from '../Link';
//const carouselEL = React.createRef();

// const contentStyle = {
//   height: '525px',
//   color: '#fff',
//   lineHeight: '530px',
//   textAlign: 'center',
//   background: '#DB497E',
//   marginBottom: '0px',
// };


function HomeItems() {
  //const [count, setCount] = useState(0)
  const [isOnTouch, setIsOnTouch] = useState(false);//navbar 
  const [dotPosition, setDotPosition] = useState('bottom');
  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };
  // const onChange = (currentSlide) => {
  //   // console.log(currentSlide);
  // };


  return (
    <div className={styles.container}>
      <div className={styles.HomeItems}> 
        <div className={styles.radio}>
            <Radio.Group
              onChange={handlePositionChange}
              value={dotPosition}
              style={{
                marginBottom: 8,
              }}
            >
            </Radio.Group>
            {/* <Button type="link" className={styles.btn} 
                onClick={() => {
                  carouselEL.current.prev();
                }}
            >
              <img src="/images/buttomLeft.png" type="primary" className={styles.add}></img>
            </Button>
            <Button type="link" className={styles.btn2}
                onClick={() => {
                    carouselEL.current.next();
                }}
            >
                <img src="/images/buttomRight.png" type="primary" className={styles.add}></img>
            </Button> */}
            <Carousel dotPosition={dotPosition} className={styles.controlsvisiblelabel} autoplay /*autoplay ref={carouselEL} afterChange={onChange}*/>
                <div>
                  <div className={styles.contentStyle}><img src="images/news1.png" className={styles.control}/></div>
                </div>
                <div>
                  <div className={styles.contentStyle}><img src="images/news2.png" className={styles.control}/></div>
                </div>
                <div>
                  <div className={styles.contentStyle}><img src="images/news3.png" className={styles.control}/></div>
                </div>
                <div>
                  <div className={styles.contentStyle}><img src="images/news4.png" className={styles.control}/></div>
                </div>
                <div>
                  <div className={styles.contentStyle}><img src="images/news5.png" className={styles.control}/></div>
                </div>
            </Carousel>
         </div>

                <div>
                    <a href="#" className={styles.artiTitle}>音樂趨勢</a>
                    <div className={styles.departLine}></div>
                    <div className={styles.musicTrend}>
                        <div className={styles.mtWrapper}>
                            <img src="images/mtPic1.png" className={styles.mtPic}/>
                            <div className={styles.mtContext}>
                                <a href="#" className={styles.mtTitle}>Vaundy新歌藏「61部漫畫」對白！奇蹟連動全網淚崩 </a>
                                <div className={styles.mtText}>日本新生代歌手Vaundy和日本的反盜版漫畫組織「STOP!海賊版」合作，推出全新單曲〈ありがとう（謝謝）〉，其中......</div>
                                <a href ="#"><img src="images/more.png" className={styles.moreButton}/></a>
                            </div>
                        </div>
                        <div className={styles.mtWrapper}>
                            <img src="images/mtPic2.png" className={styles.mtPic}/>
                            <div className={styles.mtContext}>
                                <a href="#" className={styles.mtTitle}>回憶殺！《THE FIRST TAKE 》邀請松本梨香獻唱主題曲，向小智與皮卡丘道別！ </a>
                                <a href="#" className={styles.mtText}>
                                    寶可夢（神奇寶貝）系列動畫於1997年推出後......</a>
                                <a href ="#"><img src="images/more.png" className={styles.moreButton}/></a>
                            </div>
                        </div>
                        <div className={styles.mtWrapper}>
                            <img src="images/mtPic3.png" className={styles.mtPic} />
                            <div className={styles.mtContext}>
                                <a href="#" className={styles.mtTitle}>日本音樂大師坂本龍一逝世 終年71歲 </a>
                                <a href="#"className={styles.mtText}>曾奪得奧斯卡最佳原創音樂獎的著名電影配樂大師坂本龍一，於3月28日在......</a>
                                <a href ="#"><img src="images/more.png" className={styles.moreButton}/></a>
                            </div>
                        </div>
                    </div>   
                </div>
                <div>
                    <a href="#" className={styles.artiTitle}>單曲排行</a>
                    <div className={styles.departLine}></div>
                    <div className={styles.songRank}>
                        <a href="#"><img src="images/buttomLeft.png" className={styles.srButton}/></a>
                        <div className={styles.srWrapper}>
                            <a href="#" className={styles.srRank}>NO1.</a>
                            <a href="#" ><img src="images/musicCover.png" className={styles.srPic}/></a>
                                <div className={styles.srContext}>
                                    <a href="#" className={styles.srTitle}>すずめ (feat. 十明)</a>
                                    <a href="#" >RADWINPS</a>
                                </div>
                            
                        </div>
                        <div className={styles.srWrapper}>
                            <a href="#" className={styles.srRank}>NO2.</a>
                            <a href="#" ><img src="images/srPic2.png" className={styles.srPic}/></a>
                                <div className={styles.srContext}>
                                    <a href="#" className={styles.srTitle}>First Love</a>
                                    <a href="#" >宇多田光</a>
                                </div>
                            
                        </div>
                        <div className={styles.srWrapper}>
                            <a href="#" className={styles.srRank}>NO3.</a>
                            <a href="#" ><img src="images/srPic3.png" className={styles.srPic}/></a>
                                <div className={styles.srContext}>
                                    <a href="#" className={styles.srTitle}>NIGHT DANCER</a>
                                    <a href="#" >imase</a>
                                </div>
                            
                        </div>
                        <a href="#"><img src="images/buttomRight.png" className={styles.srButton}/></a>
                    </div> 
                </div>

                {/* <div> */}
                    <a href="#" className={styles.artiTitle}>最新上架</a>
                    <div className={styles.departLine}></div>
                    <div className={styles.Newest}></div>
                    <HomeList products={products} />
                    {/* <Link to="/albums" className={styles.moreLong}>
                        <img src="images/moreLong.png" />
                    </Link>  */}
                      <Link to="/albums">
                        <div className={styles.hover}>
                          <img src="images/moreLonghover.png" className={styles.moreLong}/>
                          <img src="images/moreLong.png" className={styles.moreLong}/>
                        </div>
                      </Link>
            

      </div>

    </div>
  )
}

export default HomeItems