import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Tickets from './components/Tickets/Tickets'
import TicketStatus from './components/Tickets/TicketStatus'

const ticketPromise = fetch('ticketInfo.json').then(res => res.json());

  function App() {
    const [ticketStatus , setTicketStatus] = useState([]);
    const [resolves, setResolves] = useState([]);
  return (
    <>
      <Navbar/>
      <div className='bg-[#f5f5f5] pb-10'>
      <Banner ticketStatus={ticketStatus} resolves={resolves}/>
      <div className='grid grid-cols-5 w-11/12 mx-auto'>
        <div className='col-span-3 md:col-span-4'>
          <Suspense fallback={<h2>Tickets loading...</h2>}>
            <Tickets ticketStatus={ticketStatus} setTicketStatus={setTicketStatus} ticketPromise={ticketPromise}/>
          </Suspense>
        </div>
        <div className='col-span-2 md:col-span-1 my-10 ml-5'>
        <TicketStatus ticketStatus={ticketStatus} resolves={resolves} setResolves={setResolves} setTicketStatus={setTicketStatus}/>
        </div>
      </div>
      </div>
        <Footer/>
    </>
  )
}

export default App
