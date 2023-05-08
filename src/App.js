import React, { useEffect } from 'react'
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
import Button from './components/DownloadButton';

function App() {


  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();

      window.deferredPrompt = event;
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);


  return (
    <div>
    <>
      <Router>

        <Header />
        <ScrollToTop>
          <Routes>
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
          </Routes>
        </ScrollToTop>
        <Footer />
      </Router>
    </>
    <Button />
    </div>

  );
}

export default App;