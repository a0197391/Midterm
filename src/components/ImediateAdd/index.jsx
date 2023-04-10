import { Button, notification } from "antd"
import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/cartSlice";
import styles from "./imediateadd.module.css"
import { Basket } from "../Icons";

export default function AddToCart({ product, qty }) {
  const dispatch = useDispatch();

  const openNotification = () => {
    notification.open({
      message: 'Shopping Notification',
      description:
        `${qty} ${qty > 1 ? "pieces" : "piece"} of ${product.name} ${qty > 1 ? "have" : "has"} been added to your cart.`,
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
    <Button type="Text" className={styles.btn}><img src="/images/cart/imediately.png" type="primary" className={styles.add} onClick={addToCart}></img></Button>

  );
}
