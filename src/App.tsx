// NPM packages
import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { getFirestore } from "firebase/firestore/lite";

// Project files
import NavBar from "components/shared/NavBar";
import { HomePage } from "components/Home";
import { MenuPage } from "components/Menu/";
import { ContactPage } from "components/Contact";
import Footer from "components/shared/Footer";

import firebaseInstance from "scripts/firebase";
import { getCollection } from "scripts/fireStore";
import iCategory from "types/iCategory";

export default function App() {
  // Local state
  const [categories, setCategories] = useState(Array<iCategory>());
  const [status, setStatus] = useState(0); // 0 - loading, 1 - loaded, 2 - error

  // Properties
  const database = getFirestore(firebaseInstance);

  useEffect(() => {
    getCollection(database, "categories")
      .then((result) => {
        setCategories(result as iCategory[]);
        setStatus(1);
      })
      .catch((error) => {
        console.log(error);
        setStatus(2);
      });
  }, [database]);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <HomePage categories={categories}/>
          </Route>
          <Route path="/menu" component={MenuPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
