import {Button}from "antd";
import{List}from "antd";
import {useState} from "react";
/*onMouseMoveCapture*/
/*isOnTouch*/

const AlertButton = ()=>{
    const [ toggleBouncing, setToggleBouncing] =useState(false);
    return (
        <Button
            type="link"
            className={ toggleBouncing && "animate_animated animate__bounceIn"}
            style={{fontWeight :"bold",fontSize: "20px", color:"#DB497E" }}
            onMouseMoveCapture={() =>{
                setToggleBouncing(!toggleBouncing)
            }}
            
        >
            {toggleBouncing ? "首頁" : "首頁"}
        </Button>
    );
}

export default AlertButton