import React, { useState } from 'react'
import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Community from './pages/Community';
import CommunityFee from './pages/CommunityFee';
import Testimonials from './pages/Testimonials';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <>
      <Router>

        <Header />
        <ScrollToTop>
          <Routes>
            <Route path="*" element={<Navigate to="/home" replace />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/community" element={<Community />} />
            <Route exact path="/community-fee" element={<CommunityFee />} />
            <Route exact path="/testimonials" element={<Testimonials />} />
            <Route exact path="/blogs" element={<Blogs />} />
            <Route exact path="/blog-details" element={<BlogDetails />} />
            <Route exact path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </Router>
    </>
  );
}

export default App;