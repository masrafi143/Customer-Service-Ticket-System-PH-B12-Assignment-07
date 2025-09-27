import React from 'react';
const Banner = ({ticketStatus, resolves}) => {
    return (
        <div className='grid grid-cols-2 gap-5 w-11/12 mx-auto pt-10'>
            {/* In Progress Card */}
            <div className='relative py-20 text-center text-white rounded-2xl bg-gradient-to-r from-[#632ee3] to-[#9f62f2] overflow-hidden'>
                <div 
                    className="absolute inset-y-0 left-0 w-1/2 bg-cover "
                    style={{ backgroundImage: `url(/vector1.png)` }}
                ></div>
                <div 
                    className="absolute inset-y-0 right-0 w-1/2 bg-cover scale-x-[-1]"
                    style={{ backgroundImage: `url(/vector1.png)` }}
                ></div>
                {/* <div className='relative z-10'> */}
                    <h1 className='text-lg'>In Progress</h1>
                    <span className='font-bold text-4xl'>{ticketStatus.length}</span>
                {/* </div> */}
            </div>

            {/* Resolved Card */}
            <div className='relative py-20 text-center text-white rounded-2xl bg-gradient-to-r from-[#54cf68] to-[#00827a] overflow-hidden'>
                <div 
                    className="absolute inset-y-0 left-0 w-1/2 bg-cover"
                    style={{ backgroundImage: `url(/vector1.png)` }}
                ></div>
                <div 
                    className="absolute inset-y-0 right-0 w-1/2 bg-cover scale-x-[-1]"
                    style={{ backgroundImage: `url(/vector1.png)` }}
                ></div>
                {/* <div className='relative z-10'> */}
                    <h1 className='text-lg'>Resolved</h1>
                    <span className='font-bold text-4xl'>{resolves.length}</span>
                {/* </div> */}
            </div>
        </div>
    );
};

export default Banner;