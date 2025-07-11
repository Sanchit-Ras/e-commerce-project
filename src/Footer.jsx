import React, { useState, useEffect } from "react";

export default function Footer(){
  return (
    <div className="w-full bg-slate-700 flex justify-center text-xs text-white py-6">
      <div className="w-[70%] md:w-5xl flex justify-between">
        <p className="inline">Copyright | Cheaply</p>
        <p className="inline">Powered By Cheaply</p>
      </div>
    </div>
  )
}