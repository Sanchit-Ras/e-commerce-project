import { Link } from 'react-router-dom';
import { GrCart } from "react-icons/gr";
import { useFormik, withFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import axios from 'axios';
function callSignupApi(values,bag) {
    const fullName=`${values.firstname} ${values.lastname}`;
    axios.post('https://myeasykart.codeyogi.io/signup',{
        fullName:fullName,
        email:values.email,
        password:values.password
    }).then((response)=>{
        const {user,token}=response.data;
        localStorage.setItem("token",token);
        bag.props.setUser(user);
    }).catch((error)=>{
        console.log("Signup failed: ",error);
    })
}

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    firstname: yup.string().matches(/^[a-zA-Z]+$/, "Please enter a valid name (Only letters allowed)").required(),
    lastname: yup.string().matches(/^[a-zA-Z]+$/, "Please enter a valid name (Only letters allowed)")
});//For validation purpose

 const initialValues= {
            email: '',
            password: '',
            firstname: '',
            lastname: ''
        }

function Signup({ values, handleSubmit, handleReset, handleChange, errors, touched, handleBlur }) {// handleBlur sets the touched(interacted with then left)

    return (
        <div className="bg-[url(https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/40f57d0a-9e8f-4f16-bb72-6cc6a39d37da.png)] min-h-screen w-full flex flex-col items-center justify-start">
            <GrCart className='text-white font-black sm:text-9xl sm:my-24 my-18 text-6xl'/>
            <form onSubmit={handleSubmit}
                className='p-10 border border-white rounded-xl flex flex-col gap-5'>
                <div className='sm:flex gap-3 flex flex-col'>
                    <div className='flex flex-col'>
                        <label htmlFor="f-name" className="sr-only">firstname</label>
                        <input type="text" name="firstname" id="f-name" onChange={handleChange} value={values.firstname??''} onBlur={handleBlur} placeholder='Firstname'
                            className='min-w-52 px-6 py-3 rounded-xl border-4 border-white placeholder-gray-50 text-white' />
                        {touched.firstname && errors.firstname && <p className='text-primary-light text-xs'>{errors.firstname}</p>}
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="l-name" className="sr-only">lastname</label>
                        <input type="text" name="lastname" id="l-name" onChange={handleChange} value={values.lastname??''} onBlur={handleBlur} placeholder='lastname'
                            className='min-w-52 px-6 py-3 rounded-xl border-4 border-white placeholder-gray-50 text-white' />
                        {touched.lastname && errors.lastname && <p className='text-primary-light text-xs'>{errors.lastname}</p>}
                    </div>
                </div>
                <div className='w-full'>
                    <label htmlFor="email" className="sr-only">email</label>
                    <input id='email' placeholder="Email" type="email" name="email" value={values.email ??''} onChange={handleChange} onBlur={handleBlur}
                        className='w-full px-6 py-3 rounded-xl border-4 border-white placeholder-gray-50 text-white' />
                    {touched.email && errors.email && <p className='text-primary-light text-xs'>{errors.email}</p>}
                </div>

                <div className='w-full'>
                    <label htmlFor="password" className="sr-only">password</label>
                    <input id='password' type="password" placeholder="Password" name="password" value={values.password??""} onChange={handleChange} onBlur={handleBlur}
                        className='w-full px-6 py-3 rounded-xl border-4 border-white placeholder-gray-50 text-white'></input>
                    {touched.password && errors.password && <p className='text-primary-light text-xs'>{errors.password}</p>}
                </div>

                <button type='submit' className='border border-white py-3 text-white font-semibold hover:bg-white hover:text-blue-700'>Signup</button>
            </form>
        </div>
    )
}
const customHOC=withFormik({initialValues:initialValues,handleSubmit:callSignupApi,validationSchema:schema});
export default customHOC(Signup);