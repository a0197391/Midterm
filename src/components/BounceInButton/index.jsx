import {Button}from "antd";
import{List}from "antd";
import {useState} from "react";
/*onMouseMoveCapture*/
/*isOnTouch*/

export const AlertButton = ()=>{
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



export const AlertButton2 = ()=>{
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
            {toggleBouncing ? "最新消息" : "最新消息"}
        </Button>
    );
}

export const AlertButton3 = ()=>{
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
            {toggleBouncing ? "商品一覽" : "商品一覽"}
        </Button>
    );
}
export const AlertButton4 = ()=>{
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
            {toggleBouncing ? "預購專區" : "預購專區"}
        </Button>
    );
}
export const AlertButton5 = ()=>{
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
            {toggleBouncing ? "單曲排行" : "單曲排行"}
        </Button>
    );
}
