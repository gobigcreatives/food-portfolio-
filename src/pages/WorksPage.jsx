import { useEffect } from "react";
import Works from "../components/Works";

export default function WorksPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Works />
    </main>
  );
}
