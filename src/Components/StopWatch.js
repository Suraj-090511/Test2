import React, { useRef, useState } from 'react'

function StopWatch() {

    const[Timer,SetTimer] =useState(0);

    let id = useRef();
    const handlefn = ()=>{
         id.current = setInterval(()=>{
                SetTimer((prev)=> prev+1);
        },1000)
    }

  return (
    <>
    <span>{Timer}</span>
    <button onClick={handlefn}>Start</button>
    <button onClick={()=>{
            clearInterval(id.current)
    }}>Stop</button>
    <button
    onClick={()=>{
        clearInterval(id.current);
        SetTimer(0);
    }}
    >Reset</button>
    </>
  )
}

export default StopWatch