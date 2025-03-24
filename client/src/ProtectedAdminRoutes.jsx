import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const ProtectedAdminRoutes = () => {
    const isAdmin = useSelector((state)=>state.auth.isAdmin)

  return isAdmin ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedAdminRoutes