import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-between items-center  '>
            <div className='flex items-center gap-4'>
                <h4 className='font-bold text-2xl'>BEST FOOD</h4>
                <p className='md:flex hidden bg-gray-800 text-white rounded-full pl-2  items-center'>Delivery <span className='span-2 bg-white border text-black rounded-full'>Pic Up</span></p>
            </div>
            <div className='sm:w-[300px] md:w-[400px] '>
                <input placeholder='Search' type='text' className='w-full p-2 border rounded-2xl' />
            </div>
        </div>

    )
}

export default Header