// NPM packages
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import NavBar from "./NavBar";
import HomePage from "../Home";
import MenuPage from "../Menu";
import CategoryPage from "../Category";
import ProductPage from "../Product";
import ContactPage from "../Contact";
import AdminPage from "../Admin";
import AdminProduct from "../AdminProduct";
import AdminCategory from "../AdminCategory";
import Footer from "./Footer";


export default function Browser() {
  return(
    <BrowserRouter>
    <NavBar />
    <main className="main-content">
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/menu" component={MenuPage} />
      <Route path="/categories/:slug" component={CategoryPage} />
      <Route path="/products/:slug" component={ProductPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/admin" component={AdminPage} />
      <Route path="/admin-categories/:slug" component={AdminCategory} />
      <Route path="/admin-products/:slug" component={AdminProduct} />
    </Switch>
    </main>
    <Footer />
  </BrowserRouter>
  )
}