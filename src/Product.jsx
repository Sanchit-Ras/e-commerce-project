import {Link} from 'react-router-dom'



export default function Product(data){
  return (
    <div className="md:max-w-80 relative p-2 w-full">
      <img className="w-full aspect-square bg-gradient-to-tr p-5 from-[#c6c09c] to-white" 
        src={data.thumbnail}/>
      <h1 className="text-gray-400 text-md md:text-xs py-1">{data.category}</h1>
      <p className=" text-lg md:text-sm pb-1 font-medium">{data.title}</p>
      {+data.discountPercentage>1 && 
        (<p className="inline text-xs text-gray-400 mr-1">{(data.price / (1 - data.discountPercentage / 100)).toFixed(2)}</p>)}
      <p className="text-md md:text-xs font-medium inline">${data.price}</p> 
      {+data.discountPercentage>1 && 
      (<div className="text-red-500 md:text-sm text-xs font-bold rounded-full size-10 pr-2 pl-1 pt-2 absolute -top-1 -right-1 flex justify-center ">{(data.discountPercentage).toFixed(1)}% OFF</div>)}
      <Link to={'/product/'+data.id} className="text-blue-500 block">View Details</Link>
    </div> 
  )
}
