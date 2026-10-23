import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/layouts/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/layouts/Footer";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Research from "./pages/Research/Research";
import Contact from "./pages/Contact/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer/>
    </BrowserRouter>
  );
}
