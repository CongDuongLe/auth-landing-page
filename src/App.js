import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from './components/Login';
import Product from "./components/Product";
import Contact from "./components/Contact";
//react router dom import element
import {Routes, Route, } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "../src/components/protected/Protected";
import Skill from "./components/Skill";
// create Context



function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        <Routes
        // set initial route is Home   
        >
          <Route path=":login" element={<Login />} />
          <Route path="/home" element={
            <Protected>
              <Home />
            </Protected>} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
