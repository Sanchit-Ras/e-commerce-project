import React, { useState } from 'react';
import CartRow from './CartRow.jsx';

export default function CartList({ products, handleRemoveCart,localCart,setLocalCart,updateCart }) {
  // const totalAmout=products.reduce()
  function handleUpdateCart(){
    updateCart(localCart);
  }
  return (
    
      <div className="w-full border border-gray-200 text-right">
        <div className="bg-gray-50 border-b-2 border-gray-200 sm:grid grid-cols-5 gap-4 hidden">
          <div></div>
          <div className="font-semibold text-gray-600 py-4 px-10">Product</div>
          <div className="font-semibold text-gray-600 py-4 px-10">Price</div>
          <div className="font-semibold text-gray-600 py-4 px-10">Quantity</div>
          <div className="font-semibold text-gray-600 py-4 px-10">Subtotal</div>
        </div>

        <div>
          {products.map(items => (
            <CartRow key={items.id} {...items} updateGlobalCart={handleRemoveCart} localCart={localCart} setLocalCart={setLocalCart} />
          ))}
        </div>

        <div className="grid sm:grid-cols-4 gap-2 sm:items-center grid-cols-1 p-2">
          <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <input
                type="text"
                placeholder="Coupon code"
                className="border p-2 border-gray-300 rounded-lg w-full text-sm focus:outline-none focus:ring-1 focus:ring-primary-medium"
              />
            </div>
            <div>
              <button className="text-white bg-primary-medium px-4 py-2 rounded-lg w-full sm:w-auto hover:bg-primary-dark">
                Apply Coupon
              </button>
            </div>
          </div>
          <div className="hidden sm:block"></div>
          <div>
            <button onClick={handleUpdateCart} 
            className="text-white bg-primary-light px-4 py-2 rounded-lg w-full sm:w-auto hover:bg-primary-medium">
              Update Cart
            </button>
          </div>
        </div>
      </div>
  );
}