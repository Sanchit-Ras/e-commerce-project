import React, { useState, useEffect, useContext } from "react";
import { GiShoppingBag } from "react-icons/gi";
import {Link} from "react-router-dom"
import { UserContext } from "./app";
export default function Header({totalQuantity}){
  const {setUser}=useContext(UserContext);
  function handleLogout(){
    localStorage.removeItem("token");
    setUser(undefined);
    //call api to invalidate token
  }
  return (
    <div className="w-full bg-white flex justify-center py-2 ">
      <div className="w-[70%] md:w-5xl flex justify-between items-center relative">
        <Link to='/'><img className="w-16 rounded-md"
          src="https://cdn.glitch.global/8a033d66-d3d7-4299-beca-375fd3de0c14/thumbnails%2FCheaply%20(2).png?1750361026209"/></Link>
        <button className="bg-primary-light hover:bg-primary-medium px-4 py-2 rounded-md text-white font-semibold" onClick={handleLogout}>Logout</button> 
        <Link to="/cart"><GiShoppingBag className="text-5xl text-primary-light " /></Link>
        <div className="bg-primary-dark size-6 p-1 rounded-full absolute top-0 right-0 text-xs text-white font-bold flex justify-center items-center">{totalQuantity}</div>
      </div>
    </div>
  )
}