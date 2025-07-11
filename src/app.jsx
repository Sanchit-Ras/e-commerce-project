import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {Routes,Route} from "react-router-dom";
import ProductDetail from "./ProductDetail.jsx";
import ProductListPage from "./ProductListPage";
import CartPage from "./CartPage.jsx";
import NotFound from "./NotFound.jsx";
import Login from "./Login.jsx";
import {useState,useMemo,useCallback} from 'react';
import Signup from "./Signup.jsx";
import ForgotPassword from "./ForgotPassword.jsx";
export default function App(){
  const savedData=JSON.parse(localStorage.getItem("my-cart")||"{}");
  const [cart,updateCart]=useState(savedData);
  const handleCartCount=useCallback((productId,currQuantity)=>{
    console.log("prodID",productId,currQuantity);
    const oldQuantity=cart[productId] || 0;
    const newCart={...cart,[productId]:oldQuantity+currQuantity};
    updateCart(newCart);
    const myCart=JSON.stringify(newCart)
    localStorage.setItem("my-cart",myCart);   
  },[]);
  
  const totalQuantity=useMemo(()=>{
                                    const tQ=Object.keys(cart).reduce((prev,curr)=>{
                                      console.log("total quantity");
                                      return prev+cart[curr];
                                    },0)
                                    return tQ;
                                  }
                        ,[cart])
  return (
    <div className="flex flex-col md:items-center w-full justify-between min-h-screen">
      <Header totalQuantity={totalQuantity} />
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/forgot_password" element={<ForgotPassword/>}></Route>
        <Route index element={<ProductListPage/>}></Route>
        <Route path="/product/:id" element={<ProductDetail onCartChange={handleCartCount}/>}></Route> {/*IF PARAMETER CHANGES THE COMPONENT RE-RUNS BUT REACT DOES NOT MOUNT AND UNMOUNT,
                                                                                      SAME INSTANCE IS USED.*/}
        <Route path="/cart" element={<CartPage/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes> 
      <Footer />
      
    </div>

    
  )
}