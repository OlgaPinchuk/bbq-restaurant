// NPM Packages
import { useContext, createContext, useReducer } from "react";

// Project files
import categoriesReducer from "./categoriesReducer";
import dishesReducer from "./dishesReducer";

// Properties
const MenuContext = createContext(null);

export function MenuProvider({ children }) {
  // Local state
  const [categories, dispatch] = useReducer(categoriesReducer, []);
  const [dishes, dispatchDish] = useReducer(dishesReducer, []);

  return (
    <MenuContext.Provider value={{ categories, dishes, dispatch, dispatchDish }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);

  return context;
}
