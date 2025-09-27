import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Tickets from './components/Tickets/Tickets'
import TicketStatus from './components/Tickets/TicketStatus'
import { ToastContainer } from 'react-toastify';

const ticketPromise = fetch('ticketInfo.json').then(res => res.json());

  function App() {
    const [ticketStatus , setTicketStatus] = useState([]);
    const [resolves, setResolves] = useState([]);
    const [allTickets, setAllTickets] = useState([]);
  return (
    <>
      <Navbar/>
      <div className='bg-[#f5f5f5] pb-10'>
      <Banner ticketStatus={ticketStatus} resolves={resolves}/>
      <div className='grid grid-cols-5 w-11/12 mx-auto'>
        <div className='col-span-5 md:col-span-4'>
          <Suspense fallback={<h2>Tickets loading...</h2>}>
            <Tickets ticketStatus={ticketStatus} setTicketStatus={setTicketStatus} ticketPromise={ticketPromise} allTickets={allTickets} setAllTickets={setAllTickets}/>
          </Suspense>
        </div>
        <div className='col-span-full md:col-span-1 my-8 md:my-24  md:ml-5'>
        <TicketStatus ticketStatus={ticketStatus} resolves={resolves} setResolves={setResolves} setTicketStatus={setTicketStatus} setAllTickets={setAllTickets}/>
        </div>
      </div>
      </div>
        <Footer/>
        <ToastContainer/>
    </>
  )
}

export default App
