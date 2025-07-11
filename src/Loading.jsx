import { IoSunny } from "react-icons/io5";
import { FaCloud } from "react-icons/fa";
import { FaFan } from "react-icons/fa";
export default function Loading(){
    return (
        <div className="flex flex-col items-center p-20 relative min-h-96 min-w-96 rounded-full bg-sky-200">
            <>
                <div className="rounded-full animate-spin shadow-xl z-10">
                    <FaFan className="text-3xl"/>
                </div>
                <div className="w-68 h-3 rounded-full bg-amber-900 z-10"></div>
                <div className="size-68 bg-sky-200 z-10"></div>
                <div className=" bg-sky-500 animate-spin size-68 rounded-full text-yellow-300 text-5xl p-6 absolute top-8"><IoSunny /></div>

                <div className="text-white text-8xl absolute -top-3"><FaCloud /></div>
                <div className="text-white text-6xl absolute top-10 left-18"><FaCloud /></div>
                <div className="text-white text-6xl absolute top-10 right-18"><FaCloud /></div>
            
            </>
        </div>
        
    );
}