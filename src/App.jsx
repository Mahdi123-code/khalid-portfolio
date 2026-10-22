import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/layouts/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/layouts/Footer";
import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />

        </Routes>
      </main>

      <Footer/>
    </BrowserRouter>
  );
}
