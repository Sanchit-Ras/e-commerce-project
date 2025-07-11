import React, { useState } from 'react';
import CartData from './CartData.js';

export default function CartRow({ thumbnail, title, price, quantity }) {
  return (
    <div className="border-b border-gray-200 hover:bg-gray-50 sm:grid grid-cols-5 gap-2 items-center">
      
      <div className='hidden sm:flex justify-between items-center gap px-5'>
        <div className="border h-5 w-5 sm:flex items-center justify-center rounded-full border-gray-300 hidden">
            <button className="mb-1 text-gray-400">x</button>
          </div>
          <img 
            className="sm:size-15 size-20 object-cover" 
            src={thumbnail} 
            alt="cartproduct"
          />
      </div>

      <div className="px-10 py-5 hidden sm:block">
        <h1 className="text-sm text-red-500 font-medium">{title}</h1> 
      </div> 

      <div className="text-gray-600 px-10 py-5 font-semibold hidden sm:block">
        ${price}
      </div>
      

      <div className="text-gray-600 px-10 py-5 font-semibold hidden sm:block">
        {+quantity}
      </div>
      

      <div className="text-gray-600 px-10 py-5 font-semibold hidden sm:block">
        ${(price * (+quantity)).toFixed(2)}
      </div>
      {/* {small screens} */}

      <div className='grid grid-cols-2 p-2 sm:hidden h-32'>
          <img 
            className="sm:size-15 size-20 object-cover" 
            src={thumbnail} 
            alt="cartproduct"
          />
          <div className='flex flex-col items-start gap-2'>
            <h1 className="text-lg text-gray-600 font-bold">{title}</h1>
            <p className='text-xs text-gray-500 font-semibold'>${price}</p>
            <p className='border-2 text-xs border-primary-medium w-10 text-center rounded-md text-gray-500 font-semibold'>{+quantity}</p>
          </div>
      </div>
      <div className='sm:hidden'>

      </div>
    </div>

  );
}