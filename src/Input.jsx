export default function Input({ }) {
    return (
        <div className='flex flex-col'>
            <label htmlFor="f-name" className="sr-only">firstname</label>
            <input type="text" name="firstname" id="f-name" onChange={handleChange} value={values.firstname} onBlur={handleBlur} placeholder='Firstname'
                className='min-w-52 px-6 py-3 rounded-xl border-4 border-white placeholder-gray-50 text-white' />
            {touched.firstname && errors.firstname && <p className='text-primary-light text-xs'>{errors.firstname}</p>}
        </div>
    )
}