// NPM packages
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import Header from "./components/shared/Header";
import HomePage from "./components/Home/HomePage";
import MenuPage from "./components/Menu/MenuPage";
import Footer from "./components/shared/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/menu" component={MenuPage} />
        </Switch>
      </BrowserRouter>

      <Footer />
    </div>
  );
}
