import React,{useState} from "react";
import SignInTemplate, { AuthTemplateProp } from "../../templates/SignIn";
import ForgetPasswordComponent from "../../organisms/ForgetPassword";
import Image from "../../../../public/assets/images/SignInImage.svg";
import { useNavigate } from "react-router-dom";

const ForgetPasswordpage = () => {

  const [isCodeSent, setIsCodeSent] = useState(false);
  const navigate = useNavigate();
   const handleSendResetCode = () => {
      setIsCodeSent(true);
   };

    const handleVerifyCode = () => {
      return navigate("/resetpassword");
    };

  const authTemplateProps: AuthTemplateProp = {
    img: Image,
    body: !isCodeSent ? (
      <ForgetPasswordComponent
        label="Email"
        buttonText="Send Reset Link"
        isSendLink
        handleSendResetLink={handleSendResetCode}
      />
    ) : (
      <ForgetPasswordComponent
        label="Reset Code"
        buttonText="Reset Password"
        isSendLink={false}
        handleSendResetLink={handleVerifyCode}
      />
    ),
  };

  return (
    <SignInTemplate {...authTemplateProps} data-testid="forget-password-component" />
  );
};

export default ForgetPasswordpage;
