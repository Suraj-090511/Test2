import React, { useReducer } from 'react'



function change(state,action){
    switch(action.type){
        case "increment" : {
                return {count: state.count + 1}
        }
        case "decrement" :{
            return {count : state.count - 1}
        }
        default :{
            return state
        }
    }
}

function Reducers() {

    const [state,dispatch] = useReducer(change,{
        count:0
    })
  return (
   <>
   <p>{state.count}</p>
   <button onClick={()=>dispatch({type : "increment"})}>Increment</button>
   <button onClick={ ()=> dispatch({type : 'decrement'})}>Decrement</button>
   </>
  )
}

export default Reducers