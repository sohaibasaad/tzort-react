import React, { useEffect } from 'react'
import Header from "./components/Header";
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
import { Route, Navigate, Routes } from 'react-router-dom';
import Community from './pages/Community';
import CommunityFee from './pages/CommunityFee';
import Testimonials from './pages/Testimonials';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';

import "./App.css"

import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";

function App() {

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BMhqDLbrD7mpeAYK4oGtp8Xe8RLdxriUO0bHGCFfKNiyZfJ-jath8monnmy4LBy2PYKyhyl9ZJTk36VVFrUGUzM",
      });
      console.log("Token Gen", token);
      // Send this token  to server ( db)
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    // Req user for notification permission
    requestPermission();
  }, []);

  return (
    <div>
      <>
        {/* <Router>

        <Header />
        <ScrollToTop>
            <Route path="*" element={<Navigate to="tzort-react/home" replace />} />
            <Route exact path="tzort-react/home" element={<Home />} />
            <Route exact path="tzort-react/about" element={<About />} />
            <Route exact path="tzort-react/contact" element={<Contact />} />
            <Route exact path="tzort-react/community" element={<Community />} />
            <Route exact path="tzort-react/community-fee" element={<CommunityFee />} />
            <Route exact path="tzort-react/testimonials" element={<Testimonials />} />
            <Route exact path="tzort-react/blogs" element={<Blogs />} />
            <Route exact path="tzort-react/blog-details" element={<BlogDetails />} />
            <Route exact path="tzort-react/terms-and-conditions" element={<TermsAndConditions />} />
            <Route exact path="tzort-react/privacy-policy" element={<PrivacyPolicy />} />
        </ScrollToTop>
        <Footer />
      </Router> */}

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
      </>
    </div>

  );
}

export default App;
