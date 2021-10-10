// NPM packages
import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { getFirestore } from "firebase/firestore/lite";

// Project files
import NavBar from "./components/shared/NavBar";
import { HomePage } from "./components/Home";
import { MenuPage } from "./components/Menu/";
import { ContactPage } from "./components/Contact";
import { AdminPage } from "./components/Admin";
import Footer from "./components/shared/Footer";

import firebaseInstance from "./scripts/firebase";
import { getCollection } from "./scripts/fireStore";

export default function App() {
  // Local state
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState(0); // 0 - loading, 1 - loaded, 2 - error

  // Properties
  const database = getFirestore(firebaseInstance);

  useEffect(() => {
    async function getCategories() {
      const collection = await getCollection(database, "categories");
      setCategories(collection);
      setStatus(1);
    }

    getCategories();
  }, [database]);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <HomePage categories={categories} />
          </Route>
          <Route path="/menu" component={MenuPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/admin">
            <AdminPage categories={categories} />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
