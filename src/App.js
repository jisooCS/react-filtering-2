import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter, Route, Routem, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignUp from "./pages/LoginSignUp";
import TestP from "./components/TestP/TestP";

import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids from './components/assets/banner_kids.png'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
    
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/offers" element={<TestP />}/>
          <Route path="/mens" element={<ShopCategory category="men"  banner={men_banner} />} />
          <Route path="/womens" element={<ShopCategory category="women"banner={women_banner} />} />
          <Route path="/kids" element={<ShopCategory category="kid" banner={kids} />} />
          <Route path="/product" element={<Product />}>
            <Route path=":pruductId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
