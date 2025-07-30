import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail.jsx";
import ProductListPage from "./ProductListPage";
import CartPage from "./CartPage.jsx";
import NotFound from "./NotFound.jsx";
import Login from "./Login.jsx";
import { useState, useMemo, useCallback, useEffect } from 'react';
import Signup from "./Signup.jsx";
import ForgotPassword from "./ForgotPassword.jsx";
import axios from "axios";
import Loading from "./Loading.jsx";
import AuthRoute from "./AuthRoute.jsx";
import UserRoute from "./UserRoute.jsx";
import { createContext } from "react";
export const UserContext = createContext();
export default function App() {
  const savedData = JSON.parse(localStorage.getItem("my-cart") || "{}");
  const [cart, setCart] = useState(savedData);
  const [user, setUser] = useState();
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.get('https://myeasykart.codeyogi.io/me', {
        headers: {
          Authorization: token
        }
      }).then((response) => {
        console.log("user Set");
        setUser(response.data);
        setLoadingUser(false);
      }).catch((error) => {
        console.log("error: ", error);
        localStorage.removeItem("token");
        setLoadingUser(false);
      })
    } else {
      setLoadingUser(false);
    }

  }, [])


  const handleCartCount = useCallback((productId, currQuantity) => {
    console.log("prodID", productId, currQuantity);
    const oldQuantity = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldQuantity + currQuantity };
    updateCart(newCart);
  }, [cart]);
  function updateCart(newCart) {
    setCart(newCart);
    const myCart = JSON.stringify(newCart)
    localStorage.setItem("my-cart", myCart);
  }

  const totalQuantity = useMemo(() => {
    const tQ = Object.values(cart).reduce((prev, curr) => {
      return prev + curr;
    }, 0)
    return tQ;
  }
    , [cart])

  if (loadingUser) {
    return <Loading />
  }
  return (
    <div className="flex flex-col md:items-center w-full justify-between min-h-screen">
      <UserContext.Provider value={{ user, setUser }}>
        {user && <Header totalQuantity={totalQuantity} />}
        <Routes>
          <Route path="/login" element={
            <AuthRoute ><Login setUser={setUser} /></AuthRoute>
          } />
          <Route path="/signup" element={
            <AuthRoute ><Signup setUser={setUser} /></AuthRoute>
          } />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route index element={
            <UserRoute ><ProductListPage /></UserRoute>
          } />
          <Route path="/product/:id" element={
            <UserRoute ><ProductDetail onCartChange={handleCartCount} /></UserRoute>
          } /> {/*IF PARAMETER CHANGES THE COMPONENT RE-RUNS BUT REACT DOES NOT MOUNT AND UNMOUNT,
                                                                                      SAME INSTANCE IS USED.*/}
          <Route path="/cart" element={
            <UserRoute><CartPage Cart={cart} updateCart={updateCart} /></UserRoute>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {user && <Footer />}
      </UserContext.Provider>
    </div>


  )
}