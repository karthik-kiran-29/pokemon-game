import React from "react";

const HeaderElement = ({href,titleName})=>{
    return(
        <>
        <a href={href} className="hover:text-gray-800">{titleName}</a>
        
        </>
        

    )
}

export default HeaderElement;