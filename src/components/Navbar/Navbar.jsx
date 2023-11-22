import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
  <>
    <section className={styles.outerCont}>
        <img className={styles.brandImg} src="/icons.png" alt="brand" />
        <h1 className={styles.title}>Hushl</h1>
    </section>
  </>
  )
}

export default Navbar