import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail.jsx";
import ProductListPage from "./ProductListPage";
import CartPage from "./CartPage.jsx";
import NotFound from "./NotFound.jsx";
import Login from "./Login.jsx";
import { useState, useMemo, useCallback } from 'react';
import Signup from "./Signup.jsx";
import ForgotPassword from "./ForgotPassword.jsx";
import AuthRoute from "./AuthRoute.jsx";
import UserRoute from "./UserRoute.jsx";
import Alerts from "./Alerts.jsx";
import UserProvider from "./providers/UserProvider.jsx";
import AlertProvider from "./providers/AlertProvider.jsx";
import CartProvider from "./providers/CartProvider.jsx";
export default function App() {
  const savedData = JSON.parse(localStorage.getItem("my-cart") || "{}");
  const [cart, setCart] = useState(savedData);

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


  return (
    <div className="flex flex-col md:items-center w-full justify-between min-h-screen">
      <UserProvider>
        <CartProvider>
          <AlertProvider>
            <Alerts />
            <Header />
            <Routes>
              <Route path="/login" element={
                <AuthRoute ><Login /></AuthRoute>
              } />
              <Route path="/signup" element={
                <AuthRoute ><Signup /></AuthRoute>
              } />
              <Route path="/forgot_password" element={<ForgotPassword />} />
              <Route index element={
                <ProductListPage />
              } />
              <Route path="/product/:id" element={
                <ProductDetail />
              } /> {/*IF PARAMETER CHANGES THE COMPONENT RE-RUNS BUT REACT DOES NOT MOUNT AND UNMOUNT,
                                                                                      SAME INSTANCE IS USED.*/}
              <Route path="/cart" element={
                <CartPage />
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </AlertProvider>
        </CartProvider>
      </UserProvider>
    </div>

  )
}