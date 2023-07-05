import React from "react";
import Sell from "./components/pages/Sell";
import DashboardPage from "./components/pages/dashBoard";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./components/pages/SignIn";
import TradePage from "./components/pages/tradePage";
import ForgetPasswordpage from "./components/pages/ForgetPassword";
import ResetPasswordPage from "./components/pages/ResetPassword";
import SignUpPage from "./components/pages/SignUp";
import CurrencyDetails from "./components/pages/CurrencyDetails";
import Purchase from "./components/pages/Purchase";
import PaymentSuccess from "./components/pages/PaymentSuccessfull";
import WalletPage from "./components/pages/Walletpage";

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Routes>
         <Route path="/" element={<SignInPage />} />
         <Route path="/signin" element={<SignInPage />} />
         <Route path="/signup" element={<SignUpPage />} />
         <Route path="/dashboard" element={<DashboardPage />} />
         <Route path="/trade" element={<TradePage />} />
         <Route path="/forgetpassword" element={<ForgetPasswordpage />} />
         <Route path="/resetpassword" element={<ResetPasswordPage />} />
         <Route path="/currencydetails" element={<CurrencyDetails />} />
         <Route path="/sell" element={<Sell />} />
         <Route path="/purchase" element={<Purchase />} />
         <Route path="/paymentsuccess" element={<PaymentSuccess />} />
         <Route path="/wallet" element={<WalletPage/>} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;