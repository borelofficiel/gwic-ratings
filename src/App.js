import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

// Pages déjà créées
import About from "./pages/About";
import Companies from "./pages/Companies"; // Notation ESG pour entreprises
import Investors from "./pages/Investors"; 
import Methodology from "./pages/Methodology";
import Reporting from "./pages/Reporting";
// import Trainings from "./pages/Trainings";
// import Insights from "./pages/Insights/Insights";
// import Article from "./pages/Insights/Article";
import Contact from "./pages/Contact";
// import Careers from "./pages/Careers/Careers";
// import JobOffer from "./pages/Careers/JobOffer";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import AdminPanel from "./pages/AdminPanel";
// import Terms from "./pages/Legal/Terms";
// import Privacy from "./pages/Legal/Privacy";
// import Sitemap from "./pages/Legal/Sitemap";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/companies" element={<Companies />} />
        {/* Pages non encore créées */}
        <Route path="/investors" element={<Investors />} /> 
        <Route path="/methodology" element={<Methodology />} /> 
        <Route path="/reporting" element={<Reporting />} /> 
        {/* <Route path="/trainings" element={<Trainings />} /> */}
        {/* <Route path="/insights" element={<Insights />} /> */}
        {/* <Route path="/article" element={<Article />} /> */}
        <Route path="/contact" element={<Contact />} /> 
        {/* <Route path="/careers" element={<Careers />} /> */}
        {/* <Route path="/job-offer" element={<JobOffer />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/admin-panel" element={<AdminPanel />} /> */}
        {/* <Route path="/terms" element={<Terms />} /> */}
        {/* <Route path="/privacy" element={<Privacy />} /> */}
        {/* <Route path="/sitemap" element={<Sitemap />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
