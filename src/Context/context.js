// context.js
import { createContext, useState } from 'react';

const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const [searchbar, setsearchbar] = useState("");

  return (
    <NavbarContext.Provider value={{ searchbar, setsearchbar }}>
      {children}
    </NavbarContext.Provider>
  );
};

export { NavbarProvider, NavbarContext };