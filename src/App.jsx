import { useLenis } from "./hooks/useLenis";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Works from "./components/Works";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  useLenis();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Works />
        <About />
        <Footer />
      </main>
    </>
  );
}
