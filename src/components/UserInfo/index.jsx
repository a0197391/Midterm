// import { UserSwitchOutlined } from '@ant-design/icons';
// import {BsPersonCircle } from "react-icons/bs";
// import { useNavigate } from 'react-router-dom';
// import styles from "./userinfo.module.css";

// export default function UserInfo(props) {
//    const navigate = useNavigate();
  
//    const goToProfile = () => {
//       navigate("/auth/login?redirect=/auth/profile");
//    };


//    return (
//       <nav onClick={goToProfile} style={{ ...props.style }} className={styles.userInfo} >
//          <BsPersonCircle className={styles.userInfoOutlined} />
//          <p className={styles.userInfoText}>
//             請登入
//          </p>
//       </nav>

//    );
// }

// import { UserOutlined, UserSwitchOutlined } from '@ant-design/icons';
// import { useNavigate } from 'react-router-dom';
// import { useUserInfo } from "../../react-query";
// import styles from "./userinfo.module.css";
// import {BsPersonCircle } from "react-icons/bs";

// export default function UserInfo(props) {
//    const { data: userInfo} = useUserInfo();
//    const navigate = useNavigate();

//    const goToProfile = () => {
//       if(userInfo?.name)
//          navigate("/auth/profile")
//       else
//          navigate("/auth/login?redirect=/auth/profile");
//    };

//    return (
//       <div onClick={goToProfile} style={{ ...props.style }} className={styles.userInfo} >
//          {userInfo
//             ? <BsPersonCircle className={styles.userInfoOutlined} />
//             : <BsPersonCircle className={styles.userInfoOutlined} />
//          }
//          <p className={styles.userInfoText}>
//             {!!userInfo?.name
//                ? `${userInfo.name}'s`
//                : `請登入`
//             }
//          </p>
//       </div>
//    );
// }


import { UserOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useUserInfo } from "../../react-query";
import styles from "./userinfo.module.css";
import {BsPersonCircle } from "react-icons/bs";

export default function UserInfo(props) {
   const { data: userInfo} = useUserInfo();
   const navigate = useNavigate();

   const goToProfile = () => {
      if(userInfo?.name)
         navigate("/auth/profile")
      else
         navigate("/auth/login?redirect=/auth/profile");
   };

   return (

      <div onClick={goToProfile} style={{ ...props.style }} className={styles.userInfo} >
         {userInfo
            ? <BsPersonCircle className={styles.userInfoOutlined}/>
            : <BsPersonCircle className={styles.userInfoOutlined} />
         }
         <p className={styles.userInfoText}>
            {!!userInfo?.name
               ? `${userInfo.name}`
               : `請登入`
            }
         </p>
      </div>

   );
}
