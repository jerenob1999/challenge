import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home page - Rendering", () => {
  it("should render images", () => {
    expect(1);
    render(<Home />);
    screen.getByText('')
  });
});
