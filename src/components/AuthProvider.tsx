import * as React from "react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthProvider: React.FC = () => {
  const auth = localStorage.getItem("user-token");
  // const auth = true;
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) navigate("/login");
  }, [auth, navigate]);

  return <Outlet />;
};

export default AuthProvider;
