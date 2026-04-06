import { useEffect } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Domains from "./components/Domains";
import Timeline from "./components/Timeline";
import Registration from "./components/Registration";
import Coordinators from "./components/Coordinators";
import Footers from "./components/Footers";
import Footer from "./components/Footer";
import FAQSection from "./components/FAQs";

function App() {
  useEffect(() => {
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("revealed");
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }, []);

return (
  <>
    <Navbar />
    <Hero />
    <Ticker />
    <About />
    <Domains />
    <Timeline/>
    <Registration/>
    <Coordinators/>
    <FAQSection/>
    <Footer/>

  </>
);
}

export default App;