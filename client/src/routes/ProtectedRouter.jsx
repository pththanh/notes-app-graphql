import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRouter({ children }) {
  if (!localStorage.getItem("access-token")) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default ProtectedRouter;
