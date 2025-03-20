import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router'
import AppLayout from './Components/UI/AppLayout'
import Home from './Pages/Home'
import Login from './Components/Login'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<AppLayout />,
      children:[
        {
          path:'/',
          element:<Home />
        }
      ]
    },
    {
      path:'/login',
      element:<Login />
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App