import { useEffect } from "react";
import About from "../components/About";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <About />
    </main>
  );
}
