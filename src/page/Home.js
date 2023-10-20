import React, { useEffect, useState } from 'react'
import mlt from "../assets/img/mlt.jpg";
import Header from './Header';
import Button from './component/Button';
import Foods from './Foods';


const Home = () => {

    return (
        <div className=''>
            <div className=' mx-auto  max-w-[1100px] p-5 grid gap-3'>
                <Header />
                <div className=''>
                    <img src={mlt} alt='mlt' className='h-[500px] w-full  object-cover ' />
                </div>
                <Button />
                <Foods />

            </div>


        </div>
    )
}

export default Home