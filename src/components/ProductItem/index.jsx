
import Link from '../Link';
import styles from './productitem.module.css';
import { HiShoppingCart } from "react-icons/hi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart} from "react-icons/io";


export default function ProductItem({ product }) {

   return (
      <div className={styles.item}>

        <Link to={`/products/id/${product.id}`}>
            <img
               style={{ width: '100%' , height: '100%' }}
               src={product.image}
               alt={product.name} />
         </Link>

         <div className={styles.info}>

            {/* <h6 className={styles.category}>
               {product.category}
            </h6> */}

               <Link to={`/products/id/${product.id}`} className={styles.link}>
                  <div className={styles.name}>
                    {product.name}
                  </div>
               </Link>
        

            {/* <p className={styles.description}>
               {product.description}
            </p> */}

            <div className={styles.more}>
               <div className={styles.textGray}>
                  NT${product.price}
               </div>

               <div>
                 {/* <a href="#"className={styles.icon}><img src="images/heart.png"/></a> */}
                 {/* <a href="#"className={styles.icon}><img src="images/shoppingCart.png"/></a> */}
                 
                  <IoMdHeartEmpty className={styles.icon2}/>
                  {/* <IoMdHeart className={styles.icon2}/>  */}
                  <HiShoppingCart className={styles.icon}/>
               </div>


            </div>

           


         </div>
      </div>
   );
}
