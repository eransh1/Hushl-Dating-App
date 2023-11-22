import React, { useEffect, useState } from 'react'
import styles from "./Main.module.css"
import axios from 'axios'
import User from '../../components/User/User'
import UserDetailedData from "../../data/UserData"
import { toast } from 'react-toastify'
import Confettii from '../../utils/Confetti/Confetti'
import MatchedCard from '../../components/Matched Card/MatchedCard'

let userId="eranshbansal"
const Main = () => {
  const[visitedUserArray,setVisitedUserArray]=useState([])
  const[usersData,setUsersData]=useState(UserDetailedData)
  const[hasReachedEnd,setHasReachedEnd]=useState(true)
  const[pageChoosen,setPageChoosen]=useState("main")
  const[matchedUser,setMatchedUser]=useState(null)

async function fetchDataFromApi(){
  try {
    const data = await axios.get(`https://dummyapi.io/data/v1/user`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'app-id':`655dec3b4c23c3d073b9c769`
        },
    })
    if (data.status===200) {
      setUsersData(UserDetailedData)
    }

} catch (error) {
  setUsersData(UserDetailedData)
}
}

function handleUserLiked(user){
if(user.isLiked.includes(userId)){
  toast.success("Its a match")
  setMatchedUser(user)
}
}
function handleUserDisliked(user){
  
}
function handleUserBookmarked(user){
 let tempArray=user.isBookmarked
 tempArray.push(userId)
 let newList=usersData.map((item)=>{
  if(item.id===user.id){return {...item,isBookmarked:tempArray}}
  else {return item}
 })
 setUsersData(newList)
}

useEffect(()=>{
// fetchDataFromApi()
},[])

  return (
  <>
 {matchedUser&& <Confettii/>}
 
    <section className={styles.outerCont}>
    {matchedUser&&<MatchedCard matchedUser={matchedUser} setMatchedUser={setMatchedUser}/>}
    <div className={styles.optionContainer}>
      <button onClick={()=>{setPageChoosen("main");setVisitedUserArray([])}} style={{background:pageChoosen==="main"?"#000":"",color:pageChoosen==="main"?"#fff":""}} className={styles.button}>Main</button>
      <button onClick={()=>{setPageChoosen("book_mark");setVisitedUserArray([])}} style={{background:pageChoosen==="book_mark"?"#000":"",color:pageChoosen==="book_mark"?"#fff":""}} className={styles.button}>Bookmarks</button>
    </div>
        {usersData.length>0&&pageChoosen==="main"&&usersData.filter((item)=>{return !item.isBookmarked.includes(userId)}).map((user)=>{return <User key={user.id} user={user} visitedUserArray={visitedUserArray} setVisitedUserArray={setVisitedUserArray} handleUserLiked={handleUserLiked} handleUserDisliked={handleUserDisliked} handleUserBookmarked={handleUserBookmarked}/>})}
        {usersData.length>0&&pageChoosen==="book_mark"&&usersData.filter((item)=>{return item.isBookmarked.includes(userId)}).map((user)=>{return <User key={user.id} user={user} visitedUserArray={visitedUserArray} setVisitedUserArray={setVisitedUserArray} handleUserLiked={handleUserLiked} handleUserDisliked={handleUserDisliked} handleUserBookmarked={handleUserBookmarked}/>})}
        {hasReachedEnd&&pageChoosen==="main"&&<div className={styles.reachedEndCard}>
          Reached End
        </div>}
        {hasReachedEnd&&pageChoosen==="book_mark"&&<div className={styles.reachedEndCard}>
         No Bookmark to show
        </div>}
    </section>
  </>
  )
}

export default Main