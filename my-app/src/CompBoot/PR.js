import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'
function PR() {
  const auth =   localStorage.getItem("users")
  return (
   <>
{auth ? <Outlet /> : <Navigate to="/signUP" />}
   </>
  )
}

export default PR