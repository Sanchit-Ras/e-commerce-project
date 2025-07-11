import {Link} from 'react-router-dom'
export default function NotFound(){
    return (
        <div>
           <img src='https://pplx-res.cloudinary.com/image/upload/v1751803172/gpt4o_images/rhqe3xqpxxetqkunlho7.png' alt="Not Found Image" className="w-52" /> 

           <Link to="/" className='py-3 px-6 bg-black text-white font-black text-xl rounded-sm'>Go To HomePage</Link>
        </div>
    )
}