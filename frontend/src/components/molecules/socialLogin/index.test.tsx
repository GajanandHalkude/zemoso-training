import React from "react";
import { render, screen , fireEvent } from "@testing-library/react";
import SocialLogin from "./index";
import { useAuth0 } from "@auth0/auth0-react";
import '@testing-library/jest-dom';

jest.mock("@auth0/auth0-react", () => ({
  useAuth0: jest.fn(),
}));

describe("SocialLogin", () => {
  it("should display the provided text and icon", () => {
    const loginWithRedirect = jest.fn();
    (useAuth0 as jest.Mock).mockReturnValue({
      loginWithRedirect,
    });

    const text = "Login";
    const src = "icon.png";
    render(<SocialLogin text={text} src={src} />);
    const socialLoginElement = screen.getByTestId("socialIconComponent");
    const textElement = screen.getByText(text);
    const iconElement = screen.getByText(text);

    expect(textElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(socialLoginElement).toHaveStyle("cursor: pointer");
  });

  it("should call loginWithRedirect when clicked", () => {
    const loginWithRedirect = jest.fn();
    (useAuth0 as jest.Mock).mockReturnValue({
      loginWithRedirect,
    });

    render(<SocialLogin text="Login" src="icon.png" />);
    const socialLoginElement = screen.getByTestId("socialIconComponent");

    fireEvent.click(socialLoginElement);

    expect(loginWithRedirect).toHaveBeenCalledTimes(1);
  });
});