import React, { useState } from 'react';

import { createContext,useContext} from 'react';

const NewContext = createContext();

function Data(){
    const value1 =useContext(NewContext)
    return(
        <>
        <div> context value is {value1}</div>
        </>
    )
}

function Context() {
    const [value1,setvalue] = useState(10000);

  return (
    <NewContext.Provider value={value1}>
        <Data/>
    </NewContext.Provider>
  )
}

export default Context