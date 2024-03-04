import React, { useState } from 'react'

function SendInput() {
  const [state,setstate] = useState({
    name:"",
    email:""
  })

  const handlechange = (e)=>{
    const {name,value} = e.target;

   
    setstate((prev) => ({
      ...prev,
      [name] : value
    }))
  }

  const submitfn = (e)=>{
    e.preventDefault();
    console.log(state.name,state.email);
    setstate({
      name:"",
      email:""
    })
  }

  return (
    <>
    <input type ="text" name="name" value ={state.name} onChange={handlechange}/>
    <input type ="text" name="email" value ={state.email} onChange={handlechange}/>
    <button onClick={submitfn}>submit</button>
    </>
  )
}

export default SendInput