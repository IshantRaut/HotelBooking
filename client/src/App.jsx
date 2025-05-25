import React from 'react';
import Navbar from './components/Navbar';
import { Routes, useLocation,Route } from 'react-router-dom';
import Home from './pages/Home';
function App() {

  const isOwenerPath = useLocation().pathname.includes('/owner');


  return (
    <>
     <div>
  { !isOwenerPath && <Navbar /> }
    <div className='min-h-[70vh'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
     </div>
    </>
  )
}

export default App
