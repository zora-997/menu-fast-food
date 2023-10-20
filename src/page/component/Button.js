import React, { useEffect, useState } from 'react'

const Button = () => {

    const [bg, setGb] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {
                setGb(true)

            } else {
                setGb(false)
            }
        })
    }
        , [])

    return (



        <div className='flex justify-start items-center overflow-x-auto ' >
            <div className={` bg-white p-5 overscroll-x-auto scroll-smooth whitespace-nowrap duration-300 
               ${bg && 'fixed  md:max-w-[1060px] w-full top-0 overflow-x-auto '} `}>
                <div className='  bg-white  flex  gap-5  '>
                    <button className='border px-8 rounded-full '  >Hamber</button>
                    <button className='border  rounded-full w-full'  >Hamber chekn</button>
                    <button className='border  rounded-full w-full '  >Hamberoij meat</button>
                    <button className='border  rounded-full w-full'  >chekn iojoiGr</button>
                    <button className='border  rounded-full w-full'  >chekn iojoiGr</button>
                    <button className='border  rounded-full w-full'  >chekn iojoiGr</button>
                    <button className='border rounded-full w-full '  >Hamberun Gr</button>
                    <button className='border rounded-full w-full '  >Hamber Gr</button>
                    <button className='border rounded-full w-full '  >Hamber Gr</button>
                    <button className='border rounded-full w-full '  >Hamber Gr</button>
                    <button className='border rounded-full w-full '  >Hamber Gr</button>
                    <button className='border rounded-full w-full '  >Hamber Gr</button>
                    <button className='border rounded-full w-full '  >Hamber Gr</button>
                    <button className='border rounded-full w-full '  >Hamber Gr</button>
                    <button className='border rounded-full w-full '  >Hamber Gr</button>
                    <button className='border rounded-full w-full '  >Hamber Gr</button>
                    <button className='border rounded-full w-full'  >XX</button>
                    <button className='border rounded-full w-full '  ></button>
                </div>

            </div>
        </div>

    )
}

export default Button