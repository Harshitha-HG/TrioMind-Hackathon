import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landingpage";
import FeaturesPage from "./pages/featurespage";
import TrendsPage from "./pages/trendspage";
import LoginPage from "./pages/loginpage";
import RegisterPage from "./pages/registerpage";
import AboutPage from "./pages/aboutpage";
import EducationPage from "./pages/educationpage";

// ✅ New detail pages
import PoliticalManipulation from "./pages/PoliticalManipulation";
import SocialEngineering from "./pages/SocialEngineering";
import FinancialScams from "./pages/FinancialScams"
import CyberWarfare from "./pages/CyberWarfare";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/trends" element={<TrendsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* ✅ New mapped detail routes */}
        <Route path="/politicalmanipulation" element={<PoliticalManipulation />} />
        <Route path="/socialengineering" element={<SocialEngineering />} />
        <Route path="/financialscams" element={<FinancialScams />} />
        <Route path="/cyberwarfare" element={<CyberWarfare />} />
      </Routes>
    </Router>
  );
}

export default App;
