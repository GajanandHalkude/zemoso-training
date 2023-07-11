import React from "react";
import SignUpTemplate, { AuthTemplateProp } from "../../templates/SignIn";
import SignUp from "../../organisms/SignUp";
import SignUpImage from "../../../../public/assets/images/SignUp.svg";
import ImageComponent from "../../atoms/Image";

const SignUpPage = () => {
  const authTemplateProps: AuthTemplateProp = {
    img: <ImageComponent src={SignUpImage} data-testid="image" />,
    body: <div><SignUp /></div>
  };
  return <SignUpTemplate {...authTemplateProps} data-testid="signUp-component" />;
};

export default SignUpPage;
