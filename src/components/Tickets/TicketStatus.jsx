import React, { useState } from 'react';

const TicketStatus = ({ticketStatus, setTicketStatus, resolves, setResolves}) => {
    
    return (
            <>
                <div className='h-full space-y-3'>
                    <h2 className='font-bold text-2xl md:text-3xl'>Task Status</h2>
                    {ticketStatus.length==0 && <p className='font-semibold'>Select a ticket to add to Task Status</p>} 
                    {
                        ticketStatus.map(ticket => <Status key={ticket.id} ticketStatus={ticketStatus} setTicketStatus={setTicketStatus} resolves={resolves} setResolves={setResolves} ticket={ticket} />)
                    }
                    <h2 className='font-bold text-2xl md:text-3xl'>Resolved Task</h2>
                    {resolves.length==0 && <p className='font-semibold'>No resolved tasks yet.</p>}
                    {
                        resolves.map(resolve => <Resolved key={resolve} resolve={resolve} />)
                    }
                </div>
            </>
        );
    };
    
    const Status = ({ticket, ticketStatus, setTicketStatus, resolves,setResolves}) => {
        const {id, title} = ticket;
        const handleResolved = (title) => {
            alert(`${title} resolved`);
            const newResolve = [...resolves, title];
            setResolves(newResolve);
            const remaining = ticketStatus.filter(ticket => ticket.id !== id);
            setTicketStatus(remaining);
        }
        return(
            <>
                <div className='p-3 space-y-2 bg-white rounded-2xl shadow-2xl'>
                <h1 className='font-semibold text-lg'>{title}</h1>
                <button onClick={() => handleResolved(title)} className='btn bg-green-600 w-full text-white font-bold'>Complete</button>
                </div>
            </>
        );
    };
const Resolved = ({resolve}) => {
    return(
        <>
            <div className='p-2 rounded-2xl bg-blue-300 text-white shadow-2xl'>
                <h2 className='font-semibold'>{resolve}</h2>
            </div>
        </>
    );
};

export default TicketStatus;