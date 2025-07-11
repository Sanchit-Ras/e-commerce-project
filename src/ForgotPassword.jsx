import {Link} from 'react-router-dom';
import { GrCart } from "react-icons/gr";
import {useFormik} from 'formik';
import React from 'react';
import * as yup from 'yup';
function ForgotPassword(){
    function resetLinkApi({email}){
        console.log("Reset password link sent to: ",email);
    }

    const schema=yup.object().shape({
        email:yup.string().email().required(),
        password:yup.string().min(8).required()
    });//For validation purpose


    const {values,handleSubmit,handleReset,handleChange,errors,touched,handleBlur}=useFormik({ // handleBlur sets the touched(interacted with then left)
        initialValues:{
            email:''
        },
        onSubmit:resetLinkApi,
        validationSchema:schema
    })


    return( 
    <div className="bg-[url(https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/40f57d0a-9e8f-4f16-bb72-6cc6a39d37da.png)] min-h-screen w-full flex flex-col items-center justify-start">
        <GrCart className='text-white font-black text-9xl my-24'/>
        <form onSubmit={handleSubmit}
        className='p-10 border border-white rounded-xl flex flex-col gap-5'>
            <div>
                <label htmlFor="email" className="sr-only">email</label>
                <input id='email' placeholder="Email" type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}
                className='min-w-52 px-6 py-3 rounded-xl border-4 border-white placeholder-gray-50 text-white'/>
                {touched.email &&errors.email &&<p className='text-primary-light'>{errors.email}</p>}
            </div>
            <button type='submit' className='border border-white py-3 text-white font-semibold hover:bg-white hover:text-blue-700'>Send reset link</button>
        </form>
    </div>
    )
}
export default ForgotPassword;