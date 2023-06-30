import React from "react";
import SignInTemplate, { AuthTemplateProp } from "../../templates/SignIn";
import ResetPasswordComponent from "../../organisms/ResetPassword";
import Image from "../../../../public/assets/images/SignInImage.svg";

const ResetPasswordPage = () => {

  const authTemplateProps: AuthTemplateProp = {
    img: Image,
    body: <ResetPasswordComponent />
  };

  return (
    <SignInTemplate
      {...authTemplateProps}
      data-testid="reset-password-component"
    />
  );
};

export default ResetPasswordPage;
