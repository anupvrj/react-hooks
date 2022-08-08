import React,{useState} from 'react'

function SimpleUseState() {
    const [getname, getName] =useState("");
    const [myName, setName] =useState("");

   const getMyName =(event)=>{
    getName(event.target.value);
console.log(event.target.value);
   }

   const setMyName =(event)=>{
    setName(getname);
   }


  return (
    <>
        <input type="text" name="myname" onChange={getMyName}/>
        <button onClick={setMyName}>Set My Name</button>
        <div>My Name is {myName}</div>
    </>
    
  )
}

export default SimpleUseState