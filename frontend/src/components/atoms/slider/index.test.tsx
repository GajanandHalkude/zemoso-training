import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import SliderComponent, { Props } from ".";

describe("SliderComponent", () => {
  const defaultProps: Props = {
    style: {},
    track: false,
  };
  it("renders the SliderComponent", () => {
    render(<SliderComponent {...defaultProps} />);
    
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });
  it("applies the provided style", () => {
    const style = { color: "red", width: "100%" };
    render(<SliderComponent {...defaultProps} style={style} />);
    
    const slider = screen.getByRole("slider");
    expect(slider).toHaveStyle("color: rgb(144,144,144)");
    expect(slider).toHaveStyle("width: 100%");
  });
});
