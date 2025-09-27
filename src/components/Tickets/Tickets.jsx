import React, { use } from 'react';
import Ticket from './Ticket';
import { toast } from 'react-toastify';

const Tickets = ({ticketPromise,ticketStatus,setTicketStatus, allTickets, setAllTickets}) => {
    const handleTicketTask = (ticket) => {
      toast(ticket.title);
        const newTicketStatus = [...ticketStatus, ticket];
        setTicketStatus(newTicketStatus);
    }
    const tickets = use(ticketPromise);
    if(allTickets.length===0 && tickets.length>0){
      setAllTickets(tickets);
    }
    return (
        <div className='mt-10'>
            <h2 className='font-bold text-2xl md:text-3xl'>Customer Tickets</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
            {
                allTickets.map(ticket => <Ticket handleTicketTask={handleTicketTask} key={ticket.id} ticket={ticket}/>)
            }
            </div>
        </div>
    );
};

export default Tickets;