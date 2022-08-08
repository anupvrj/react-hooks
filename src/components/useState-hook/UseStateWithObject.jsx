import React, { useState } from 'react'

function UseStateWithObject() {
    const [mydetails, setMyDetails] =useState({name:"",phone:"",email:""});
    const [submittedDetails,setSubmittedDetails] =useState({});
    
   function getMyName(event){
setMyDetails({...mydetails, name:event.target.value});
    }

    function getMyPhone(event){
        setMyDetails({...mydetails, phone : event.target.value});
            }
    function getMyEmail(event){
        setMyDetails({...mydetails, email: event.target.value});
                    }
                
console.log(mydetails);
function onSubmitted(e){
    e.preventDefault();
    setSubmittedDetails(mydetails);
    setMyDetails({name:"",phone:"",email:""});
}
  return (
    <div>
        <div>
            <form onSubmit={onSubmitted} >
            <div>
                <label htmlFor ="myName">Full Name: </label>
                <input type="text" name="myName" value={mydetails.name} id="myName" onChange={getMyName} />
            </div>
            <div>
                <label htmlFor ="myPhone">Your Phone: </label>
                <input type="text" name="myPhone" id="myPhone" value={mydetails.phone} onChange={getMyPhone} />
            </div>
            <div>
                <label htmlFor ="myEmail">Your Email: </label>
                <input type="text" name="myEmail" id="myEmail"   value={mydetails.email} onChange={getMyEmail} />
            </div>
            <input type="submit" value="Show My Details"/>
            </form>
        </div>
        <div>
            <h3>Your Details</h3> 
            <strong>Name: </strong> {submittedDetails.name}<br/>
            <strong>Phone: </strong> {submittedDetails.phone}<br/>
            <strong>Email: </strong> {submittedDetails.email}
        </div>
    </div>
    
  )
}

export default UseStateWithObject