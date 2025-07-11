import React, { useState, useEffect } from "react";
import Product from "./Product.jsx";

export default function ProductList({products}) {
  return (
    <div className="flex flex-wrap md:grid grid-cols-3 gap-y-5">
  
      
      {products.map(function(item){
                    return (
                            <Product 
                              key={item.id}  
                              {...item}
                            />);
      })}
      
    </div>
  );
}
