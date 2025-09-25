import React from 'react';
const Banner = () => {
    return (
        <div className='grid grid-cols-2 gap-5 w-11/12 mx-auto pt-10'>
            <div className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] py-20 text-center text-white rounded-2xl bg-cover bg-center'>
                <h1 className='text-lg'>In Progress</h1>
                <span className='font-bold text-4xl'>0</span>
            </div>
            <div className='bg-gradient-to-r from-[#54cf68] to-[#00827a] py-20 text-center text-white rounded-2xl'>
                <h1 className='text-lg'>Resolved</h1>
                <span className='font-bold text-4xl'>0</span>
            </div>
        </div>
    );
};

export default Banner;