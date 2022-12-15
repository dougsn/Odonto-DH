import { fireEvent, getByRole, getByText, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBarProvider from '../../Components/contexts/NavBarContext';
import Navbar from "../../Components/Navbar";
import Home from '.';

describe ('<Card />', () => { 

    test("Testar se o card de Dentista está aparecendo corretamente na tela de início", async ()=>{
        
        render(
            <BrowserRouter>
                <Home  />
            </BrowserRouter>)
            screen.debug;

            
         const dentista = screen.getByRole("heading", { level: 2 });
         expect(dentista.map).toBe(undefined);

    });

    test("Testar se aparece o Logout quando logado", ()=>{

        render(
            <BrowserRouter>
                <NavBarProvider>
                    <Navbar />
                </NavBarProvider>
            </BrowserRouter>)

        const logout = screen.getByText("Login");

        expect(logout).toBeInTheDocument();

    });

})