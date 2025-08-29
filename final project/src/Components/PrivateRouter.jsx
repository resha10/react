// import React from 'react';
// import { Navigate, Outlet, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// export default function PrivateRoute() {
//   const { isAuthenticated } = useSelector(s => s.auth);
//   const location = useLocation();
//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace state={{ from: location }} />;
// }
