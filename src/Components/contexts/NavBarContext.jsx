import { useState, createContext, useEffect, useContext } from "react";

export const NavBarContext = createContext();

const NavBarProvider = ({children}) => {
     const [contextIsLight, setContextIsLight] = useState(true);

     return (
         <NavBarContext.Provider value={{contextIsLight, setContextIsLight}}>
            {children}
         </NavBarContext.Provider>
     );     
};

export default NavBarProvider;