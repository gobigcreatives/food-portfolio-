import { Routes, Route } from "react-router-dom";
import { useLenis } from "./hooks/useLenis";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import ProjectPage from "./pages/ProjectPage";

export default function App() {
  useLenis();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </>
  );
}
