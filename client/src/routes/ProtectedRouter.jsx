import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function ProtectedRouter({ children }) {
  const navigate = useNavigate();
  if (!localStorage.getItem("access-token")) {
    navigate("/login");
  }

  return <Outlet />;
}

export default ProtectedRouter;
