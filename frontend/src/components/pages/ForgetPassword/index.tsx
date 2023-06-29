import React,{useState} from "react";
import SignInTemplate, { AuthTemplateProp } from "../../templates/SignIn";
import ForgetPasswordComponent from "../../organisms/ForgetPassword";
import Image from "../../../../public/assets/images/SignInImage.svg";

const ForgetPasswordpage = () => {

  const [isCodeSent, setIsCodeSent] = useState(false);

   const handleSendResetCode = () => {
      setIsCodeSent(true);
   };

    const handleVerifyCode = () => {
      return;
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
