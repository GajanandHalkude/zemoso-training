import React from "react";
import SignInTemplate, { AuthTemplateProp } from "../../templates/SignIn";
import ResetPasswordComponent from "../../organisms/ResetPassword";
import Image from "../../../../public/assets/images/SignInImage.svg";
import ImageComponent from "../../atoms/Image";

const ResetPasswordPage = () => {

  const authTemplateProps: AuthTemplateProp = {
    img: <ImageComponent src={Image} data-testid="image" />,
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
