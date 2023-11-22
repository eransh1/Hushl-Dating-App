import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
   <>
    <section className={styles.outerCont}>
    <h3 className={styles.copyright}>{`Copyright © ${new Date().getFullYear()} Tourism. All Rights Reserved.`}</h3>
    
    </section>
   </>
  )
}

export default Footer