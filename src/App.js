import Header from "./components/Header";
import Home from "./components/Routes/Home";
import "./app.css";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Routes/Products";
import Login from "./components/Routes/Login";
import Registration from "./components/Routes/Registration";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Header />
      {/* {true && <Cart />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
