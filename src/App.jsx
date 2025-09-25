import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <div className=' bg-[#f5f5f5]'>
        <Banner/>
        <Footer/>
      </div>
    </>
  )
}

export default App
