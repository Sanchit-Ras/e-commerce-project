import React from "react";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import { Link,useSearchParams  } from "react-router-dom";

export default function Pages({ current_page, last_page,params}) {
  return (
    <div className="w-full flex gap-1 md:justify-start justify-center items-center px-2">
      {current_page>1&&<Link className="p-1 size-7 flex justify-center items-center rounded-full text-primary-medium hover:bg-primary-light hover:text-white" to={'?'+new URLSearchParams({...params,page:current_page-1})}><IoIosArrowBack/></Link>}
      <Link className="p-2 text-white bg-primary-light h-10 w-10 text-center">{current_page}</Link>
      {current_page!=last_page&&<Link className="p-2 w-10 h-10 text-center text-primary-medium border border-primary-light hover:bg-primary-light hover:text-white" to={'?'+new URLSearchParams({...params,page:current_page+1})}>{current_page+1}</Link>}
      {current_page+1<last_page&&<Link className="p-1 size-7 flex justify-center items-center rounded-full text-primary-medium hover:bg-primary-light hover:text-white" to={'?'+new URLSearchParams({...params,page:current_page+2})}><IoIosArrowForward /></Link>}
    </div>
  )
} 