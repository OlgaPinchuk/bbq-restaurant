// NPM packages
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import NavBar from "./components/shared/NavBar";
import HomePage from "./components/Home";
import MenuPage from "./components/Menu";
import ContactPage from "./components/Contact";
import AdminPage from "./components/Admin";
import AdminProducts from "./components/AdminProducts";
import AdminCategories from "./components/AdminCategories";
import AdminProductDetails from "./components/AdminProductDetails";
import Footer from "./components/shared/Footer";
import { useCategories } from "./state/CategoriesProvider";

export default function App() {
  // Constants
  const { status } = useCategories();

  const Browser = (
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
  );

  return (
    <div className="App">
      {status === 0 && <p>Loading ⏱</p>}
      {status === 1 && Browser}
      {status === 2 && <p>Error 🚨</p>}
    </div>
  );
}

