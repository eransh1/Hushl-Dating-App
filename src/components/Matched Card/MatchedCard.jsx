import React from 'react'
import styles from "./MatchedCard.module.css"

const MatchedCard = ({matchedUser,setMatchedUser}) => {
  return (
  <>
    <section className={styles.outerCont}>
        <h1 className={styles.title}>It's a Match!</h1>
        <p className={styles.subInfo}>{`You and ${matchedUser?.firstName} have liked each other.`}</p>
        <div className={styles.imageCont}>
            <img className={styles.image} src="/Ansh Image.jpeg" alt="" />
            <img className={styles.image} src={matchedUser?.picture} alt="" />
        </div>
        <button className={styles.sendMsgbtn}>Send a message</button>
        <button onClick={()=>setMatchedUser(null)} className={styles.keepSwipingbtn}>Keep swiping</button>
    </section>
  </>
  )
}

export default MatchedCard