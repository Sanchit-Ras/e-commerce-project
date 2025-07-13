import React,{useState,useEffect} from 'react';
import CartList from './CartList.jsx';
import { getProduct } from './database.js';
import Loading from './Loading.jsx'
export default function CartPage(){ 
  const [cartData,updateCartData]=useState([]);
  const [loading,setLoading]=useState(true);
  if(!localStorage.getItem("my-cart")){
    return <div className='text-4xl font-black md:text-9xl w-full text-center'>Cart is empty</div>
  }
  useEffect(()=>{
      const Cart=JSON.parse(localStorage.getItem("my-cart"));
      const promises=Object.keys(Cart).map(productId=>getProduct(productId).then(response=>(
        {...response.data,quantity:Cart[productId]}
        ))
      );
      Promise.all(promises).then(response=>{
        console.log("data in response: ",response);
        updateCartData(response);
        setLoading(false);  
    });
  },[]);
  
  if(loading){
    return <Loading/>
  }
  return (
    <CartList products={cartData}/>
  )
}