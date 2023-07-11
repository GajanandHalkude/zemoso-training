import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import SignInPage from "../components/pages/SignIn";
export interface ProtectedRouteProp {
  component: React.ReactNode;

}

export const ProtectedRoute = ({ component}: ProtectedRouteProp) => {
  const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn);

  return (
     <>
      {isLoggedIn ? component : <SignInPage />}
    </>
  );
};
