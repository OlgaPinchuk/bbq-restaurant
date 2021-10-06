// NPM packages
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import NavBar from "./components/shared/NavBar";
import { HomePage } from "./components/Home";
import { MenuPage } from "./components/Menu/";
import { ContactPage } from "./components/Contact";
import Footer from "./components/shared/Footer";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
