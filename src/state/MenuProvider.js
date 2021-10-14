// NPM Packages
import { useContext, createContext, useReducer } from "react";

// Project files
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";

// Properties
const MenuContext = createContext(null);

export function MenuProvider({ children }) {
  // Local state
  const [categories, categoryDispatch] = useReducer(categoryReducer, []);
  const [products, productDispatch] = useReducer(productReducer, []);

  return (
    <MenuContext.Provider value={{ categories, products, categoryDispatch, productDispatch }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);

  return context;
}
