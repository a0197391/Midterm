import { theme } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Sun, Moon } from "../Icons";
import {HiOutlineMusicNote,HiMusicNote} from "react-icons/hi";
import { Switch } from 'antd';
import styles from "./setcolormode.module.css"
import { selectLightMode, setColorMode } from "../../redux/colorSlice";

export default function SetColorMode() {
   const { token: { colorTextBase } } = theme.useToken();
   const lightMode = useSelector(selectLightMode);
   const dispatch = useDispatch();

   const toggleColor = () => {
      dispatch(setColorMode(!lightMode))
   }

   return (
      <div onClick={toggleColor} className={styles.cartSummary} >
         {
            // lightMode ? (
            //    <Sun color={colorTextBase} />
            // ) : (
            //    <Moon color={colorTextBase} />
            // ) 
            <Switch
               checkedChildren={<HiOutlineMusicNote color='#FFFFFF' />}
               unCheckedChildren={<HiMusicNote color='#FFFFFF' />}
               defaultChecked
            />
         }
      </div>
   );
}
