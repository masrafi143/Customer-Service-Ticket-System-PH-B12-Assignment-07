import React from 'react';
import { toast } from 'react-toastify';

const TicketStatus = ({ticketStatus, setTicketStatus, resolves, setResolves, setAllTickets}) => {
    
    return (
            <>
                <div className='space-y-3 text-black'>
                    <h2 className='font-bold text-2xl md:text-3xl'>Task Status</h2>
                    {ticketStatus.length==0 && <p className='font-semibold'>Select a ticket to add to Task Status</p>} 
                    {
                        ticketStatus.map(ticket => <Status key={ticket.id} ticketStatus={ticketStatus} setTicketStatus={setTicketStatus} resolves={resolves} setResolves={setResolves} setAllTickets={setAllTickets} ticket={ticket} />)
                    }
                    <h2 className='font-bold text-2xl md:text-3xl'>Resolved Task</h2>
                    {resolves.length==0 && <p className='font-semibold'>No resolved tasks yet.</p>}
                    {
                        resolves.map(resolve => <Resolved key={resolve.id} resolve={resolve} />)
                    }
                </div>
            </>
        );
    };
    
    const Status = ({ticket, ticketStatus, setTicketStatus, resolves,setResolves, setAllTickets}) => {
        const {id, title} = ticket;
        const handleResolved = () => {
            toast(`Resolved ${title}`);
            const newResolve = [...resolves, ticket];
            setResolves(newResolve);
            const remaining = ticketStatus.filter(ticket => ticket.id !== id);
            setTicketStatus(remaining);
            setAllTickets(prev => prev.filter(t => t.id !== id));
        }
        return(
            <>
                <div className='p-3 space-y-2 bg-white rounded-2xl shadow-2xl'>
                <h1 className='font-semibold text-lg'>{title}</h1>
                <button onClick={handleResolved} className='btn bg-green-600 w-full text-white font-bold'>Complete</button>
                </div>
            </>
        );
    };
const Resolved = ({resolve}) => {
    return(
        <>
            <div className='p-2 rounded-2xl bg-blue-300 text-white shadow-2xl'>
                <h2 className='font-semibold'>{resolve.title}</h2>
            </div>
        </>
    );
};

export default TicketStatus;
