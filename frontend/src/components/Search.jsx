import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = ()=>{
    const navigate = useNavigate();
    
    const onClickHandler = (keyword) =>{
        navigate("/cards?name=" + keyword);
    }

    return(
        <>
         <div className="flex-1 mx-4">
              <div className="relative">
                <input
                  type="text"
                  onChange={(e)=>{onClickHandler(e.target.value)}}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter Product Name ..."
                  onBlur={onClickHandler}
                />

              </div>
            </div>
        </>
    )
}

export default Search;