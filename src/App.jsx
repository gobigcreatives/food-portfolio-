import { Routes, Route, useLocation } from "react-router-dom";
import { useLenis } from "./hooks/useLenis";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Landing from "./pages/Landing";
import WorksPage from "./pages/WorksPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";

export default function App() {
  useLenis();
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <>
      <Preloader />
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
      </Routes>
      {/* Footer shows on every page except the single-screen landing */}
      {!isLanding && <Footer />}
    </>
  );
}
