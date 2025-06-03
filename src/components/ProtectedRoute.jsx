import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";
import SuspenseLoader from "./SuspenseLoader";

// const getUser = () => {
//   const user = JSON.parse(localStorage.getItem("user")); // adjust to your auth logic
//   return user;
// };
// tenant == dashboard

const ProtectedRoute = ({ allowedRoles }) => {
  const { loading, user } = useAppContext();
  if (loading) {
    return <SuspenseLoader />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  //rbac
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
