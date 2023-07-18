import React from "react";
import SignInPage from "../components/pages/SignIn";
export interface ProtectedRouteProp {
  component: React.ReactNode;

}

export const ProtectedRoute = ({ component}: ProtectedRouteProp) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn")
  return (
     <>
      {isLoggedIn==="true"? component : <SignInPage />}
    </>
  );
};
