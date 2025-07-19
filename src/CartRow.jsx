import React, { useState } from 'react';
import CartData from './CartData.js';

export default function CartRow({ thumbnail, title, price, quantityInCart, id, updateGlobalCart,localCart,setLocalCart }) {
  function removeItem() {
    updateGlobalCart(id);
  }
  function updateLocalCart(event){
    const newLocalCart={...localCart,[id]:+event.target.value};
    setLocalCart(newLocalCart);
  }
  return (
    <div className="border-b border-gray-200 hover:bg-gray-50 sm:grid grid-cols-5 gap-2 items-center">

      <div className='hidden sm:flex justify-between items-center gap px-5'>
        <div className="border h-5 w-5 sm:flex items-center justify-center rounded-full border-gray-300 hover:bg-primary-light hidden">
          <button className="mb-1 text-gray-400 hover:text-black" onClick={removeItem}>x</button>
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


      <div className="px-10 py-5 hidden sm:block">
        <input type="number" value= {localCart[id]?? ''} onChange={updateLocalCart}
        className="text-gray-600 px-3 py-1 font-semibold text-center bg-red-50 rounded-lg border-2 border-primary-light w-20" />
      </div>
        
     


      <div className="text-gray-600 px-10 py-5 font-semibold hidden sm:block">
        ${(price * (+quantityInCart)).toFixed(2)}
      </div>
      {/* small screens */}

      <div className="sm:hidden p-4">
        <div className="flex items-start gap-4">
          <img
            className="size-20 object-cover rounded"
            src={thumbnail}
            alt="cartproduct"
          />
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h1 className="text-sm text-red-500 font-medium pr-2">{title}</h1>
              <div className="border h-6 w-6 flex items-center justify-center rounded-full border-gray-300 hover:bg-primary-light flex-shrink-0">
                <button className="text-gray-400 hover:text-black text-sm" onClick={removeItem}>×</button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-500">Price: </span>
                <span className="text-gray-600 font-semibold">${price}</span>
              </div>
              <div>
                <span className="text-gray-500">Qty: </span>
                <span className="text-gray-600 font-semibold">{+quantityInCart}</span>
              </div>
              <div className="col-span-2">
                <span className="text-gray-500">Total: </span>
                <span className="text-gray-600 font-semibold">${(price * (+quantityInCart)).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}