import React, { useState } from 'react';
import CartRow from './CartRow.jsx';

export default function CartList({ products, handleRemoveCart,localCart,setLocalCart,updateCart }) {
  
  function handleUpdateCart(){
    updateCart(localCart);
  }
  return (
    <div className="bg-white w-full flex flex-col items-end p-5">
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
      <div className="w-md text-gray-600 border border-gray-300 mt-4 hidden sm:block rounded-b-lg">
        <div className="border-b border-gray-300 bg-gray-50 grid grid-cols-2">
          <div className="py-3 font-semibold">Cart Totals</div>
          <div></div>
        </div>

        <div>
          <div className="border-b border-gray-300 grid grid-cols-2">
            <div className="p-3 font-semibold">Subtotal</div>
            <div className="p-3">Price</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="p-3 font-semibold">Total</div>
            <div className="p-3">Price</div>
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
              <span className="font-semibold">Price</span>
            </div>
            <div className="flex justify-between items-center py-3 bg-red-50 rounded-lg px-1 mt-3">
              <span className="text-gray-700 font-semibold">Total</span>
              <span className="font-bold text-red-600 text-lg">Price</span>
            </div>
          </div>
        </div>
        <button className="w-full py-4 text-white rounded-lg bg-shadow-lg font-semibold text-lg bg-primary-medium">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
}