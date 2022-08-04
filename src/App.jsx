import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Topbar from "./components/topbar/Topbar";
import HomePage from "./pages/home/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./pages/productsList/ProductList";
import Categories from "./pages/categoriesList/Categories";
import NewCategories from "./pages/categoriesList/newCategorie/NewCategories";
import UsersList from "./pages/userList/UsersList";
import Products from "./pages/productsList/products/products";
import NewUser from "./pages/newUsers/NewUser";
import Analystic from "./pages/analystic/Analystic";

function App() {
  console.log("dashboard");
  return (
    <Router>
      <div>
        <Topbar />
        <div className="container">
          <br />
          <SideBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/users/:userId" element={<Products />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/newCategorie" element={<NewCategories />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/analystic" element={<Analystic />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
