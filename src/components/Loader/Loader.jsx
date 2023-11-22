import React from 'react'
import styles from "./Loader.module.css"

const Loader = () => {
  return (
  <section className={styles.outerCont}>
     <div className={styles.UserImageLoader}>
     <img className={styles.userImageCont} src="/Ansh Image.jpeg" alt="userImg" />
     <div class={`${styles.circle} ${styles.delay1}`}></div>
     <div class={`${styles.circle} ${styles.delay2}`}></div>
     <div class={`${styles.circle} ${styles.delay3}`}></div>
     <div class={`${styles.circle} ${styles.delay4}`}></div>
     </div>
  </section>
  )
}

export default Loader