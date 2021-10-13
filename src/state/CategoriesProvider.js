// NPM Packages
import { useContext, createContext, useReducer } from "react";

// Project files
import categoriesReducer from "./categoriesReducer";

// Properties
const CategoriesContext = createContext(null);

export function CategoriesProvider({ children }) {
  // Local state
  const [categories, dispatch] = useReducer(categoriesReducer, []);

  return (
    <CategoriesContext.Provider value={{ categories, dispatch }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export function useCategories() {
  const context = useContext(CategoriesContext);

  return context;
}
