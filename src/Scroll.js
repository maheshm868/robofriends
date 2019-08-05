import React from "react";

const Scroll = (props)=>{
    return(
        <div style={{border:'1px solid red',overflow:'scroll',height:'800px'}}>
            {props.children}
        </div>
    )
}
export default Scroll