import React, { useEffect } from 'react'
import {RouterProvider} from "react-router-dom"
import { routes } from './app.routes'
import { useAuth } from '../features/auth/hooks/useAuth'
// import { useSelector } from 'react-redux'

const App = () => {

  const {handleGetMe} = useAuth()
  // const user = useSelector(state=>state.auth.user)

  useEffect(()=>{
    handleGetMe()
  },[])
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App