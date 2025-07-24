import { useEffect, useState } from "react";
import {withAlert} from "./withProvider"
const baseClasses = "w-full max-w-md mx-auto rounded-lg shadow-md p-4 my-2 flex items-center justify-between";
// Variant-specific classes
const variants = {
    success: {
        container: "bg-green-100 border-l-4 border-green-500",
        iconColor: "text-green-500",
        textColor: "text-green-800",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    error: {
        container: "bg-red-100 border-l-4 border-red-500",
        iconColor: "text-red-500",
        textColor: "text-red-800",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    }
};

const Alerts = ({ alert,handleDismiss }) => {
    useEffect(()=>{
        if(alert){
            const timeout=setTimeout(handleDismiss,3*1000);
            return ()=>(clearTimeout(timeout));
        }
        
    },[alert])
    if(!alert){
        return;
    }
    const {type,message}=alert;
    const selectedVariant = variants[type];
    
    
    return (
        <div className={`${baseClasses} ${selectedVariant.container}`} role="alert">
            <div className="flex items-center">
                <div className={selectedVariant.iconColor}>
                    {selectedVariant.icon}
                </div>
                <p className={`ml-3 font-medium ${selectedVariant.textColor}`}>
                    {message}
                </p>
            </div>
            <button onClick={handleDismiss} className={`ml-4 ${selectedVariant.textColor} hover:opacity-75`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
};
export default withAlert(Alerts);
