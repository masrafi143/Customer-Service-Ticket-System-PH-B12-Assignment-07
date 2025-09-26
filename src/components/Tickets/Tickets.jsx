import React, { use } from 'react';
import Ticket from './Ticket';

const Tickets = ({ticketPromise}) => {
    const tickets = use(ticketPromise);
    return (
        <div className='mt-10'>
            <h2 className='font-bold text-2xl md:text-3xl'>Customer Tickets</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
            {
                tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket}/>)
            }
            </div>
        </div>
    );
};

export default Tickets;