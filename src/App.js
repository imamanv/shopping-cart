import Header from "./components/Header";
import Home from "./components/Home";
import "./app.css";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import SignIn from "./components/SignIn";
import Registration from "./components/Registration";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
