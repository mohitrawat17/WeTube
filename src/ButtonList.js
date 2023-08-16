import React from 'react'
import BtnComponent from './BtnComponent'
const ButtonList = () => {

  const nameList=["All", "Javacript", "React", "Live", "Gaming", "DCEU", "Demon Slayer","Anime", "WWE", "Fox Cricket", "ICC", "Football", "Uttrakhand"]
  return (
    <div className='m-1 flex justify-center'>
       {
        nameList.map((name, index) =>{
          return <BtnComponent name={name} key={index}/>
        })
       }
    </div>
  )
}

export default ButtonList
