import React from 'react'
import "./App.css"
import Home from './pages/Home/Home'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <section className='outer_most_cont'>
        <div className='home_page_outer_container'>
          <Home/>
          <ToastContainer/>
        </div>
      </section>
    </>
  )
}

export default App