import logo from "./logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "./App.css";
// import Navbar from "./CompBoot/Navbar";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { Switch } from "react-router";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Products from "./Components/AddProducts";
import Footer from "./Components/Footer";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Shope from "./Components/Shope";
import PR from "./CompBoot/PR";
import CustomDrawer from "./Components/CustomDrawer";
import ShowProduct from "./Components/ShowProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route element={<PR />}>
            <Route path="/" element={<Home />} />
            <Route path="/p" element={<Products />} />
            <Route path="/sp" element={<ShowProduct />} />
            <Route path="/s" element={<Shope />} />

            {/* <Route path="/logout" element={<Logout/>} /> */}
          </Route>
          <Route path="/signIn" element={<SignIn />} />

          <Route path="/signUp" element={<SignUp />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
