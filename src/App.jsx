import StickyNavbar from "./components/StickyNavbar";
// import Footer from "./components/Footer";
import { Route, Routes } from "react-router";
import Venue from "./pages/Venue";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Schedules from "./pages/Schedules";
import Speakers from "./pages/Speakers";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <StickyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/schedules" element={<Schedules />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
