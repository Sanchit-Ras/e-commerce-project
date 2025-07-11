import {Link} from 'react-router-dom';
import { GrCart } from "react-icons/gr";
import {useFormik} from 'formik';
import React from 'react';
import * as yup from 'yup';
function Login(){
    function callLoginApi({email,password}){
        console.log("Data sent",email,password);
    }

    const schema=yup.object().shape({
        email:yup.string().email().required(),
        password:yup.string().min(8).required()
    });//For validation purpose


    const {values,handleSubmit,handleReset,handleChange,errors,touched,handleBlur}=useFormik({ // handleBlur sets the touched(interacted with then left)
        initialValues:{
            email:'',
            password:''
        },
        onSubmit:callLoginApi,
        validationSchema:schema
    })


    return( 
    <div className="bg-[url(https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/40f57d0a-9e8f-4f16-bb72-6cc6a39d37da.png)] min-h-screen w-full flex flex-col items-center justify-start">
        <GrCart className='text-white font-black text-9xl my-24'/>
        <form onSubmit={handleSubmit}
        className='p-10 border border-white rounded-xl flex flex-col'>
            <div>
                <label htmlFor="email" className="sr-only">email</label>
                <input id='email' placeholder="Email" type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}
                className='min-w-52 px-6 py-3 rounded-xl border-4 border-white placeholder-gray-50 text-white'/>
            </div>
            {touched.email &&errors.email &&<p className='text-primary-light'>{errors.email}</p>}
            <div>
                <label htmlFor="password" className="sr-only">password</label>
                <input id='password' type="password" placeholder="Password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur}
                className='min-w-52 px-6 py-3 rounded-xl border-4 border-white placeholder-gray-50 mt-5 mb-2 text-white'></input>
            </div>
            {touched.password && errors.password &&<p className='text-primary-light'>{errors.password}</p>}
            <p className='text-gray-300 text-xs font-semibold mb-5'>New? <Link to="/signup" className='text-white hover:text-gray-300'>click here to signup.</Link></p>
            <button type='submit' className='border border-white py-3 text-white font-semibold hover:bg-white hover:text-blue-700'>Login</button>
            <Link to="/forgot_password" className='text-white hover:text-gray-300 text-sm font-semibold text-right'>Forgot Password?</Link>
        </form>
        
    </div>
    )
}
export default Login;