import React, { useState } from 'react';
import CartRow from './CartRow.jsx';

export default function CartList({ products }) {
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
            <CartRow key={items.id} {...items} />
          ))}
        </div>
        
        <div className="grid sm:grid-cols-4 gap-2 sm:items-center grid-cols-2 p-2">
          <div>
            <input 
              type="text" 
              placeholder="Coupon code" 
              className="border p-1 border-gray-300 my-4 mx-2 rounded-xl sm:rounded-none sm:w-52 text-sm"
            />
          </div>
          <div>
            <button className="text-white bg-red-500 px-4 py-1 border border-red-500 rounded-md ml-4 hover:bg-red-600">
              Apply Coupon
            </button>
          </div>
          <div></div>
          <div>
            <button className="text-white bg-red-400 px-4 py-1 border border-red-500 rounded-md mr-4">
              Update Cart
            </button>
          </div>
        </div>
      </div>
      <div className="w-md text-gray-600 border border-gray-300 mt-4 hidden sm:block">
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
      </div>
      
      <div className="p-4 border border-gray-300 w-md hidden sm:block">
        <button className="w-full bg-red-500 py-2 text-white rounded-md">
          PROCEED TO CHECKOUT
        </button>
      </div>
      <div className='sm:hidden py-2 px-6 w-full my-3 flex flex-col gap-4'>
          <p className='text-gray-600 font-semibold bg-gradient-to-tr from-gray-300 to-gray-100 p-2 rounded-md shadow-gray-400 shadow-lg'>Total:</p>
          <button className="w-full py-2 text-white rounded-md bg-gradient-to-tr from-rose-600 to-red-300 shadow-gray-400 shadow-lg">
            PROCEED TO CHECKOUT
          </button>
      </div>
    </div>
  );
}