// NPM Packages
import {
  useContext,
  createContext,
  useState,
  useCallback,
  useEffect,
  useReducer,
} from "react";

// Project files
import { getCollection } from "../scripts/fireStore";
import categoriesReducer from "./categoriesReducer";

// Properties
const CategoriesContext = createContext(null);

export function CategoriesProvider({ children }) {
  // Local state
  const [categories, dispatch] = useReducer(categoriesReducer, []);
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error

  // Properties
  const PATH = "categories";

  // Methods
  const fetchData = useCallback(async (path) => {
    try {
      const data = await getCollection(path);

      dispatch({ type: "READ_ALL_CATEGORIES", payload: data });
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);

  useEffect(() => fetchData(PATH), [fetchData]);

  return (
    <CategoriesContext.Provider value={{ categories, dispatch, status, PATH }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export function useCategories() {
  const context = useContext(CategoriesContext);

  return context;
}
