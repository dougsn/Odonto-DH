import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "../Navbar";

describe("<App/>", () => {
  test("Testar se o tema inicial é o tema light", () => {
    render(<NavBar />);

    const tema = screen.getByTestId("navbar");

    expect(tema).toHaveClass("btn btn-light");

  //  const button = screen.getByRole("button", { name: /alterar tema/i });

   // fireEvent.click(button);

   // expect(tema).toHaveClass("dark");
  });
});

  /*test("verificar se a quantidade de dentistas esta aparecendo corretamente", () => {
    render(<App />);

    const nomes = screen.getAllByRole("heading", { level: 2 });

    expect(nomes.length).toBe(3);
  });
});*/
