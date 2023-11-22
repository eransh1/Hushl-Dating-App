import React from 'react'
import styles from "./OptionContainer.module.css"

const OptionContainer = ({pageChoosen,setPageChoosen,setVisitedUserArray}) => {
  return (
    <div className={styles.optionContainer}>
    <button onClick={()=>{setPageChoosen("main");setVisitedUserArray([])}} style={{background:pageChoosen==="main"?"#000":"",color:pageChoosen==="main"?"#fff":""}} className={styles.button}>Main</button>
    <button onClick={()=>{setPageChoosen("book_mark");setVisitedUserArray([])}} style={{background:pageChoosen==="book_mark"?"#000":"",color:pageChoosen==="book_mark"?"#fff":""}} className={styles.button}>Bookmarks</button>
  </div>
  )
}

export default OptionContainer