import Header from "./components/Header";
import Home from "./components/Routes/Home";
import "./app.css";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Routes/Products";
import SignIn from "./components/Routes/SignIn";
import Registration from "./components/Routes/Registration";

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
