import { Button, notification } from "antd"
import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/cartSlice";
import styles from "./addtobasket.module.css"
import { Basket } from "../Icons";

export default function AddToCart({ product, qty }) {
  const dispatch = useDispatch();

  const openNotification = () => {
    notification.open({
      message: '放入購物車',
      description:
        `${product.name} ${qty} 件`,
      placement: 'bottomRight'
    });
  };

  const addToCart = () => {
    openNotification();
    dispatch(addCartItems({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      countInStock: product.countInStock,
      qty,
    }))
  };

  return (
    // <Button type="primary" className={styles.btn} onClick={addToCart}>
    //   {/* <Basket color={"#ffffff"}/>Add To Basket */}
    //    <img src="/images/cart/addtoCart.png"></img>
    // </Button>

    <Button type="link" className={styles.btn}><img src="/images/cart/addtoCart.png" type="primary" className={styles.add} onClick={addToCart}></img></Button>
    

  );
}
