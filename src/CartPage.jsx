import React, { useState, useEffect } from 'react';
import CartList from './CartList.jsx';
import { getProduct } from './database.js';
import Loading from './Loading.jsx'
export default function CartPage({ Cart, updateCart }) {
  const [cartData, updateCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [localCart, setLocalCart] = useState(Cart);

  useEffect(() => {
    setLocalCart(Cart);
  }, [Cart])

  useEffect(() => {
    setLoading(true);
    const promises = Object.keys(Cart).map(productId => getProduct(productId).then(response => (
      { ...response.data, quantityInCart: Cart[productId] }
    ))
    );
    Promise.all(promises).then(response => {
      console.log("data in response: ", response);
      updateCartData(response);
      setLoading(false);
    });
  }, [Cart]);

  function handleRemoveCart(productId) {
    const newCart = { ...Cart };
    delete newCart[productId];
    updateCart(newCart);
  }
  if (Object.keys(Cart).length == 0) {
    return <div className='text-4xl font-black md:text-9xl w-full text-center'>Cart is empty</div>
  }
  if (loading) {
    return <Loading />
  }
  const cartTotals = (cartData.map((prod) => prod.price * prod.quantityInCart).reduce((prev, curr) => prev + curr, 0)).toFixed(2);
  return (
    <div className="bg-white w-full flex flex-col items-end p-5">
      <CartList products={cartData} handleRemoveCart={handleRemoveCart} localCart={localCart} setLocalCart={setLocalCart} updateCart={updateCart} />
      <div className="w-md text-gray-600 border border-gray-300 mt-4 hidden sm:block rounded-b-lg">
        <div className="border-b border-gray-300 bg-gray-50 grid grid-cols-2">
          <div className="py-3 font-semibold">Cart Totals</div>
          <div></div>
        </div>

        <div>
          <div className="border-b border-gray-300 grid grid-cols-2">
            <div className="p-3 font-semibold">Subtotal</div>
            <div className="p-3">${cartTotals}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="p-3 font-semibold">Total</div>
            <div className="p-3">${cartTotals}</div>
          </div>
        </div>
        <button className="w-full py-4 text-white rounded-b-lg bg-shadow-lg font-semibold text-lg bg-primary-medium hover:bg-primary-dark">
          PROCEED TO CHECKOUT
        </button>
      </div>

      <div className='sm:hidden mt-6 w-full'>
        {/*small screen cart totals */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 mb-4 shadow-sm border border-gray-200">
          <h3 className="text-gray-700 font-semibold mb-3 text-center">Cart Totals</h3>

          <div className="space-y-2">
            <div className="flex justify-between items-center py-2 border-b px-1 border-gray-200">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">${cartTotals}</span>
            </div>
            <div className="flex justify-between items-center py-3 rounded-lg px-1 mt-3">
              <span className="text-gray-700 font-semibold">Total</span>
              <span className="font-bold text-red-600 text-lg">${cartTotals}</span>
            </div>
          </div>
        </div>
        <button className="w-full py-4 text-white rounded-lg bg-shadow-lg font-semibold text-lg bg-primary-medium">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  )
}