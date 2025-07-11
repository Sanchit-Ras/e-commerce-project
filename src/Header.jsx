import React, { useState, useEffect } from "react";
import { GiShoppingBag } from "react-icons/gi";
import {Link} from "react-router-dom"
export default function Header({totalQuantity}){
  return (
    <div className="w-full bg-white flex justify-center py-2 ">
      <div className="w-[70%] md:w-5xl flex justify-between items-center relative">
        <Link to='/'><img className="w-16 rounded"
          src="https://cdn.glitch.global/8a033d66-d3d7-4299-beca-375fd3de0c14/thumbnails%2FCheaply%20(2).png?1750361026209"/></Link> 
        <Link to="/cart"><GiShoppingBag className="text-5xl text-primary-light " /></Link>
        <div className="bg-primary-dark size-6 p-1 rounded-full absolute top-0 right-0 text-xs text-white font-bold flex justify-center items-center">{totalQuantity}</div>
      </div>
    </div>
  )
}