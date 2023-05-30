import { useState, useEffect } from "react";
import { Row, Col, Select } from "antd";
import { Button, notification } from "antd"
import { useSearchParams } from 'react-router-dom';
import AddToBasket from "../AddToBasket"
import ImediateAdd from "../ImediateAdd"
import styles from "./productdetail.module.css"
import RwdYoutube from './RWDyoutube'
const { Option } = Select;

function ProductDetail({ product }) {
   const [searchParams] = useSearchParams();
   const qtyFromBasket = searchParams.get('qtyFromBasket');
   const initQty = !!qtyFromBasket ? Number(qtyFromBasket) : product.countInStock > 0 ? 1 : 0
   const [qty, setQty] = useState(initQty);

   const increment = () => {
      if(product.countInStock > qty){
		setQty(qty + 1); 
      }
	};

   const decrement = () => {
      if ( qty > 1 ){
         setQty(qty - 1); 
      }
	};


   useEffect(() => {
      setQty(initQty)
   }, [initQty])


   return (
      <Row gutter={[24,24]}
         className={styles.all}
      >
      <div className={styles.productsell}>
            <Col
                  xs={{ span: 22 }}
                  lg={{ span: 8 }}
            >
               <img
                  alt={product.name}
                  className={styles.image}
                  src={product.image}
               />

               <Row className={styles.smallpic}>
                     <img src="/images/leftsm.png"  className={styles.arrowL}></img>
                     <img
                        alt={product.name}
                        className={styles.smpic}
                        src={product.image}
                     />
                     <img
                        alt={product.name}
                        className={styles.smpic}
                        src={product.image2}
                     />
                     <img src="/images/rightsm.png" className={styles.arrowR}></img>
               </Row>
          </Col>

           <Col
            xs={{ span: 24 }}
            lg={{ span: 15 }}
           >
            <div className={styles.info} >
               {/* <h2 className={styles.category} >
                  {product.category}
               </h2> */}

               <h1 className={styles.name} >
                  {product.name}
               </h1>
              
              <div className={styles.free}>
                 <span className={styles.category} >
                    超取滿300免運
                 </span>
              </div>

               <div className={styles.wrap}>
                  <p className={styles.price} >
                     NT${product.price}
                  </p>
                    {/* <p className={styles.status}>
                      Status: {product.countInStock > 0 ? "In Stock" : "Unavailable."}
                    </p> */}

                     <div className={styles.typeword}>
                        規格
                        <div className={styles.typebtn}>
                        <Button size={"large"} className={styles.type}>通常盤</Button>

                        <Button size={"large"} className={styles.type}>初回限定盤</Button>
                     </div>
                     </div>

                     <div className={styles.numtitle}>
                        數量
                        <div className={styles.block}>
                        <button onClick={decrement}className={styles.numbtn2}>﹣</button>
                        <p className={styles.num}>{qty}</p>
                        <button onClick={increment} className={styles.numbtn1} >+</button>
                     </div>
                  
                  </div>
                  {/* <div className={styles.qty}>
                     數量: {"   "}
                     <Select
                        defaultValue={qty}
                        key={qty}                        
                        className={styles.selectStyle}
                        onChange={val => setQty(val)}
                     >
                        {[...Array(product.countInStock).keys()].map((x) => (
                           <Option key={x + 1} value={x + 1}>
                              {x + 1}
                           </Option>
                        ))}
                     </Select>
                  </div> */}

                  {/* 
                  <p className={styles.qty}>
                     Total Price: {product.price * qty}
                  </p> */}
                  
                  <div className={styles.addbtn}>
                     <AddToBasket product={product} qty={qty} />
                     <ImediateAdd product={product} qty={qty} />
                  </div>
                  
                  <img src="/images/transformdata.png" className={styles.tdata}></img>
                </div>
             </div>
         </Col>

         </div>

       <div className={styles.description}>
            <div class={styles.departLineShort}></div>
            <div className={styles.introtitle}>
              <img src="/images/introicon.png" className={styles.cd}></img>
               商品說明
            </div>
            
            <div className={styles.video}>
              <RwdYoutube src="https://www.youtube.com/embed/UXFxKYhJxT8" />
            </div> 
            

            <div className={styles.simtitle}>
               簡介
            </div>
            <Row gutter={[32, 32]}>
            <Col
               xs={{ span: 22 }}
               lg={{ span: 20 }}
               >  
                <div className={styles.pd}>
                  {product.description}
                </div>
               </Col>
            </Row>
            
            
            <div className={styles.songlist}>
              收錄曲目
            </div>
            <Row gutter={[32, 32]}>
            <Col
               xs={{ span: 32 }}
               lg={{ span: 23 }}
               >  
               <div className={styles.pd}>
                  {product.released}
               </div>

               <div className={styles.pd2}>
                  {product.type1}
               </div>
               <div className={styles.pd}>
                  {product.num1}
               </div>

               <div className={styles.pd2}>
                  {product.type2}
               </div>
               <div className={styles.pd}>
                  {product.num2}
               </div>

               <div className={styles.pd2}>
                  {product.CD}
               </div>
               <div className={styles.pd}>
                  {product.S1}
               </div>
               <div className={styles.pd}>
                  {product.S2}
               </div>
               <div className={styles.pd}>
                  {product.S3}
               </div>
               <div className={styles.pd}>
                  {product.S4}
               </div>
               <div className={styles.pd}>
                  {product.S5}
               </div>
               <div className={styles.pd}>
                  {product.S6}
               </div>
               <div className={styles.pd}>
                  {product.S7}
               </div>
               <div className={styles.pd}>
                  {product.S8}
               </div>
               <div className={styles.pd}>
                  {product.S9}
               </div>
               <div className={styles.pd}>
                  {product.S10}
               </div>
               <div className={styles.pd}>
                  {product.S11}
               </div>
               <div className={styles.pd}>
                  {product.S12}
               </div>

               <div className={styles.pd2}>
                  {product.Bluray}
               </div>
               <div className={styles.pd}>
                  {product.B1}
               </div>
               <div className={styles.pd}>
                  {product.B2}
               </div>
               <div className={styles.pd}>
                  {product.B3}
               </div>
               <div className={styles.pd}>
                  {product.B4}
               </div>
               <div className={styles.pd}>
                  {product.B5}
               </div>
               <div className={styles.pd}>
                  {product.B6}
               </div>
               <div className={styles.pd}>
                  {product.B7}
               </div>
               <div className={styles.pd}>
                  {product.B8}
               </div>
               <div className={styles.pd}>
                  {product.B9}
               </div>
               <div className={styles.pd}>
                  {product.B10}
               </div>
               <div className={styles.pd}>
                  {product.B11}
               </div>
               <div className={styles.pd}>
                  {product.B12}
               </div>
               <div className={styles.pd}>
                  {product.B13}
               </div>
               <div className={styles.pd}>
                  {product.B14}
               </div>
               <div className={styles.pd}>
                  {product.B15}
               </div>
               <div className={styles.pd}>
                  {product.B16}
               </div>
               <div className={styles.pd}>
                  {product.B17}
               </div>
               <div className={styles.pd}>
                  {product.B18}
               </div>
               <div className={styles.pd}>
                  {product.B19}
               </div>
               </Col>
            </Row>
           
        </div>
        
      </Row>
      
   );
}

export default ProductDetail;