import React from "react"
import { render,screen } from "@testing-library/react"
import IconComponent from "./index"
import Logout from '../../../../public/images/logout.svg'
import '@testing-library/jest-dom/extend-expect';

it('render icon',()=>{
    render(<IconComponent src={Logout} height="32px" width="32px" padding="5px"/>)
    const icon = screen.getByTestId("iconComponent")
    expect(icon).toBeDefined()
})
describe("IconComponent", () => {
    it("should display the icon with the specified width and height", () => {
      render(
        <IconComponent
          src={Logout}
          width="50px"
          height="50px"
          padding="10px"
        />
      );
  
      const icon = screen.getByTestId("iconComponent");
      expect(icon).toHaveAttribute("width", "50px");
      expect(icon).toHaveAttribute("height", "50px");
      icon.setAttribute("padding", "10px");
    });
  });