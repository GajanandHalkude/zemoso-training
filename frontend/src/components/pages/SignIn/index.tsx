import React from "react";
import SignInTemplate, { AuthTemplateProp } from "../../templates/SignIn";
import SignIn from "../../organisms/SignIn";
import SignInImage from "../../../../public/assets/images/SignInImage.svg";
import ImageComponent from "../../atoms/Image";

const SignInPage = () => {
  const authTemplateProps: AuthTemplateProp = {
    img: <ImageComponent src={SignInImage} data-testid="image" />,
    body: <div><SignIn /></div>
  };

  return <SignInTemplate {...authTemplateProps} data-testid="signIn-component" />;
};

export default SignInPage;
