// NPM packages
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import NavBar from "./NavBar";
import HomePage from "../Home";
import MenuPage from "../Menu";
import ContactPage from "../Contact";
import AdminPage from "../Admin";
import AdminProducts from "../AdminProducts";
import AdminCategories from "../AdminCategories";
import AdminProductDetails from "../AdminProductDetails";
import Footer from "./Footer";

export default function Browser() {
  return(
    <BrowserRouter>
    <NavBar />
    <main className="main-content">
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/menu" component={MenuPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/admin" component={AdminPage} />
      <Route path="/admin-categories/:id" component={AdminCategories} />
      <Route path="/admin-products/:id" component={AdminProducts} />
      <Route path="/admin-product/:id" component={AdminProductDetails} />
    </Switch>
    </main>
    <Footer />
  </BrowserRouter>
  )
}