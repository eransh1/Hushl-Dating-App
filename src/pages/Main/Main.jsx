import React, { useEffect, useState } from 'react'
import styles from "./Main.module.css"
import axios from 'axios'
import UserCard from '../../components/User/User'
import UserDetailedData from "../../data/UserData"
import { toast } from 'react-toastify'
import Confettii from '../../utils/Confetti/Confetti'
import MatchedCard from '../../components/Matched Card/MatchedCard'
import OptionContainer from '../../components/Option Container/OptionContainer'
import Loader from '../../components/Loader/Loader'

let userId="eranshbansal"

const Main = () => {
  const[visitedUserArray,setVisitedUserArray]=useState([])
  const[usersData,setUsersData]=useState([])
  const[pageChoosen,setPageChoosen]=useState("main")
  const[matchedUser,setMatchedUser]=useState(null)
  const[loading,setLoading]=useState(true)

  useEffect(()=>{
    fetchDataFromApi()
    },[])

async function fetchDataFromApi(){
  setLoading(true)
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
setLoading(false)
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



  return (
  <>
    {/* SHOWING CONFETTI WHEN USER MATCHED */}
      {matchedUser&& <Confettii/>}
 
    <section className={styles.outerCont}>
      {loading&&<Loader/>}


      {/* SHOWING MATCHED CARD WHEN USER MATCHED */}
        {matchedUser&&<MatchedCard matchedUser={matchedUser} setMatchedUser={setMatchedUser}/>}

      {/* SHOWING MAIN AND BOOKMARK OPTION */}
        <OptionContainer pageChoosen={pageChoosen} setPageChoosen={setPageChoosen} setVisitedUserArray={setVisitedUserArray}/>

      {/* SHOWING MAIN DATA ON FIRST LOAD*/}
        {!loading&&usersData.length>0&&pageChoosen==="main"&&usersData.filter((item)=>{return !item.isBookmarked.includes(userId)}).map((user)=>{return <UserCard key={user.id} user={user} visitedUserArray={visitedUserArray} setVisitedUserArray={setVisitedUserArray} handleUserLiked={handleUserLiked} handleUserDisliked={handleUserDisliked} handleUserBookmarked={handleUserBookmarked}/>})}

      {/* SHOWING BOOKMARKED DATA*/}
        {!loading&&usersData.length>0&&pageChoosen==="book_mark"&&usersData.filter((item)=>{return item.isBookmarked.includes(userId)}).map((user)=>{return <UserCard key={user.id} user={user} visitedUserArray={visitedUserArray} setVisitedUserArray={setVisitedUserArray} handleUserLiked={handleUserLiked} handleUserDisliked={handleUserDisliked} handleUserBookmarked={handleUserBookmarked}/>})}

      {/* WHEN REACH END OF MAIN DATA*/}
        {!loading&&pageChoosen==="main"&&<div className={styles.reachedEndCard}>
          Reached End
        </div>}

      {/* WHEN REACH END OF BOOKMARKED DATA*/}
        {!loading&&pageChoosen==="book_mark"&&<div className={styles.reachedEndCard}>
         No Bookmark to show
        </div>}

    </section>
  </>
  )
}

export default Main