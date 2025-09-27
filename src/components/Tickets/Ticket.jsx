import React from 'react';

const Ticket = ({ticket, handleTicketTask}) => {
    const {id, title, description, customer, priority, status, createdAt} = ticket;
    const handleTicket = () => {
        handleTicketTask(ticket);
    }
    return (
        <div onClick={handleTicket} className=''>
            <div className='bg-white p-5 rounded-2xl h-full shadow-lg space-y-3 text-black'>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                    <h2 className='font-bold  text-lg'>{title}</h2>
                    <div className={`rounded-lg p-1 flex items-center gap-1 h-fit w-fit ${(status==="Open")? "bg-[#B9F8CF] text-[#0B5E06]" : "bg-[#F8F3B9] text-[#9C7700]"}`}>
                        <i className="fa-solid fa-circle"></i>
                        <p className='text-nowrap font-bold'>{status}</p>
                    </div>
                </div>
                <p>{description}</p>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='flex justify-between gap-2'>
                        <p>#{id}</p>
                        <p className={`font-bold ${(priority==="High priority")? "text-red-600" : (priority==="Medium priority")?"text-orange-600" : "text-green-600"}`}>{priority}</p>
                    </div>
                    <div className='flex justify-between md:gap-2'>
                        <p className='font-semibold'>{customer}</p>
                        <div className='flex items-center md:gap-1'>
                            <i className="fa-solid fa-calendar-days"></i>
                            <p>{createdAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket; 