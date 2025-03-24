import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AppLayout from './Components/UI/AppLayout'
import Home from './Pages/Home'
import Login from './Components/Login'
import ProtectedAdminRoutes from './ProtectedAdminRoutes'
import AdminDashboard from './Pages/AdminDashboard'
import Error404 from './Pages/Error404'
import AddRestaurant from './Pages/AddRestaurant'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<AppLayout />,
      children:[
        {
          path:'/',
          element:<Home />
        },{
          path:'/admin',
          element:<ProtectedAdminRoutes />,
          children:[
            {
              path: '',
              element:<AdminDashboard />
            },{
              path: 'add-restaurant',
              element:<AddRestaurant />
            }
          ]
        },{
          path:'*',
          element:<Error404 />
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