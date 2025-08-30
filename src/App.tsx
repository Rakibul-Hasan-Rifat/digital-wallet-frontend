import './App.css'
import Navbar from '@/components/layouts/Navbar'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
      <Navbar />
      <div className='my-5'>
        <Outlet />
      </div>
    </>
  )
}

export default App
