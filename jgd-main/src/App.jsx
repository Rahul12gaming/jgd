import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Nextpg from "../src/nxtPage/NextPg";
import ProductPage from "./pages/ProuductPage";
import DealerForm from "./pages/Dealer";
import ContactUs from "./pages/Contact";
import Header from "./components/navbar/header";
import AnimatedFooter from "./section/footer/Footer";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/next" element={<Nextpg />} />
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/dealer" element={<DealerForm/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
      <AnimatedFooter/>
    </Router>
  );
}

export default App;