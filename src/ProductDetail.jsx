import {useState,useEffect} from 'react';
import {useParams,Link} from 'react-router-dom';
import { LuCircleArrowLeft } from "react-icons/lu";
import {getProduct} from './database.js';
import Loading from './Loading.jsx';
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import NotFound from './NotFound.jsx';
export default function ProductDetail({onCartChange}){
  const id=+useParams().id;
  const [quantity,setQuantity]=useState(1);
  const [product,updateProduct]=useState();
  const [loading,setLoading]=useState(true);

  function handelQuantity(event){
    setQuantity(+event.target.value);
  }
  function handleProductCount(){
    onCartChange(id,quantity);
  }
  useEffect(()=>{
    const promise=getProduct(id);
    promise.then((response)=>{
      updateProduct(response.data);
      setLoading(false);
      setQuantity(1);
    }).catch((error)=>{
      setLoading(false);
      
    });
  },[id]);
  if(loading){
    return (
      <Loading/>
    )
  }
  if(!product) return <NotFound/>
  return (
   
    <div className='flex w-full justify-center items-center '>
      {id>1 &&<Link className='sm:text-9xl text-2xl sm:text-gray-300 hover:text-gray-400' to={'/product/'+(id-1)}>
        <IoIosArrowBack/>
      </Link>}    
      <div className="flex flex-col md:flex-row py-4 px-8 my-4 bg-white gap-10 max-w-7xl relative">
        <Link className="p-2 text-2xl self-start absolute sm:-top-8 sm:left-0 top-0 left-0 bg-white" to="/"><LuCircleArrowLeft /></Link>
        <img className='md:w-[50%]'
          src={product.thumbnail} alt="product"/>
        <div className='flex flex-col gap-4'>
          <h1 className="text-gray-500  text-2xl md:text-4xl xl:text-6xl">{product.title}</h1>
          <h2 className="text-gray-600 text-xl md:text-4xl xl:text-5xl font-medium">${product.price}</h2>
          <p className="text-gray-500 xl:text-xl">{product.description}</p>
          <div>
            <input type="number" value={quantity} onChange={handelQuantity} className='w-15 p-1.5 text-center border mr-1 md:text-xl'/>
            <button className="px-4 py-2 text-white bg-primary-light rounded-md md:text-xl hover:bg-primary-medium" onClick={handleProductCount}>ADD TO CART</button>
          </div>

        </div>
      </div>
      <Link className='sm:text-9xl text-2xl sm:text-gray-300 hover:text-gray-400' to={'/product/'+(id+1)}>
        <IoIosArrowForward />
      </Link> 
   </div>
  )
}