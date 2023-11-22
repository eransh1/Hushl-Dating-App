import React from 'react'
import styles from "./Home.module.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Main from '../Main/Main'

const Home = () => {
  return (
 <>
   <section className={styles.outlayCont}>
   <Navbar/>
   <Main/>
   <Footer/>
   </section>
 </>
  )
}

export default Home