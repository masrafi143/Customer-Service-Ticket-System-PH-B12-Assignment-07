import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Tickets from './components/Tickets/Tickets'

const ticketPromise = fetch('ticketInfo.json').then(res => res.json());
function App() {

  return (
    <>
      <Navbar/>
      <div className='bg-[#f5f5f5] pb-10'>
      <Banner/>
      <div className='grid grid-cols-5 w-11/12 mx-auto'>
        <div className='col-span-3 md:col-span-4'>
          <Suspense fallback={<h2>Tickets loading...</h2>}>
            <Tickets ticketPromise={ticketPromise}/>
          </Suspense>
        </div>
      </div>
      </div>
        <Footer/>
    </>
  )
}

export default App
