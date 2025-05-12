import React, { useState } from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ChamadaSection from "./components/ChamadaSection";
import AtuacaoSection from "./components/AtuacaoSection";
import SobreSection from "./components/SobreSection";
import FeedbackSection from "./components/FeedbackSection";
import FAQSection from "./components/FAQSection";
import LinksSection from "./components/LinksSection";
import ContactSection from "./components/ContactSection";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

import StephanySobre1 from "./images/sobre1.png";
/* import StephanySobre2 from "./images/sobre2.png"; */

function App() {
  const [sobreImg, setSobreImg] = useState(StephanySobre1);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HeroSection />
      <AtuacaoSection />
      <ChamadaSection />
      <SobreSection sobreImg={sobreImg} setSobreImg={setSobreImg} />
      <FeedbackSection />
      <FAQSection />
      <LinksSection />
      <ContactSection />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
