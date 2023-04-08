import { useState, useEffect } from "react";
import { Row, Col, Select } from "antd";
import { useSearchParams } from 'react-router-dom';
import AddToBasket from "../AddToBasket"
import styles from "./productdetail.module.css"
import RwdYoutube from './RWDyoutube'
const { Option } = Select;

function ProductDetail({ product }) {
   const [searchParams] = useSearchParams();
   const qtyFromBasket = searchParams.get('qtyFromBasket');
   const initQty = !!qtyFromBasket ? Number(qtyFromBasket) : product.countInStock > 0 ? 1 : 0
   const [qty, setQty] = useState(initQty);

   useEffect(() => {
      setQty(initQty)
   }, [initQty])

   return (
      <Row gutter={[24, 24]}
         style={{ justifyContent: 'space-between' }}
      >
         <Col
            xs={{ span: 24 }}
            lg={{ span: 6 }}
         >
            <img
               alt={product.name}
               className={styles.image}
               src={product.image}
            />
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
                  <p>
                     規格
                  </p>
                  
                  <div className={styles.qty}>
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
                  </div>

                  <p className={styles.qty}>
                     Total Price: {product.price * qty}
                  </p>
                  
                  <AddToBasket  product={product} qty={qty} />
               </div>
            </div>
            
         </Col>
       
       <div className={styles.description}>
            <div class={styles.departLineShort}></div>
            <div className={styles.introtitle}>
              <img src="/images/introicon.png" className={styles.cd}></img>
               商品說明
            </div>

            <iframe width="672rem" height="379rem" src="https://www.youtube.com/embed/UXFxKYhJxT8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            {/* <div className={styles.video}>
              <RwdYoutube src="https://www.youtube.com/embed/UXFxKYhJxT8" />
            </div>  */}
            
            <div className={styles.simtitle}>
               簡介
            </div>

            <div className={styles.pd}>
               {product.description}
            </div>
            
        </div>
        
      </Row>
      
   );
}

export default ProductDetail;