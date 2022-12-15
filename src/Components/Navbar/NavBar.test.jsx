import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBarProvider from "../contexts/NavBarContext";
import NavBar from "../Navbar";

describe("<App/>", () => {
  test("Testar se o tema inicial é o tema light", () => {
    render(
      <BrowserRouter>
        <NavBarProvider>
          <NavBar />
        </NavBarProvider>
      </BrowserRouter>
    );

    const tema = screen.getByTestId("navbar");

    expect(tema).toHaveClass("btn btn-dark");

    const button = screen.getByRole("button", { name: /🌙/i });

    fireEvent.click(button);

    expect(tema).toHaveClass("btn btn-light");
  });
});
