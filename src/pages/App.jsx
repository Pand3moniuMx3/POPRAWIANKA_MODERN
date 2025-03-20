import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Portfolio from "../components/Portfolio";
import Reviews from "../components/Reviews";
import Services from "../components/Services";
import { InputProvider } from "../context/InputContext";
import "../styles/App.css";

export default function App() {
  return (
    <InputProvider>
      <main className="app">
        <Nav />
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Reviews />
        <Contact />
      </main>
    </InputProvider>
  );
}
