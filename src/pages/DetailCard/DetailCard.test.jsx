import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route, PrivateRoute, Link } from 'react-router-dom';


import NavBarProvider from '../../Components/contexts/NavBarContext';
import NavBar from '../../Components/Navbar/index';
import AuthProvider from "../../providers/AuthContext";
import Card from '../../Components/Card';






describe ('<Navbar />', () => { 

    beforeEach(() => {
        const contextIsLight = true;
    });

    test("Testar se encontra a palavra 'login'", ()=>{

        

        render(
            <BrowserRouter>
            <AuthProvider>

                <NavBarProvider>
                    <NavBar />
                </NavBarProvider>
                
                {/* <Routes>
                <Route path="/dentist" element={<DentistaRouterTemplate />}>
                    <Route
                        path=":matricula"
                        element={
                            <PrivateRoute>
                                <DetailCard
                                    nome="Admin"
                                    sobrenome="Admin"
                                    matricula="c3e6cf30-dccc-4e21-935a-8efe9344677e"
                                />
                            </PrivateRoute>
                        }
                    />
                </Route>
                </Routes> */}
            </AuthProvider>
            </BrowserRouter>
        )

        const nome = screen.getByText("Login");

        expect(nome).toBeInTheDocument();

    });


})

// describe("Home", () => {

//     beforeEach(() => {
//         const contextIsLight = true;
//     });


//     test("Testar render de card na Home", () => {


//         render(


//             <BrowserRouter>
//             <AuthProvider>
        
//             <Card 
//                 nome="Admin"
//                 sobrenome="Admin"
//                 matricula="c3e6cf30-dccc-4e21-935a-8efe9344677e"
//             />

//             </ AuthProvider>
//             </ BrowserRouter>
//         )


//     const nome = screen.getByText("Admin Admin");

//     expect(nome).toBeInTheDocument();

//     })

    
// })