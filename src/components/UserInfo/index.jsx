import { UserSwitchOutlined } from '@ant-design/icons';
import {BsPersonCircle } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import styles from "./userinfo.module.css";

export default function UserInfo(props) {
   const navigate = useNavigate();
   const goToProfile = () => {
      navigate("/auth/login");
   };


   return (
      <nav onClick={goToProfile} style={{ ...props.style }} className={styles.userInfo} >
         <BsPersonCircle className={styles.userInfoOutlined} />
         <p className={styles.userInfoText}>
            請登入
         </p>
      </nav>

   );
}
