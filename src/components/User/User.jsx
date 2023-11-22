import React, { useState } from 'react'
import styles from "./User.module.css"
import { GrLocation } from "react-icons/gr";
import { useSwipeable } from 'react-swipeable';
import { ImCross } from "react-icons/im";
import { FaHeart } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import { FaBookmark ,FaRegBookmark } from "react-icons/fa";
let userId="eranshbansal"
const User = ({user,setVisitedUserArray,visitedUserArray,handleUserLiked,handleUserDisliked,handleUserBookmarked}) => {
const[direction,setDirection]=useState("")
const[degree,setDegree]=useState(0)
const[option,setOption]=useState('')
 function calculateAge(birthdate) {
    const birthdateObj = new Date(birthdate);
    const now = new Date();
  
    // Calculate the difference in years
    const age = now.getFullYear() - birthdateObj.getFullYear();
  
    // Adjust age if birthday hasn't occurred yet this year
    if (
      now.getMonth() < birthdateObj.getMonth() ||
      (now.getMonth() === birthdateObj.getMonth() &&
        now.getDate() < birthdateObj.getDate())
    ) {
      return age - 1;
    } else {
      return age;
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () =>{ handleUserDisliked(user);setDegree(0);setOption(null);setVisitedUserArray((prev)=>{return[...prev,user.id]})},
    onSwipedRight: () => {handleUserLiked(user);setDegree(0);setOption(null);setVisitedUserArray((prev)=>{return[...prev,user.id]})},
    onSwiping:(eventData)=>{setOption(eventData.dir.toLowerCase()==="left"?"nope":"like");setDirection(eventData.dir.toLowerCase());setDegree(eventData.dir.toLowerCase()==="left"?`-${(eventData.absX)/10}`:(eventData.absX)/10)},
    swipeDuration: 2500,
    preventScrollOnSwipe: true,
    trackMouse: true
  });



function handleNopeBtnClick(){
    setOption("nope")
let card=document.getElementById(`${user.id}`)
setTimeout(()=>{
    let x=0
    let timer=setInterval(()=>{
    x+=40
    if(x>=1000){
    clearInterval(timer)
    setVisitedUserArray((prev)=>{return[...prev,user.id]})
    }

    card.style.transform = `translateX(-${x}px)`;
    },1)
},500)
}

function handleLikeButtonClick(){
    setOption("like")
let card=document.getElementById(`${user.id}`)
setTimeout(()=>{
    let x=0
    let timer=setInterval(()=>{
    x+=40
    if(x>=1000){
    clearInterval(timer)
    setVisitedUserArray((prev)=>{return[...prev,user.id]})
    handleUserLiked(user)
    }
    card.style.transform = `translateX(${x}px)`;
    },1)
},500)
}

function handleSuperLikeButtonClick(){
    setOption("super_like")
let card=document.getElementById(`${user.id}`)
setTimeout(()=>{
    let x=0
    let timer=setInterval(()=>{
    x+=40
    if(x>=1000){
    clearInterval(timer)
    setVisitedUserArray((prev)=>{return[...prev,user.id]})
    handleUserLiked(user)
    }
    card.style.transform = `translateY(-${x}px)`;
    },1)
},500)
}

function handleBookmarkButtonClick(){
    setOption("book_mark")
let card=document.getElementById(`${user.id}`)
setTimeout(()=>{
    let x=0
    let timer=setInterval(()=>{
    x+=40
    if(x>=1000){
    clearInterval(timer)
    setVisitedUserArray((prev)=>{return[...prev,user.id]})
    handleUserBookmarked(user)
    }
    card.style.transform = `translateY(${x}px)`;
    },1)
},500)
}

  return (
    <>
        <section id={`${user.id}`} style={{display:visitedUserArray.includes(user.id)?"none":"block",transform:`rotate(${degree}deg)`,transformOrigin:`bottom ${direction}`}} {...handlers} className={styles.outerCont}>
            <img className={styles.userProfileImg} src={user.picture} alt="pic" />
            {option==="like"&&<p className={styles.likeText}>LIKE</p>}
           {option==="nope"&& <p className={styles.nopeText}>NOPE</p>}
           {option==="super_like"&& <p className={styles.superLikeText}>SUPER LIKE</p>}
           {option==="book_mark"&& <p className={styles.bookmarkedText}>BOOKMARKED</p>}
            <div className={styles.dataCont}>
            <div className={styles.infoCont}>
                <h1 className={styles.name}>{`${user.firstName} ${user.lastName}`}
                <span className={styles.age}>{calculateAge(user.dateOfBirth)}</span>
                </h1>
              <h1 className={styles.location}><GrLocation className={styles.locationIcon}/>{user.location.country}</h1>
            </div>
            <div className={styles.optionCont}>
                <p onClick={handleNopeBtnClick} className={styles.crossiconOuterCont}><ImCross className={styles.crossIcon}/></p>
                <p onClick={handleSuperLikeButtonClick} className={styles.stariconOuterCont}><TiStarFullOutline className={styles.starIcon}/></p>
                <p onClick={handleLikeButtonClick} className={styles.hearticonOuterCont}><FaHeart className={styles.heartIcon}/></p>
                <p onClick={handleBookmarkButtonClick} className={styles.markiconOuterCont}>{user.isBookmarked.includes(userId)?<FaBookmark className={styles.bookMarkIcon}/>:<FaRegBookmark className={styles.bookMarkIcon}/>}</p>
            </div>
            </div>
        </section>
    </>
  )
}

export default User