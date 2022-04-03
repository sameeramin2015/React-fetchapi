import React from 'react'
import { Navigate } from 'react-router-dom'

const  PageControl = ({user, redirect='/', children})=> {

  if(user.username !=='admin' || user.password !=='123456'){
    return(
      <Navigate to={redirect} />
    )
   
  }
  console.log(user, 'this is protected route')
  return children
}
export default PageControl