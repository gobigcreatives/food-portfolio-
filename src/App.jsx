import { Routes, Route } from "react-router-dom";
import { useLenis } from "./hooks/useLenis";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import WorksPage from "./pages/WorksPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";

export default function App() {
  useLenis();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
      </Routes>
    </>
  );
}
