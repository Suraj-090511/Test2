// Protected.js

import React from 'react';
import { Outlet , Navigate } from 'react-router-dom';

function Protected({isauth}) {
    

  return (
    <>
     {isauth ? <Outlet/> : <Navigate to ="/Home" />}
    
    </>
  );
}

export default Protected;
