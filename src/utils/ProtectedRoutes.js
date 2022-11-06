import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
  const token = true;

  return (
    token ? <Outlet /> : <Navigate to="/login" />
  )
}

export default ProtectedRoutes