// NPM packages
import { useState, useCallback, useEffect } from "react";

// Project files
import Browser from "./components/shared/Browser";
import { getCollection } from "./scripts/fireStore";
import { useMenu } from "./state/MenuProvider";

export default function App() {
  // Constants
  const { dispatch } = useMenu();

  // Local state
  const [status, setStatus] = useState(0); // 0 loading, 1 loaded, 2 error

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

  // @ts-ignore
  useEffect(() => fetchData("categories"), [fetchData]);

  return (
    <div className="App">
      {status === 0 && <p>Loading ⏱</p>}
      {status === 1 && <Browser />}
      {status === 2 && <p>Error 🚨</p>}
    </div>
  );
}
